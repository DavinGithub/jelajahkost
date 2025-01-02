import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [kost, setKost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snapUrl, setSnapUrl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(""); // State untuk tanggal masuk
  const [nextPaymentDate, setNextPaymentDate] = useState(""); // State untuk tanggal pembayaran berikutnya

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `https://jelajahkost.com/api/kost/detail/${id}`
        );
        setKost(response.data.data);
      } catch (err) {
        setError("Failed to fetch detail data");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  // Update tanggal pembayaran berikutnya setiap kali selectedDate berubah
  useEffect(() => {
    if (selectedDate) {
      const currentDate = new Date(selectedDate);
      currentDate.setDate(currentDate.getDate() + 30); // Tambahkan 30 hari
      setNextPaymentDate(currentDate.toISOString().split("T")[0]); // Format YYYY-MM-DD
    } else {
      setNextPaymentDate(""); // Reset jika tidak ada tanggal
    }
  }, [selectedDate]);

  const handleCheckout = async (kostId) => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("You must be logged in to checkout.");
      return;
    }

    if (!selectedDate) {
      alert("Please select a booking date.");
      return;
    }

    try {
      const response = await axios.post(
        "https://jelajahkost.com/api/payment/checkout",
        { kost_id: kostId, check_in: selectedDate }, // Kirim tanggal
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        window.location.href = response.data.snap_url;
      } else {
        alert(response.data.message || "Failed to initiate checkout. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Error during checkout. Please ensure you're logged in and try again.");
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">
        {/* Gambar */}
        <div className="w-full md:w-1/2">
          <img
            src={kost.image || "https://via.placeholder.com/400"}
            alt={kost.name}
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        {/* Detail Card */}
        <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
          <div>
            {/* Nama Produk */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{kost.name}</h1>
            {/* Deskripsi */}
            <p className="text-gray-600 text-sm mb-4">{kost.description}</p>

            {/* Harga */}
            <div className="mb-4">
              <p className="text-gray-500">Harga:</p>
              <p className="text-blue-500 font-bold text-xl">Rp {kost.price} / bulan</p>
            </div>

            {/* Lokasi */}
            <div className="mb-4">
              <p className="text-gray-500">Lokasi:</p>
              <p className="text-gray-700">
                {kost.address}, {kost.city}, {kost.regency}
              </p>
            </div>

            {/* Input Tanggal */}
            <div className="mb-4">
              <label htmlFor="booking-date" className="text-gray-500 block mb-2">
                Pilih Tanggal Masuk:
              </label>
              <input
                type="date"
                id="booking-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>

            {/* Form dengan Tanggal Pembayaran Berikutnya */}
            {selectedDate && (
              <div className="mb-5">
                <label
                  htmlFor="username-success"
                  className="block mb-2 text-sm font-medium text-green-700"
                >
                  Informasi Pembayaran
                </label>
                <input
                  type="text"
                  id="username-success"
                  value={`Pembayaran berikutnya: ${nextPaymentDate}`}
                  readOnly
                  className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                />
                <p className="mt-2 text-sm text-green-600">
                  <span className="font-medium">Info:</span> Pembayaran akan
                  diperbarui secara otomatis setelah 30 hari.
                </p>
              </div>
            )}
          </div>

          {/* Beli */}
          <div className="mt-6">
            <button
              onClick={() => handleCheckout(kost.id)}
              className="bg-blue-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Bayar Sekarang
            </button>
          </div>

          {/* Snap URL */}
          {snapUrl && (
            <div className="mt-4 text-center">
              <p className="text-green-500">Snap View URL:</p>
              <a
                href={snapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {snapUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
