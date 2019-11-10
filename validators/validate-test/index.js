import Schema from 'validate';
import { TemporaryBlock } from './TemporaryBlock';

export const validateTemporaryBlocksValidator = (temporaryBlocks) => new Schema({ payload: [TemporaryBlock] }).validate({ payload: temporaryBlocks });