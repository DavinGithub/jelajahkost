import React, { useEffect, useState } from "react";
import axios from "axios";

const KostComponent = () => {
  const [kostData, setKostData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get("https://bpkbautodigital.com/api/kost/");
          if (response.data.status === "success") {
            setKostData(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching kost data:", error);
          // You can set an error state here to display a message to the user
          alert("An error occurred while fetching data. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
      

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-[-10%] mr-[3%]">
      {kostData.map((kost) => (
        <div key={kost.id} className="bg-white rounded-lg shadow-lg p-4 w-[585px] h-[736px] flex items-center justify-center mb-4">
          <div className="text-center">
            <img
              src={kost.image || "https://via.placeholder.com/150"}
              alt={kost.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{kost.name}</h3>
            <p className="text-gray-600">Mulai dari Rp {kost.price}/bulan</p>
            <p className="text-gray-500">{kost.description}</p>
            <p className="text-gray-400">
              Lokasi: {kost.address}, {kost.city}, {kost.regency}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KostComponent;
