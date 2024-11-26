import axios from "axios";
import React, { useEffect, useState } from "react";
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



  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="py-5">
        <h1 className="text-2xl text-center font-semibold">
          Contact Message From Customers
        </h1>
      </div>

      <div className="w-3/4 overflow-auto max-w-full max-h-[450px] ">
        <table className="">
          <thead className="sticky top-0">
            <tr className="border border-black bg-golden ">
              <th className="border-2 border-black p-2 w-10">No.</th>
              <th className="border-2 border-black p-2 w-40">Full Name</th>
              <th className="border-2 border-black p-2 w-40">Email</th>
              <th className="border-2 border-black p-2 w-72">Message</th>
              <th className="border-2 border-black p-2 w-28 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index} className="bg-blueBlack text-white ">
                <td className="border-2 border-black p-2">{index + 1}</td>
                <td className="border-2 border-black p-2">{data.fullName}</td>
                <td className="border-2 border-black p-2">{data.email}</td>
                <td className="border-2 border-black p-2">{data.message}</td>
                <td className="border-2 border-black p-2 text-center">
                  <button
                    className="bg-red-500 p-1 text-black rounded-sm"
                    onClick={() => handleDelete(data)}
                  >
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

export default AdminContact;
