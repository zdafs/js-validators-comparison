import { Validator } from 'jsonschema';
import { timeRegex, dateRegex } from '../common';

const intervalSchema = {
  id: '/Interval',
  type: 'object',
  properties: {
    startTime: { type: 'string', pattern: timeRegex },
    endTime: { type: 'string', pattern: timeRegex },
  },
  required: ['startTime', 'endTime'],
};

const temporaryBlockSchema = {
  id: '/TemporaryBlock',
  type: 'object',
  properties: {
    days: { type: 'array', minItems: 1, items: { type: 'string', pattern: dateRegex } },
    isEntireDay: { type: 'boolean' },
    intervals: { type: 'array', items: { $ref: 'Interval' } },
  },
  required: ['days', 'isEntireDay', 'intervals'],
};

const temporaryBlocksArraySchema = { type: 'array', items: { $ref: '/TemporaryBlock' } };

const v = new Validator();
v.addSchema(intervalSchema, intervalSchema.id);
v.addSchema(temporaryBlockSchema, temporaryBlockSchema.id);

export const jsonschemaTemporaryBlocksValidator = (temporaryBlocks) => v.validate(temporaryBlocks, temporaryBlocksArraySchema);
