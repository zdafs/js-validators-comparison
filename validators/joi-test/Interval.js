import Joi from '@hapi/joi';
import { timeRegex, isStartTimeBeforeEndTime } from '../common';

const timeSchema = Joi.string().pattern(timeRegex);

const customIsStartTimeBeforeEndTime = (interval, { error }) => {
  const { startTime, endTime } = interval;

  if (!isStartTimeBeforeEndTime({ startTime, endTime })) {
    throw error('any.invalid');
  }

  return interval;
};

export const intervalSchema = Joi.object({
  startTime: timeSchema.required(),
  endTime: timeSchema.required(),
}).custom(customIsStartTimeBeforeEndTime);
