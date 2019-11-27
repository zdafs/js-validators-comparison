import Joi from '@hapi/joi';
import { temporaryBlockSchema } from './TemporaryBlock';

const temporaryBlocksArraySchema = Joi.array().items(temporaryBlockSchema).strict();

export const joiTemporaryBlocksValidator = (temporaryBlocks) => (
  temporaryBlocksArraySchema.validate(temporaryBlocks)
);
