import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const KostComponent = () => {
  const [kostData, setKostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  // Fetch Kost Data
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("You must be logged in to view the kost list.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://jelajahkost.com/api/kost", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.status === "success") {
          setKostData(response.data.data);
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

  // Auto-Slide Logic
  useEffect(() => {
    if (kostData.length > 1) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % kostData.length);
      }, 5000);
      return () => clearInterval(slideInterval);
    }
  }, [kostData]);

  const handleCheckout = async (kostId) => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("You must be logged in to checkout.");
      return;
    }

    try {
      const response = await axios.post(
        "https://jelajahkost.com/api/payment/checkout",
        { kost_id: kostId },
        {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        window.location.href = response.data.snap_url; // Redirect to snap_url
      } else {
        alert(response.data.message || "Failed to initiate checkout.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Error during checkout. Please try again.");
    }
  };

  if (loading) return <div className="text-center text-gray-600">Loading kost data...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (kostData.length === 0) return <div className="text-center text-gray-500">No kost data available.</div>;

  const currentKost = kostData[currentIndex];

  return (
    <div className="relative flex items-center justify-center mt-10">
      <div className="bg-white rounded-lg shadow-lg p-4 w-[585px] h-[736px] flex items-center justify-center">
        <div className="text-center w-full h-full" onClick={() => navigate(`/Detail/${currentKost.id}`)}>
            
          <img
            src={currentKost.image || "https://via.placeholder.com/150"}
            alt={currentKost.name}
            className="w-full h-[70%] object-cover rounded-lg mb-10"
          />
           <h3 className="text-xl font-bold text-gray-800 text-left mb-2">{currentKost.name}</h3>
          <p className="text-gray-600 text-left">Mulai dari Rp {currentKost.price}/bulan</p>
          <p className="text-gray-600 text-left">{currentKost.description}</p>
          <p className="text-gray-600 text-left">
            Lokasi: {currentKost.address}, {currentKost.city}, {currentKost.regency}
          </p>
          <p className="text-gray-600 text-left">
            Status: {currentKost.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KostComponent;
