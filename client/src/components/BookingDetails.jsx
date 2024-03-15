import React, { useEffect, useState } from "react";
import successImage from "../assets/images/success.png";
import { toast } from "react-toastify";

const BookingDetails = ({ bookingData }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (bookingData.cabBooked === false) {
      // Cab is not available, show toast
      setShowToast(true);

      // Reset toast after 5 seconds
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [bookingData]);

  return (
    <div className="flex justify-center items-center pb-8">
      {bookingData.cabBooked === true && (
        <div className="w-full ">
          <p className="text-center text-5xl font-bold bg-green-500 text-white py-4 mb-8 rounded-md">
            Booked Successfully
          </p>
          <div className="w-full mx-auto md:w-1/2 md:pl-8">
            <div className="flex justify-center ">
              <img className="md:max-w-md" src={successImage} alt="Success" />
            </div>
            <div className="md:pl-8">
              {/* <h3 className="text-4xl font-semibold text-center mb-6">
                Booking Details
              </h3> */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-lg w-[50%]">
                    <span className="font-semibold text-xl">
                      Drop-off Time:
                    </span>{" "}
                    {bookingData.dropoffTime}
                  </p>
                  <p className="text-lg w-[50%]">
                    <span className="font-semibold text-xl">Minimum Time:</span>{" "}
                    {bookingData.timeTaken} minutes
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-lg w-[50%]">
                    <span className="font-semibold text-xl">Cab:</span>{" "}
                    {bookingData.cabType}
                  </p>
                  <p className="text-lg w-[50%]">
                    <span className="font-semibold text-xl">Price:</span>{" "}
                    {bookingData.price} Rs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {bookingData.cabBooked === false && showToast && (
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="text-center text-5xl font-bold bg-red-500 text-white py-4 mb-8 rounded-md">
            Cab is not available
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;
