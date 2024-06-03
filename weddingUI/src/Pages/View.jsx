import { useState, useEffect } from "react";
import axios from "../Api/axios";

export default function View() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/view');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center mt-10 h-screen">
          <h1 className="text-3xl font-bold text-center text-white">View your wedding Mchango</h1>

          {data && <div className="bg-teal-100 mt-10 p-3">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">FullName</th>
                  <th className="py-3 px-6 text-left">Amount</th>
                  <th className="py-3 px-6 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="text-gray-700 text-sm font-light">
                    <td className="py-3 px-6 text-left">{item.Name}</td>
                    <td className="py-3 px-6 text-left">{item.Amount}</td>
                    <td className="py-3 px-6 text-center">{item.Status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>}
        </div>
      </div>
    </>
  );
}