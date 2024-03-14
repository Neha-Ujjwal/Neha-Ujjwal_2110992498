import React, { useState } from "react";

const BookingForm = () => {
  const [bookForm, SetBookForm] = useState({
    email: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupTime: "",
  });

  const updateBookForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    SetBookForm({
      ...bookForm,
      [name]: value,
    });

    console.log(bookForm)
  };
  return (
    <>
      <section className="flex justify-center items-center h-[600px]">
        {/* Booking Form Div */}
        <div className="w-full md:w-1/2">
          <form className="max-w-md mx-auto">
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
                onChange={(e) => updateBookForm}
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
                className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 text-base appearance-none"
                required
              >
                <option value="" disabled selected>
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
                className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 text-base appearance-none"
                required
              >
                <option value="" disabled selected>
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
                name="pickuptime"
                className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 text-base"
                value={bookForm.pickupTime}
                onChange={(e) => updateBookForm()}
                required
              />
            </div>

            <button
              type="submit"
              className="text-white  bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-4"
            >
              Book Now
            </button>
          </form>
        </div>

        {/* Cab Types Div */}
        <div className="hidden md:block w-full md:w-1/2"></div>
      </section>
    </>
  );
};

export default BookingForm;
