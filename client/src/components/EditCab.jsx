import React, { useEffect, useState } from "react";
import axios from "axios";

const EditCab = () => {
  const [cabData, setCabData] = useState([]);
  useEffect(() => {
    const fetchCabs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cabsData");
        setCabData(response.data); // Assuming the response data is an array of cab objects
      } catch (error) {
        console.error("Error fetching cab data:", error);
      }
    };

    fetchCabs();
  }, []);
  return (
    <div>
      <h2>Cab List</h2>
      <ul>
        {cabData.map((cab) => (
          <li key={cab._id}>
            <img src={cab.image} alt={cab.name} />
            <div>
              <h3>{cab.name}</h3>
              <p>Price: {cab.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditCab;
