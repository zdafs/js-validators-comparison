export const temporaryBlockSchema = {
  $id: '/TemporaryBlock',
  type: 'object',
  properties: {
    days: { type: 'array', minItems: 1, items: { type: 'string', format: 'my-date' } },
    isEntireDay: { type: 'boolean' },
    intervals: { type: 'array', items: { $ref: '/Interval' } },
  },
  required: ['days', 'isEntireDay', 'intervals'],
};
