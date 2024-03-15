import React, { useEffect, useState } from "react";
import successImage from "../assets/images/success.png";
import { toast } from "react-toastify";

const EditCab = () => {
  const [cabData, setCabData] = useState([]);
  const [selectedCab, setSelectedCab] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");

  useEffect(() => {
    const fetchCabs = async () => {
      try {
        const response = await fetch("http://localhost:3000/cabsData");
        if (!response.ok) {
          throw new Error("Failed to fetch cab data");
        }
        const res = await response.json();
        console.log(res);
        setCabData(res);
      } catch (error) {
        console.error("Error fetching cab data:", error);
      }
    };

    fetchCabs();
  }, []);

  const openModal = (cab) => {
    setSelectedCab(cab);
    setEditedName(cab.name);
    setEditedPrice(cab.price);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const SaveChangesInDB = async (cab) => {
    const updatedCabData = {
      _id: cab._id,
      cabData: {
        id: cab.id,
        price: cab.price,
        image: cab.image,
        name: cab.name,
      },
    };
    try {
      const response = await fetch("http://localhost:3000/edit", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCabData),
      });

      toast.success("Updated Successfully");
    } catch (error) {
      toast.error("Can't update Cab details. Please try again later!!");
      console.log("error in updating the cab details");
    }
  };

  const handleSaveChanges = () => {
    // Here you can implement the logic to save the changes made in the modal
    // For demonstration, let's just update the selected cab's data in the state
    const updatedCabData = cabData.map((cab) =>
      cab.id === selectedCab.id
        ? { ...cab, name: editedName, price: editedPrice }
        : cab
    );

    cabData.map(async (cab) => {
      if (cab.id == selectedCab.id) {
        await SaveChangesInDB({ ...cab, name: editedName, price: editedPrice });
        // console.log({ ...cab, name: editedName, price: editedPrice });
      }
    });

    setCabData(updatedCabData);
    closeModal();
  };

  return (
    <div className="container bg-gray-100 mx-auto px-4 py-8">
      <div className="bg-yellow-400 p-3 mb-8">
        <h2 className="text-5xl text-center font-bold text-white">Cab List</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12">
        {cabData.map((cab) => (
          <div
            key={cab.id}
            className="rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img
              src={cab.image}
              alt={cab.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold text-gray-800 text-center">
                {cab.name}
              </h3>
              <p className="text-lg text-gray-600">Price: {cab.price} Rs/min</p>
              <button
                onClick={() => openModal(cab)}
                className="mt-4 py-2 px-8 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && selectedCab && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Edit Cab</h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-yellow-500"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-yellow-500"
                  value={editedPrice}
                  onChange={(e) => setEditedPrice(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCab;
