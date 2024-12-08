import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
const apiUrl = import.meta.env.VITE_API_URL;

const AdminTestimony = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/testimonial/lists`);
        setData(response.data.testimonials);
        console.log("incoming data : ", response.data.testimonials);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchData();
  }, []);

  const handleApprove = async (data) => {
    console.log("befor approved : ",data);
    try {
      await axios
        .put(`${apiUrl}/testimonial/approve/${data._id}`)
        .then((res) => {
          const newTestimony = res.data.testimonial;
          console.log("new tesimony : ",newTestimony)
          setData((prevData) =>
            prevData.map((testimony) =>
              testimony._id === newTestimony._id ? newTestimony : testimony
            )
          );
        });
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  const handleDecline = async (data) => {
    try {
      await axios.delete(`${apiUrl}/testimonial/cancel/${data._id}`, data);
      console.log("Declined Testimony : ", data);
      window.location.reload();
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const columns = [
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "message", headerName: "Message", width: 400 },
    { field: "status", headerName: "Status", width: 100 },
    {
      field: "Approve",
      headerName: "Approve",
      width: 80,
      renderCell: (params) => (
        <button
          className="bg-green-600 text-white px-2 rounded"
          onClick={() => handleApprove(params.row)}
        >
          Approve
        </button>
      ),
    },
    {
      field: "Decline",
      headerName: "Delete",
      width: 80,
      renderCell: (params) => (
        <button
          className="bg-red-600 text-white px-2 rounded"
          onClick={() => handleDecline(params.row)}
        >
          Delete
        </button>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="py-5">
        <h1 className="text-2xl text-center font-semibold">
          Testimonial Approval Table
        </h1>
      </div>
      <div className="w-11/12">
        <Paper sx={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
            getRowId={(row) => row._id}
          />
        </Paper>
      </div>
    </div>
  );
};

export default AdminTestimony;
