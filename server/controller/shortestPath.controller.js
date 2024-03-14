const shortestPathAlgo = require("../Algorithms/Graph/dijkstraAlgo");
const Cab = require("../models/Cab.model.js");

// const source = parseInt(process.argv[2]);
// const destination = parseInt(process.argv[3]);
// console.log(shortestPathAlgo(source, destination));

const getShortestRoute = async (source, destination) => {
  // const source = req.body.source;
  // const destination = req.body.destination;

  // const startTime = req.body.start;
  // const endTime = req.body.end;

  const shortestPath = shortestPathAlgo(source, destination);

  //database call -> for startTime and endTime ---->PENDING

  return shortestPath;
};

module.exports = getShortestRoute;
