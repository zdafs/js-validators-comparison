import { array } from 'yup';
import { temporaryBlockSchema } from './TemporaryBlock';

const temporaryBlocksArraySchema = array().of(temporaryBlockSchema).strict();

export const yupTemporaryBlocksValidator = (temporaryBlocks) => (
  temporaryBlocksArraySchema.isValidSync(temporaryBlocks)
);
