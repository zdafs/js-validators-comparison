import { payload } from './payload';
import { superstructTemporaryBlocksValidator } from './validators/superstruct-test';
import { validateTemporaryBlocksValidator } from './validators/validate-test';
import { jsonschemaTemporaryBlocksValidator } from './validators/jsonschema-test';

const test = (validatorKey, validationFunc, validationResultFunc) => {
  console.time(`${validatorKey} time`);
  const result = validationFunc(payload);
  console.timeEnd(`${validatorKey} time`);
  console.log(`${validatorKey} result: ${validationResultFunc(result)}`);
  console.log('\n');
};

const superstructParams = ['superstruct', superstructTemporaryBlocksValidator, (res) => res];
const validateParams = ['validate', validateTemporaryBlocksValidator, (res) => res.length === 0];
const jsonschemaParams = ['jsonschema', jsonschemaTemporaryBlocksValidator, ({ errors }) => errors.length === 0];

const testParams = [
  superstructParams,
  validateParams,
  jsonschemaParams,
];

export const runTest = () => testParams.forEach((param) => test(...param));
