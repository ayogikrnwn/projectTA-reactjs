import moment from "moment";
export default (datestr) => {
  const moment1 = moment(datestr, "DD-MM-YYYY HH:mm");
  const moment2 = moment(Date.now());
  return moment.duration(moment1.diff(moment2)).humanize() + " Ago";
};
