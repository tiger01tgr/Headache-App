// Functions that work with time

export const dayMap = new Map([
  [1, 'Mon'],
  [2, 'Tue'],
  [3, 'Wed'],
  [4, 'Thu'],
  [5, 'Fri'],
  [6, 'Sat'],
  [0, 'Sun']
]);
export const monthMap = new Map([
  [1, 'Jan'],
  [2, 'Feb'],
  [3, 'Mar'],
  [4, 'Apr'],
  [5, 'May'],
  [6, 'Jun'],
  [7, 'Jul'],
  [8, 'Aug'],
  [9, 'Sep'],
  [10, 'Oct'],
  [11, 'Nov'],
  [12, 'Dec']
]);

export const MIN_IN_MILLISECOND = 60 * 1000;

export const HOUR_IN_MILLISECOND = 60 * 60 * 1000;

// Convert Time
const convertHour = (hour: number): string[] => {
  if (hour == 0) {
    return ['12', 'AM'];
  }
  if (hour > 12) {
    return [(hour - 12).toString(), 'PM'];
  }
  if (hour == 12) {
    return [hour.toString(), 'PM'];
  }
  return [hour.toString(), 'AM'];
};

export const convertTime = (dateIn: Date): string => {
  if (!dateIn) return 'error';
  const hour = convertHour(dateIn.getHours());
  const min = dateIn.getMinutes();
  let min_str = '';
  if (min < 10) {
    min_str = '0' + min;
  } else {
    min_str = min.toString();
  }

  return hour[0] + ':' + min_str + ' ' + hour[1];
};

// Convert Days
export const convertDays = (dateIn: Date): string => {
  const day = dayMap.get(dateIn.getDay());
  const month = monthMap.get(dateIn.getMonth() + 1);
  return day + ', ' + month + ' ' + dateIn.getDate();
};

export const convertDayTime = (dateIn: Date): string => {
  return convertTime(dateIn) + ' ' + convertDays(dateIn).slice(3);
};

export const advanceTime = (date: Date, timeStep: number) => {
  const futureDate = date;
  futureDate.setTime(futureDate.getTime() + timeStep * MIN_IN_MILLISECOND);
  return date;
};

export const convertTimer = (time: number) => {
  let hour = 0;
  let min = 0;
  let sec = 0;
  if (time > HOUR_IN_MILLISECOND) {
    hour = Math.floor(time / HOUR_IN_MILLISECOND);
    time %= HOUR_IN_MILLISECOND;
  }
  if (time > MIN_IN_MILLISECOND) {
    min = Math.floor(time / MIN_IN_MILLISECOND);
    time %= MIN_IN_MILLISECOND;
  }
  if (time > 1000) {
    sec = Math.floor(time / 1000);
  }

  let hour_string;
  let min_string;
  let sec_string;
  if (hour == 0) hour_string = '00';
  else if (hour < 10) hour_string = '0' + hour.toString();
  else hour_string = hour.toString();

  if (min == 0) min_string = '00';
  else if (min < 10) min_string = '0' + min.toString();
  else min_string = min.toString();

  if (sec == 0) sec_string = '00';
  else if (sec < 10) sec_string = '0' + sec.toString();
  else sec_string = sec.toString();

  return hour_string + ':' + min_string + ':' + sec_string;
};
