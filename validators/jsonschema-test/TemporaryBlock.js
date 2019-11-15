import { dateRegex } from '../common';

export const temporaryBlockSchema = {
  id: '/TemporaryBlock',
  type: 'object',
  properties: {
    days: { type: 'array', minItems: 1, items: { type: 'string', pattern: dateRegex } },
    isEntireDay: { type: 'boolean' },
    intervals: { type: 'array', items: { $ref: '/Interval' } },
  },
  required: ['days', 'isEntireDay', 'intervals'],
};
