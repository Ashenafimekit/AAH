import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
const apiUrl = import.meta.env.VITE_API_URL;

const AdminBookList = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/book/list`);
        setFormData(response.data.lists);
        console.log(formData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    fetchData();
  }, [formData]);

  const handleDelete = async (data) => {
    console.log("deleted data : ", data);

    try {
      await axios.delete(`${apiUrl}/book/delete/${data._id}`, data);
      console.log("deleted data : ", data);
      window.location.reload();
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const handleEdit = (data) => {};

  const columns = [
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "roomType", headerName: "Room Type", width: 150 },
    { field: "chekInDate", headerName: "check In Date", width: 150 },
    { field: "checkOutDate", headerName: "Check Out Date", width: 150 },
    { field: "duration", headerName: "Duration", width: 80 },
    { field: "id", headerName: "Id No.", width: 150 },
    { field: "roomNo", headerName: "Room No.", width: 70 },
    { field: "tinNo", headerName: "Tin No.", width: 150 },
    { field: "mobile", headerName: "Phone", width: 150 },
    { field: "nationality", headerName: "Nationality", width: 150 },

    {
      field: "Edit",
      headerName: "Edit",
      width: 60, // Reduce width to match smaller button
      renderCell: (params) => (
        <button
          className="bg-green-600 text-white text-xs px-2 py-1 rounded-sm"
          onClick={() => handleEdit(params.row)}
        >
          Edit
        </button>
      ),
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 60, // Reduce width for consistency
      renderCell: (params) => (
        <button
          className="bg-red-600 text-white text-xs px-2 py-1 rounded-sm"
          onClick={() => handleDelete(params.row)}
        >
          Del
        </button>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full ">
      <div className="text-center ">
        <h1 className="text-2xl">GUEST LIST</h1>
      </div>
      <div className="w-11/12 ">
        <Paper sx={{ height: 450, width: "100%" }}>
          <DataGrid
            rows={formData}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
              border: 0,
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#ebf8ff !important",
              },}}
            getRowId={(row) => row._id}
          />
        </Paper>
      </div>
    </div>
  );
};

export default AdminBookList;
