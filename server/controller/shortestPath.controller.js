const shortestPathAlgo = require("../Algorithms/dijkstraAlgo.js");
const Cab = require("../models/Cab.model.js");

// const source = parseInt(process.argv[2]);
// const destination = parseInt(process.argv[3]);
// console.log(shortestPathAlgo(source, destination));

const getShortestRoute = async (req, res) => {
  const source = req.body.source;
  const destination = req.body.destination;

  const startTime = req.body.start;
  const endTime = req.body.end;

  const shortestPath = shortestPathAlgo(source, destination);
  await Cab.create({
    id: "0",
    price: 6,
    image:
      "https://i.gadgets360cdn.com/large/rapido_taxi_small_1673957833776.jpg",
    name: "Bike",
  });
  await Cab.create({
    id: "1",
    price: 10,
    image:
      "https://media.istockphoto.com/id/915779680/vector/simplified-cartoon-motor-rickshaw.jpg?s=612x612&w=0&k=20&c=DD-VEpvpL2Q0g5Bn9fuChai7qUvO7lR8TIjVb6P7rKc=",
    name: "Auto",
  });
  await Cab.create({
    id: "2",
    price: 14,
    image:
      "https://t4.ftcdn.net/jpg/01/96/55/59/360_F_196555953_xVc8Aqyj7rvLLZnGZJ6HLRiXQHjpiLZW.jpg",
    name: "Standard",
  });
  await Cab.create({
    id: "3",
    price: 32,
    image:
      "https://images.assetsdelivery.com/compings_v2/pavelvinnik/pavelvinnik1812/pavelvinnik181200116.jpg",
    name: "Elite",
  });
  await Cab.create({
    id: "4",
    price: 25,
    image:
      "https://img.freepik.com/premium-vector/taxi-car-cartoon-illustration_151150-1498.jpg",
    name: "Premium",
  });

  //database call -> for startTime and endTime ---->PENDING

  return res.status(200).json({ shortestPath: shortestPath });
};

module.exports = getShortestRoute;
