export const timeRegex = /^(([01]\d)|2[0-3]):[0-5]\d$/;
export const timeValidator = (time) => timeRegex.test(time);

export const isStartTimeBeforeEndTime = ({ startTime, endTime }) => startTime < endTime;

export const dateRegex = /^[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
export const dateValidator = (date) => dateRegex.test(date);

const isDaySequence = (days, step) => {
  if (days.length === 1) return true;
  if (days.length - 1 === step) return days[step - 1] < days[step];
  return days[step - 1] < days[step] && isDaySequence(days, step + 1);
};
export const validateDays = ({ days }) => days.length >= 1 && isDaySequence(days, 1);
