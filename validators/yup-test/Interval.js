import { string, object } from 'yup';
import { timeRegex, isStartTimeBeforeEndTime } from '../common';

const timeSchema = string().matches(timeRegex, 'Not a valid hour format');

export const intervalSchema = object().shape({
  startTime: timeSchema.required(),
  endTime: timeSchema.required(),
}).test({
  name: 'hour-test',
  test: isStartTimeBeforeEndTime,
  message: 'startTime is greater than endTime',
});
