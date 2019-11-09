import Schema from 'validate';
import { isStartTimeBeforeEndTime, dateRegex, validateDays } from '../common';
import { Interval } from './Interval';

const date = {
  type: String,
  match: dateRegex,
};

const days = {
  type: Array,
  each: date,
  use: { validateDays: (days) => validateDays({ days }) }
};

const intervals = {
  type: Array,
  each: { properties: Interval },
  use: { isStartTimeBeforeEndTime: (intervals) => intervals.every(isStartTimeBeforeEndTime) }
};

export const TemporaryBlock = new Schema({
  days,
  isEntireDay: { type: Boolean },
  intervals,
});
