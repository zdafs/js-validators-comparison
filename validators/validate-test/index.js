import Schema from 'validate';
import { timeRegex, isStartTimeBeforeEndTime, dateRegex, validateDays } from '../common';

const time = {
  type: String,
  match: timeRegex,
};

const Interval ={
  startTime: time,
  endTime: time,
};

const date = {
  type: String,
  match: dateRegex,
};

const TemporaryBlock = new Schema({
  days: { type: Array, each: date, use: { validateDays: (days) => validateDays({ days }) }},
  isEntireDay: { type: Boolean },
  intervals: { type: Array, each: { properties: Interval }, use: { isStartTimeBeforeEndTime: (intervals) => intervals.every(isStartTimeBeforeEndTime) }},
});

export const validateTemporaryBlocksValidator = new Schema({ payload: [TemporaryBlock] });