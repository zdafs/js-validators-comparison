import { timeRegex } from '../common';

const time = {
  type: String,
  match: timeRegex,
};

export const Interval = {
  startTime: time,
  endTime: time,
};
