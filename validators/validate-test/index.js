import Schema from 'validate';
import { TemporaryBlock } from './TemporaryBlock';

export const validateTemporaryBlocksValidator = new Schema({ payload: [TemporaryBlock] });