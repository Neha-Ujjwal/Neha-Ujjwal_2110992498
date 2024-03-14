import React from "react";
import Navbar from "./components/Navbar";
import BookingSection from "./components/BookingSection";
import EditCab from "./components/EditCab";
import { ToastContainer } from "react-toastify"; // Import ToastContainer

const App = () => {
  return (
    <>
      <Navbar />
      <BookingSection />
      <ToastContainer /> {/* Add this line to render the ToastContainer */}
      <EditCab />
    </>
  );
};

export default App;
