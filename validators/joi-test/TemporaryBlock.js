import Joi from '@hapi/joi';
import { dateRegex, validateDays } from '../common';
import { intervalSchema } from './Interval';

const dateSchema = Joi.string().pattern(dateRegex);

const customValidateDays = (temporaryBlock, { error }) => {
  const { days } = temporaryBlock;
  if (!validateDays({ days })) {
    throw error('any.invalid');
  }

  return temporaryBlock;
};

export const temporaryBlockSchema = Joi.object({
  days: Joi.array().items(dateSchema).required().min(1),
  isEntireDay: Joi.boolean().required(),
  intervals: Joi.array().items(intervalSchema).required(),
}).custom(customValidateDays);
