import { string, object, array, boolean } from 'yup';
import { dateRegex, validateDays } from '../common';
import { intervalSchema } from './Interval';

const dateSchema = string().matches(dateRegex, 'Not a valid date format');

export const temporaryBlockSchema = object().shape({
  days: array().of(dateSchema).required(),
  isEntireDay: boolean().required(),
  intervals: array().of(intervalSchema),
}).test({
  name: 'date-test',
  test: validateDays,
  message: 'Not valid days array',
});
