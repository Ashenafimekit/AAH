import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
const apiUrl = import.meta.env.VITE_API_URL;

const AdminBookList = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/book/list`);
        setFormData(response.data.lists);
        console.log("incoming booked data : ", formData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (data) => {
    console.log("deleted data : ", data);

    try {
      await axios.delete(`${apiUrl}/book/delete/${data._id}`, data);
      setFormData((prevFormData) =>
        prevFormData.filter((guest) => guest._id !== data._id)
      );
      // console.log("deleted data : ", data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const columns = [
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "roomType", headerName: "Room Type", width: 150 },
    { field: "formattedCheckInDate", headerName: "check In Date", width: 150 },
    {
      field: "formattedCheckOutDate",
      headerName: "Check Out Date",
      width: 150,
    },
    { field: "duration", headerName: "Duration", width: 80 },
    { field: "id", headerName: "Id No.", width: 150 },
    { field: "roomNo", headerName: "Room No.", width: 70 },
    { field: "tinNo", headerName: "Tin No.", width: 150 },
    { field: "mobile", headerName: "Phone", width: 150 },
    { field: "nationality", headerName: "Nationality", width: 100 },
    { field: "status", headerName: "Status", width: 80 },

    {
      field: "edit",
      headerName: "Edit",
      width: 60,
      renderCell: (params) => (
        <ModalButton row={params.row} setFormData={setFormData} />
      ),
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 60,
      renderCell: (params) => (
        <button
          className="bg-red-600 text-white text-xs px-2 py-1 rounded-sm"
          onClick={() => handleDelete(params.row)}
        >
          Delete
        </button>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const ModalButton = ({ row, setFormData }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [EditedData, setEditedData] = useState({
      fullName: row.fullName,
      roomType: row.roomType,
      checkInDate: row.formattedCheckInDate,
      checkOutDate: row.formattedCheckOutDate,
      duration: row.duration,
      id: row.id,
      roomNo: row.roomNo,
      tinNo: row.tinNo,
      status: "confirmed",
      mobile: row.mobile,
      nationality: row.nationality,
    });

    const handleChange = (e) => {
      setEditedData({
        ...EditedData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("confirmed data : ", EditedData)
      try {
        await axios
          .put(`${apiUrl}/book/update/${row._id}`, EditedData)
          .then((res) => {
            //console.log("updated data : ", res.data.updatedData);
            const updatedGuest = res.data.updatedData;
            setFormData((prevFormData) =>
              prevFormData.map((guest) =>
                guest._id === updatedGuest._id ? updatedGuest : guest
              )
            );
          });
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    return (
      <div>
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
            padding: "1px 1px",
            fontSize: "12px",
          }}
          onClick={handleOpen}
        >
          Edit
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Confirm Customer Data
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="h-[85vh] w-full">
                <div className="flex flex-col border mx-8 h-full w-full">
                  <h1 className="text-2xl text-center uppercase font-semibold flex justify-center">
                    Edit Guest Data
                  </h1>
                  <form
                    onSubmit={handleSubmit}
                    className="bg-blueBlack rounded-md w-full max-w-2xl h-11/12 flex flex-col justify-start items-center mx-auto mt-2 py-2 overflow-y-auto"
                  >
                    <div className="w-full max-w-lg">
                      {/* Full Name */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="fullName"
                          className="text-white text-lg font-normal mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder="Enter full name"
                          value={EditedData.fullName}
                          onChange={handleChange}
                          className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                        />
                      </div>

                      {/* Room Type */}
                      <div className="flex flex-col mt-2">
                        <label
                          htmlFor="roomType"
                          className="text-white text-lg font-normal mb-1"
                        >
                          Room Type
                        </label>
                        <select
                          id="roomType"
                          name="roomType"
                          value={EditedData.roomType}
                          onChange={handleChange}
                          className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                        >
                          <option value="Single">Single</option>
                          <option value="King">King</option>
                          <option value="Twin">Twin</option>
                        </select>
                      </div>

                      {/* Date Inputs (Check-in and Check-out) */}
                      <div className="flex flex-row space-x-4 mt-2 relative">
                        <div className="flex flex-col w-1/2">
                          <label
                            htmlFor="checkInDate"
                            className="text-white text-lg font-normal mb-1"
                          >
                            Check-in Date
                          </label>
                          <input
                            type="date"
                            id="checkInDate"
                            name="checkInDate"
                            value={EditedData.formattedCheckInDate}
                            onChange={handleChange}
                            className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50 text-center"
                          />
                          <div className="absolute inset-y-0 -left-1 top-8 flex items-center pl-3 pointer-events-none cursor-pointer">
                            <CalendarMonthOutlinedIcon className="text-gray-400" />
                          </div>
                        </div>
                        <div className="flex flex-col w-1/2 relative">
                          <label
                            htmlFor="checkOutDate"
                            className="text-white text-lg font-normal mb-1"
                          >
                            Check-out Date
                          </label>
                          <input
                            type="date"
                            id="checkOutDate"
                            name="checkOutDate"
                            value={EditedData.formattedCheckOutDate}
                            onChange={handleChange}
                            className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50 text-center"
                          />
                          <div className="absolute inset-y-0 -left-1 top-8 flex items-center pl-3 pointer-events-none cursor-pointer">
                            <CalendarMonthOutlinedIcon className="text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {/* Room Number */}
                      <div className="flex flex-col mt-2">
                        <label
                          htmlFor="roomNumber"
                          className="text-white text-lg font-normal mb-1"
                        >
                          Room Number
                        </label>
                        <input
                          type="number"
                          id="roomNo"
                          name="roomNo"
                          placeholder="Enter Room Number"
                          value={EditedData.roomNo}
                          onChange={handleChange}
                          className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                        />
                      </div>

                      {/* Phone Number & Tin Number */}
                      <div className="flex flex-row space-x-4 mt-2">
                        <div className="flex flex-col w-1/2">
                          <label
                            htmlFor="mobile"
                            className="text-white text-lg font-normal mb-1"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            id="mobile"
                            placeholder="Enter phone number"
                            name="mobile"
                            value={EditedData.mobile}
                            onChange={handleChange}
                            className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                          />
                        </div>
                        <div className="flex flex-col w-1/2">
                          <label
                            htmlFor="tinNo"
                            className="text-white text-lg font-normal mb-1"
                          >
                            Tin Number
                          </label>
                          <input
                            type="text"
                            id="tinNo"
                            name="tinNo"
                            value={EditedData.tinNo}
                            onChange={handleChange}
                            className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                          />
                        </div>
                      </div>

                      {/* Passport/ID Number & Nationality */}
                      <div className="flex flex-row space-x-4 mt-2">
                        <div className="flex flex-col w-1/2">
                          <label
                            htmlFor="id"
                            className="text-white text-lg font-normal mb-1"
                          >
                            Passport/Id Number
                          </label>
                          <input
                            type="text"
                            id="id"
                            name="id"
                            placeholder="Enter Passport/ID"
                            value={EditedData.id}
                            onChange={handleChange}
                            className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                          />
                        </div>
                        <div className="flex flex-col w-1/2">
                          <label
                            htmlFor="nationality"
                            className="text-white text-lg font-normal mb-1"
                          >
                            Nationality
                          </label>
                          <input
                            type="text"
                            id="nationality"
                            name="nationality"
                            placeholder="Enter nationality"
                            value={EditedData.nationality}
                            onChange={handleChange}
                            className="border text-lg rounded-md py-1 px-3 w-full focus:outline-none border-golden bg-blue-50"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        // onClick={handleClose}
                        className="bg-blue-500 text-white text-lg py-2 px-6 rounded-md mt-6 w-full hover:bg-blue-600"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

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
              },
            }}
            getRowId={(row) => row._id}
          />
        </Paper>
      </div>
    </div>
  );
};

export default AdminBookList;
