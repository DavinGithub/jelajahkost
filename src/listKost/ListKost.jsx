import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./component/navbar";
import { useNavigate } from "react-router-dom";


const KostCard = ({ kost, onClick }) => (
  <div
    onClick={onClick}
    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg cursor-pointer"
  >
    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
      <img
        src={kost.image || "https://via.placeholder.com/300"}
        alt="card-image"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="p-4">
      {kost.isPopular && (
        <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
          POPULAR
        </div>
      )}
      <h6 className="mb-2 text-slate-800 text-xl font-semibold">{kost.name}</h6>
      <p className="text-slate-800 leading-norma font-semibold">{kost.status}</p>
      <p className="text-slate-800 leading-normal font-semibold">{kost.description}</p>

      {kost.address}, {kost.city}, {kost.regency}
      <br />
      {kost.price}/bulan
    </div>
  </div>
);

const ListKost = () => {
  const [kostData, setKostData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("You must be logged in to view the kost list.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://bpkbautodigital.com/api/kost", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.status === "success") {
          setKostData(response.data.data);
          setFilteredData(response.data.data);
        } else {
          setError("Failed to fetch kost data.");
        }
      } catch (error) {
        console.error("Error fetching kost data:", error);
        setError("An error occurred while fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredData(kostData);
    } else {
      const filtered = kostData.filter((kost) => {
        const searchQuery = query.toLowerCase();
        return (
          kost.name.toLowerCase().includes(searchQuery) || // Nama kost
          kost.description.toLowerCase().includes(searchQuery) || // Deskripsi
          kost.address.toLowerCase().includes(searchQuery) || // Alamat
          kost.city.toLowerCase().includes(searchQuery) || // Kota
          kost.regency.toLowerCase().includes(searchQuery) // Kabupaten
        );
      });
      setFilteredData(filtered);
    }
  };
  

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar showNavbar={true} onSearch={handleSearch} />

      {/* Konten ListKost */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {filteredData.map((kost) => (
            <KostCard
              key={kost.id}
              kost={kost}
              onClick={() => navigate(`/detail/${kost.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListKost;
