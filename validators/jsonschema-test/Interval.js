import { timeRegex } from '../common';

export const intervalSchema = {
  id: '/Interval',
  type: 'object',
  properties: {
    startTime: { type: 'string', pattern: timeRegex },
    endTime: { type: 'string', pattern: timeRegex },
  },
  required: ['startTime', 'endTime'],
};
