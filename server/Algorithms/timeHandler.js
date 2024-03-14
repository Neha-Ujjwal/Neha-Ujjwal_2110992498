const timeHandler = async (startTime, minTime) => {
  var timeComponents = startTime.split(":");
  var hours = parseInt(timeComponents[0]);
  var minutes = parseInt(timeComponents[1]);

  // Add the minutes
  minutes += minTime;

  // Adjust hours if minutes exceed 60
  hours += Math.floor(minutes / 60);
  minutes %= 60;

  // Adjust hours if they exceed 24
  hours %= 24;

  return hours + ":" + minutes;
};

module.exports = timeHandler;
