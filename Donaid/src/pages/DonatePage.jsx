import React from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const DonatePage = () => {
  const { id: campaignId } = useParams();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Hit backend to create order
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/payments/create-order`,
        {
          amount: Number(amount), // convert to paise
          campaignId,
        }
      );
      console.log(amount);
      const orderData = res.data.order;

      // 2. Setup Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Use env key for frontend
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Donaid",
        description: "Donaid Transaction",
        image: "https://example.com/your_logo", // Optional
        order_id: orderData.id, // Razorpay order_id

        handler: function (response) {
          if (
            !response.razorpay_order_id ||
            !response.razorpay_payment_id ||
            !response.razorpay_signature
          ) {
            alert("Payment incomplete. Missing critical fields.");
            return;
          }
          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/api/payments/verify-order`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              campaignId, // Optional: Include if your backend needs it
            })
            .then(() => alert("Payment Successful!"))
            .catch((err) => {
              console.error("Verification failed:", err.response?.data);
              alert("Payment verification failed. Check console for details.");
            });
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },

        notes: {
          message: formData.message,
          campaignId: campaignId,
        },

        theme: {
          color: "#3399cc",
        },
      };

      // 4. Open Razorpay
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        alert("Payment Failed. Reason: " + response.error.description);
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong while initiating payment.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Donor Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-right text-gray-700 font-semibold">
            Donating ₹{amount}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonatePage;
