import { Validator } from 'jsonschema';
import { intervalSchema } from './Interval';
import { temporaryBlockSchema } from './TemporaryBlock';

const temporaryBlocksArraySchema = { type: 'array', items: { $ref: '/TemporaryBlock' } };

const v = new Validator();
v.addSchema(intervalSchema, intervalSchema.id);
v.addSchema(temporaryBlockSchema, temporaryBlockSchema.id);

export const jsonschemaTemporaryBlocksValidator = (temporaryBlocks) => v.validate(temporaryBlocks, temporaryBlocksArraySchema);
