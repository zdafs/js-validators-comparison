import { payload } from './payload';
import { superstructTemporaryBlocksValidator } from './validators/superstruct-test';
import { validateTemporaryBlocksValidator } from './validators/validate-test';
import { jsonschemaTemporaryBlocksValidator } from './validators/jsonschema-test';

const getHrEndResult = (validationFunc) => {
  const hrStart = process.hrtime();
  const result = validationFunc(payload);
  return [process.hrtime(hrStart), result];
}

const test = (validatorKey, validationFunc, validationResultFunc) => {
  const [hrEnd, result] = getHrEndResult(validationFunc);
  console.log(`${validatorKey} time: ${hrEnd[1]/1000000} ms`);
  console.log(`${validatorKey} result: ${validationResultFunc(result)}`);
  console.log('\n');
};

const perfTest = (iterations, validatorKey, validationFunc) => {
  let execTimesAccumulator = 0;
  for (let i = 0; i < iterations; i++) {
    const [hrEnd] = getHrEndResult(validationFunc);
    execTimesAccumulator += hrEnd[1] / 1000000;
  }
  console.log(`${validatorKey} time: ${execTimesAccumulator/iterations} ms`);
  console.log('\n');
}

const superstructParams = ['superstruct', superstructTemporaryBlocksValidator, (res) => res];
const validateParams = ['validate', validateTemporaryBlocksValidator, (res) => res.length === 0];
const jsonschemaParams = ['jsonschema', jsonschemaTemporaryBlocksValidator, ({ errors }) => errors.length === 0];

const testParams = [
  superstructParams,
  validateParams,
  jsonschemaParams,
];

export const runTest = () => testParams.forEach((param) => test(...param));
export const runPerfTest = (iterations) => testParams.forEach((param) => perfTest(iterations, ...param));
