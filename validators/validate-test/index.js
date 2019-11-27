import Schema from 'validate';
import { TemporaryBlock } from './TemporaryBlock';

const v = new Schema({ payload: [TemporaryBlock] });

export const validateTemporaryBlocksValidator = (temporaryBlocks) => (
  v.validate({ payload: temporaryBlocks })
);