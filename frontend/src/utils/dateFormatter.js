const formatDate = (date) => {

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth(); 
  const day = dateObj.getDate();
  const dayOfWeek = dateObj.getDay();
  const hour = dateObj.getHours();
  let minutes = dateObj.getMinutes();

  // append '0' to minutes if less than 10
  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  minutes = "" + minutes;

  // Names of months
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthName = months[month];

  const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const shortMonthName = shortMonths[month];

  // Names of days of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeekName = daysOfWeek[dayOfWeek];

  return { day, dayOfWeek: dayOfWeekName, month: month+1, monthName, shortMonthName, year, hour, minutes };

};

export default formatDate;
