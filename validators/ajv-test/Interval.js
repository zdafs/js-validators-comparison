export const intervalSchema = {
  $id: '/Interval',
  type: 'object',
  properties: {
    startTime: { type: 'string', format: 'my-time' },
    endTime: { type: 'string', format: 'my-time' },
  },
  required: ['startTime', 'endTime'],
};
