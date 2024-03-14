import React, { useState } from "react";
import homeImage from "../assets/images/main4.jpg";
import BookingDetails from "./BookingDetails";

const BookingForm = () => {
  const [bookForm, setBookForm] = useState({
    email: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupTime: "",
    cabType: "",
  });
  const [bookingData, SetBookingData] = useState({
    timeTaken: "",
    dropoffTime: "",
    message: "",
    cabBooked: "",
  });

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
      const response = await fetch("http://localhost:3000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookForm),
      });
      const res = await response.json();

      if (!response.ok) {
        await SetBookingData({
          timeTaken: res.minTimeTaken,
          dropoffTime: res.dropOffTime,
          message: res.message,
          cabBooked: res.cabBooked,
        });
        console.log(bookingData);
      } else {
        await SetBookingData({
          timeTaken: res.minTimeTaken,
          dropoffTime: res.dropOffTime,
          message: res.message,
          cabBooked: res.cabBooked,
        });

        console.log(bookingData);
      }
    } catch (error) {
      console.log("error in booking the cab", error);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center h-[600px]">
        {/* Booking Form Div */}
        <div className="w-full md:w-1/2">
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
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
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
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
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
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
          <img src={homeImage} />
        </div>
      </section>

      {/* Booking Details Section */}
      <section>
        <BookingDetails bookingData={bookingData} />
      </section>
    </>
  );
};

export default BookingForm;
