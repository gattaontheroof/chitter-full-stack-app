// import { formatDistanceToNow, format } from 'date-fns';

// function formatDate(date) {
//   const now = new Date();
//   const differenceInHours = (now - date) / 1000 / 60 / 60;

//   if (differenceInHours < 24) {
//     return formatDistanceToNow(date, { addSuffix: true });
//   } else {
//     return format(date, "dd/MM/yyyy HH:mm");
//   }
// }

const formatDate = (date) => {

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth(); 
  const day = dateObj.getDate();
  const dayOfWeek = dateObj.getDay();
  const hour = dateObj.getHours();
  const minutes = dateObj.getMinutes();

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
