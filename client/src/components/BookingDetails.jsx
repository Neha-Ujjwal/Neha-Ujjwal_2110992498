import React from "react";
import successImage from "../assets/images/success.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingDetails = ({ bookingData }) => {
  // Render booking details if cab is booked
  if(bookingData.cabBooked===""){
    return null;
  }
  else if (bookingData.cabBooked) {
    return (
      <>
        <p
          className="text-center text-5xl font-bold"
          style={{
            fontFamily: "Roboto, sans-serif",
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Booked Successfully
        </p>
        <div className="flex justify-center items-center h-[600px]">
          <div className="md:w-1/2 max-w-md hidden md:block">
            {/* Hide this div on small screens */}
            <img src={successImage} alt="Success" />
          </div>
          <div className="w-full md:w-1/2 pl-[100px] mt-[-200px]">
            <h3 className="text-4xl font-semibold text-center mb-6">
              Booking Details
            </h3>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold text-xl">Drop-off Time : </span>{" "}
                {bookingData.dropoffTime}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-xl">Minimum Time : </span>{" "}
                {bookingData.timeTaken}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-xl">Cab : </span>{" "}
                {bookingData.cabType}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-xl">Price : </span>{" "}
                {bookingData.price} Rs
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // Render alternative content if cab is not booked
    // Show toast message
    toast.error("Cab is not available");
    return (
      <ToastContainer />
    );
  }
};

export default BookingDetails;
