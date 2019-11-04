import { superstruct, struct } from 'superstruct';
import { Interval } from './Interval';
import { dateValidator, validateDays } from '../common';

const temporaryBlockStruct = superstruct({
  types: {
    date: dateValidator,
  },
});

export const TemporaryBlock = struct.intersection([temporaryBlockStruct({
  days: ['date'],
  isEntireDay: 'boolean',
  intervals: [Interval],
}), validateDays]);
