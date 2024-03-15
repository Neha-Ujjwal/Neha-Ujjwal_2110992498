import React, { useState } from "react";
import homeImage from "../assets/images/home.jpg";
import BookingDetails from "./BookingDetails";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingSection = () => {
  const [bookForm, setBookForm] = useState({
    email: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupTime: "",
    cabType: "",
  });
  const [bookingData, setBookingData] = useState({
    timeTaken: "",
    dropoffTime: "",
    message: "",
    cabBooked: "",
    price: "",
    cabType: "",
  });
  const [toastShown, setToastShown] = useState(false);

  const updateBookForm = (e) => {
    const { name, value } = e.target;
    setBookForm({
      ...bookForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://neha-ujjwal-2110992498-1.onrender.com/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookForm),
        }
      );
      const res = await response.json();

      if (!response.ok) {
        setBookingData({
          timeTaken: res.minTimeTaken,
          dropoffTime: res.dropOffTime,
          message: res.message,
          cabBooked: res.cabBooked,
          price: res.price,
          cabType: bookForm.cabType,
        });
        if (!toastShown) {
          toast.error(res.message);
          setToastShown(true);
        }
      } else {
        setBookingData({
          timeTaken: res.minTimeTaken,
          dropoffTime: res.dropOffTime,
          message: res.message,
          cabBooked: res.cabBooked,
          price: res.price,
          cabType: bookForm.cabType,
        });
        if (!toastShown) {
          toast.success("Booking Successful!");
          setToastShown(true);
        }
      }
    } catch (error) {
      console.log("error in booking the cab", error);
    }
  };

  return (
    <>
      <div id="bookingSection">
        <section className="flex justify-center items-center h-[600px] mb-4">
          {/* Booking Form Div */}
          <div className="w-full md:w-1/2">
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              {/* Form fields */}
              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 text-base"
                  placeholder="abc@gmail.com"
                  value={bookForm.email}
                  onChange={updateBookForm}
                  required
                />
              </div>
              {/* Pickup Location */}
              <div className="mb-6">
                <label
                  htmlFor="pickup"
                  className="block mb-1 text-lg text-gray-900"
                >
                  Pick-Up Location
                </label>
                <select
                  id="pickup"
                  name="pickupLocation"
                  className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 text-base appearance-none"
                  onChange={updateBookForm}
                  value={bookForm.pickupLocation}
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="0">Mumbai</option>
                  <option value="1">Delhi</option>
                  <option value="2">Kolkata</option>
                  <option value="3">Chennai</option>
                  <option value="4">Bengalore</option>
                </select>
              </div>
              {/* Drop-off Location */}
              <div className="mb-6">
                <label
                  htmlFor="dropoff"
                  className="block mb-1 text-lg text-gray-900"
                >
                  Drop-off Location
                </label>
                <select
                  id="dropoff"
                  name="dropoffLocation"
                  className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 text-base appearance-none"
                  onChange={updateBookForm}
                  value={bookForm.dropoffLocation}
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="0">Mumbai</option>
                  <option value="1">Delhi</option>
                  <option value="2">Kolkata</option>
                  <option value="3">Chennai</option>
                  <option value="4">Bengalore</option>
                </select>
              </div>
              {/* Pick-up Time */}
              <div className="mb-6">
                <label
                  htmlFor="pickuptime"
                  className="block mb-1 text-lg text-gray-900"
                >
                  Pick-up Time
                </label>
                <input
                  type="time"
                  id="pickuptime"
                  name="pickupTime"
                  className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 text-base"
                  value={bookForm.pickupTime}
                  onChange={updateBookForm}
                  required
                />
              </div>
              {/* Cab Type */}
              <div className="mb-6">
                <label
                  htmlFor="cabType"
                  className="block mb-1 text-lg text-gray-900"
                >
                  Cab Type
                </label>
                <select
                  id="cabType"
                  name="cabType"
                  className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 text-base appearance-none"
                  onChange={updateBookForm}
                  value={bookForm.cabType}
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Auto">Auto</option>
                  <option value="Bike">Bike</option>
                  <option value="Standard">Standard</option>
                  <option value="Elite">Elite</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-4"
              >
                Book Now
              </button>
            </form>
          </div>

          {/* Cab Types Div */}
          <div className="hidden md:block w-full md:w-1/2">
            <img src={homeImage} alt="Home" />
          </div>
        </section>

        {/* Booking Details Section */}
        <section>
          <BookingDetails bookingData={bookingData} />
        </section>
      </div>
    </>
  );
};

export default BookingSection;
