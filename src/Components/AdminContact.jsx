import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
const apiUrl = import.meta.env.VITE_API_URL;

const AdminContact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/contact/messages`);
        setData(response.data.lists);
        console.log("incoming data : ", response.data.lists);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (data) => {};

  const columns = [
    
    { field: "fullName", headreName: "fullName", width: 150 },
    { field: "email", headreName: "email", width: 300 },
    { field: "message", headreName: "message", width: 400 },
    {
      field: "Delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <button
          className="bg-red-600 text-white px-4 py-1 rounded"
          onClick={() => handleDelete(params.row)}
        >
          Click Me
        </button>
      ),
    },

  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="py-5">
        <h1 className="text-2xl text-center font-semibold">
          Contact Message From Customers
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

export default AdminContact;
