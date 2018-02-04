class DateHelper {

  static formatDate(date, isTime) {
    const monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let result = day + ' ' + monthNames[monthIndex] + ' ' + year;
    return isTime ? result+' '+hours+':'+minutes :result;
  }
}

export default DateHelper;