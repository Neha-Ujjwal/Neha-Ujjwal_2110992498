const timeHandler = async (startTime, minTime) => {
  var timeComponents = startTime.split(":");
  var hours = parseInt(timeComponents[0]);
  var minutes = parseInt(timeComponents[1]);

  // Add or subtract the minutes
  minutes += minTime;

  // Adjust hours if minutes exceed 60 or are negative
  hours += Math.floor(minutes / 60);
  minutes = minutes % 60;

  // Handle negative minutes
  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }

  // Adjust hours if they exceed 24 or are negative
  hours = (hours + 24) % 24;

  // Formatting the time
  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return formattedHours + ":" + formattedMinutes;
};

module.exports = timeHandler;
