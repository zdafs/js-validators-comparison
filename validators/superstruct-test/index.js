import { struct } from 'superstruct';
import { TemporaryBlock } from './TemporaryBlock';

const TemporaryBlocksArray = struct.array([TemporaryBlock]);

export const superstructTemporaryBlocksValidator = TemporaryBlocksArray.test;
