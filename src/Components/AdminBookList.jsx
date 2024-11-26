import axios from "axios";
import React, { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;


const AdminBookList = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/book/list`
        );
        setFormData(response.data.lists);
        console.log("check : ",response.data.lists);
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete =(data)=>{

  }

  const handleEdit =(data)=>{

  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <div className="text-center ">
        <h1 className="text-3xl">ARAB ALI HOTEL</h1>
        <h1 className="text-2xl">GUEST LIST</h1>
      </div>
      <div className="w-5/6 overflow-auto max-w-full max-h-[450px] border">
        <table className="">
          <thead className="sticky top-0">
            <tr className="border border-black bg-golden ">
              <th className="border-2 border-black p-2 ">No.</th>
              <th className="border-2 border-black p-2 ">Full Name</th>
              <th className="border-2 border-black p-2 ">Check In Date</th>
              <th className="border-2 border-black p-2 ">Check Out Date</th>
              <th className="border-2 border-black p-2 ">Duration of Stay</th>
              <th className="border-2 border-black p-2 ">Passport/Id No.</th>
              <th className="border-2 border-black p-2 ">Room No.</th>
              <th className="border-2 border-black p-2 ">Tin No.</th>
              <th className="border-2 border-black p-2 ">Mobile</th>
              <th className="border-2 border-black p-2 ">Nationality</th>
              <th className="border-2 border-black p-2 ">Edit</th>
              <th className="border-2 border-black p-2 ">Delete</th>
            </tr>
          </thead>
          <tbody>
             {formData.map((data,index) => (
              <tr key={data.id} className="bg-blueBlack text-white ">
                <td className="border-2 border-black p-2">{index + 1}</td>
                <td className="border-2 border-black p-2">{data.fullName}</td>
                <td className="border-2 border-black p-2">{data.chekInDate}</td>
                <td className="border-2 border-black p-2">{data.checkOutDate}</td>
                <td className="border-2 border-black p-2">{data.duration}</td>
                <td className="border-2 border-black p-2">{data.id}</td>
                <td className="border-2 border-black p-2">{data.roomNo}</td>
                <td className="border-2 border-black p-2">{data.tinNo}</td>
                <td className="border-2 border-black p-2">{data.mobile}</td>
                <td className="border-2 border-black p-2">{data.nationality}</td>
                <td className="border-2 border-black p-2">
                  <button className="bg-white p-1 text-black rounded-sm" onClick={()=>handleEdit(data)}>
                    Edit
                  </button>
                </td>
                <td className="border-2 border-black p-2">
                  <button className="bg-white p-1 text-black rounded-sm" onClick={()=>handleDelete(data)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookList;
