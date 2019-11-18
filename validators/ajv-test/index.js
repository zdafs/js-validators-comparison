import Ajv from 'ajv';
import { timeRegex, dateRegex } from '../common';
import { intervalSchema } from './Interval';
import { temporaryBlockSchema } from './TemporaryBlock';

const temporaryBlocksArraySchema = {
  $id: '/TemporaryBlocksArray',
  type: 'array',
  items: { $ref: '/TemporaryBlock' },
};

const validate = new Ajv()
  .addFormat('my-time', timeRegex)
  .addFormat('my-date', dateRegex)
  .addSchema(intervalSchema, intervalSchema.$id)
  .addSchema(temporaryBlockSchema, temporaryBlockSchema.$id)
  .compile(temporaryBlocksArraySchema);

export const ajvTemporaryBlocksValidator = (temporaryBlocks) => validate(temporaryBlocks);
