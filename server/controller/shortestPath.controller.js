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

  //database call -> for startTime and endTime ---->PENDING

  return res.status(200).json({ shortestPath: shortestPath });
};

module.exports = getShortestRoute;
