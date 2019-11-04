import { payload } from './payload';
import { superstructTemporaryBlocksValidator } from './validators/superstruct-test';
import { validateTemporaryBlocksValidator } from './validators/validate-test';

const result = validateTemporaryBlocksValidator.validate({ payload });
console.log(result);
