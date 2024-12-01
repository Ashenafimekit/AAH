import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const apiUrl = import.meta.env.VITE_API_URL;

const BookingHistory = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/book/booking-history`);
        setFormData(response.data.bookingHistory);
        console.log("incoming booked data : ", formData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    fetchData();

    const eventSource = new EventSource(`${apiUrl}/events`);
    eventSource.onmessage = (event) => {
      const newBooking = JSON.parse(event.data);
      setFormData((prevData) => [...prevData, newBooking]);
    };

    eventSource.onerror = (error) => {
      console.log("Error : ", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const handleDelete = async (data) => {
    console.log("deleted data : ", data);

    try {
      await axios.delete(`${apiUrl}/book/delete/${data._id}`, data);
      setFormData((prevFormData) =>
        prevFormData.filter((guest) => guest._id !== data._id)
      );
      console.log("deleted data : ", data);
      //window.location.reload();
    } catch (error) {
      console.log("Error : ", error);
      <EditBookedData />;
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
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const ModalButton = ({ row }) => {
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
      try {
        await axios.put(`${apiUrl}/book/update/${row._id}`, EditedData);
        console.log("sucess");
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
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-5 border border-black px-10 py-4 rounded-lg w-full bg-blueBlack"
              >
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="flex flex-col gap-2 text-lg text-white">
                    <label className="">Full Name </label>
                    <label className="">Room Type </label>
                    <label className="">Check in Date </label>
                    <label className="">Check Out Date </label>
                    <label className="">Duration of Stay </label>
                    <label className="">Passport/Id </label>
                    <label className="">Room Number</label>
                    <label className="">Tin Number</label>
                    <label className="">Mobile</label>
                    <label className="">Nationality</label>
                  </div>
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      name="fullName"
                      value={EditedData.fullName}
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    />
                    <select
                      value={EditedData.roomType}
                      name="roomType"
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    >
                      <option value="Single">SINGLE</option>
                      <option value="king">KING</option>
                      <option value="Twin">TWIN</option>
                    </select>
                    <input
                      type="text"
                      name="checkInDate"
                      value={EditedData.checkInDate}
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    />
                    <input
                      type="text"
                      name="checkOutDate"
                      value={EditedData.checkOutDate}
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    />
                    <input
                      type="number"
                      name="duration"
                      value={EditedData.duration}
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    />
                    <input
                      type="text"
                      name="id"
                      value={EditedData.id}
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    />
                    <input
                      type="number"
                      name="roomNo"
                      value={EditedData.roomNo}
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    />
                    <input
                      type="text"
                      name="tinNo"
                      value={EditedData.tinNo}
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    />
                    <input
                      type="text"
                      name="mobile"
                      value={EditedData.mobile}
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    />
                    <input
                      type="text"
                      name="nationality"
                      value={EditedData.nationality}
                      onChange={handleChange}
                      className="border border-black rounded-md w-52 text-center font-semibold h-8"
                    />
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="bg-golden px-8 py-2 rounded-lg font-bold"
                  >
                    Update
                  </button>
                </div>
              </form>
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

export default BookingHistory;
