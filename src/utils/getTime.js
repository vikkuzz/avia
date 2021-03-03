const time = (hoursMinutes, duration) => {
  let hours = new Date(Date.parse(hoursMinutes)).getUTCHours();
  let minutes = new Date(Date.parse(hoursMinutes)).getMinutes();
  if (hours.toString().length < 2) {
    hours = `0${hours}`;
  }
  if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }

  let durationHours = (+(duration / 60).toFixed() + +hours) % 24;
  let durationMinutes = (duration % 60) + +minutes;

  if (durationMinutes > 60) {
    durationHours += 1;
  }

  durationMinutes %= 60;

  if (durationHours.toString().length < 2) {
    durationHours = `0${durationHours}`;
  }
  if (durationMinutes.toString().length < 2) {
    durationMinutes = `0${durationMinutes}`;
  }

  return `${hours}:${minutes} - ${durationHours}:${durationMinutes}`;
};

export default time;
