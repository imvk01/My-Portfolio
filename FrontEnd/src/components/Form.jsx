import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Form = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    city: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const cityOptions = [
    "Please select",
    "Amritsar",
    "Jalandhar",
    "Ludhiana",
    "Chandigarh",
    "Mohali",
    "Panchkula",
    "Zirakpur",
    "Patiala",
    "Bathinda",
    "Gurdaspur",
    "Pathankot",
    "Hoshiarpur",
    "Kapurthala",
    "Phagwara",
    "Moga",
    "Firozpur",
    "Faridkot",
    "Sangrur",
    "Barnala",
    "Kolkata",
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Mumbai",
    "Chennai",
    "Pune",
    "Guntur",
    "Ongole",
    "Vadodara",
    "Navsari",
    "Mysuru",
    "Aurangabad",
    "Thane",
    "Navi Mumbai",
  ];

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set default values if not provided
    const submittedData = {
      ...formData,
      email: formData.email || "NA",
      city: formData.city || "NA",
    };

    try {
      setLoading(true);
      const res = await fetch(
        "http://localhost:3000/api/callback/send-callback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submittedData),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      window.alert("Our Consultant Will Contact You Soon!");
      onClose();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={formRef}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative z-60"
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-2 right-2 text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-3xl mb-4 text-center">Request Callback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Enter 10 digit mobile number"
              required
              pattern="[0-9]{10}"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Select City 
            </label>
            <select
              name="city"
              id="city"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleChange}
              value={formData.city}
            >
              {cityOptions.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 bg-gray-500 text-white px-4 py-2 w-full rounded-full hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-800 text-white px-4 py-2 w-full rounded-full hover:opacity-85"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
