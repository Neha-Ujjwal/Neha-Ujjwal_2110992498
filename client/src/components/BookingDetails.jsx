import React from "react";

const BookingDetails = ({ bookingData }) => {
  return bookingData.cabBooked === true ? (
    <div className="flex">
        {/* cab Image */}

        <div>

        </div>

        {/* Booking Details */}
        <div>
            
        </div>

    </div>
  ) : bookingData.cabBooked === false ? (
    <div>not booked</div>
  ) : null; // Hide the div if cabStatus is empty or undefined
};

export default BookingDetails;
