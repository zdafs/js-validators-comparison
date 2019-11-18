import { payload } from './payload';
import { superstructTemporaryBlocksValidator } from './validators/superstruct-test';
import { validateTemporaryBlocksValidator } from './validators/validate-test';
import { jsonschemaTemporaryBlocksValidator } from './validators/jsonschema-test';
import { yupTemporaryBlocksValidator } from './validators/yup-test';
import { joiTemporaryBlocksValidator } from './validators/joi-test';
import { ajvTemporaryBlocksValidator } from './validators/ajv-test';

const getTimeResult = (validationFunc) => {
  const hrStart = process.hrtime.bigint();
  const result = validationFunc(payload);
  const hrEnd = process.hrtime.bigint();
  return [Number(hrEnd - hrStart), result];
}

const test = (validatorKey, validationFunc, validationResultFunc) => {
  const [time, result] = getTimeResult(validationFunc);
  console.log(`${validatorKey} time: ${time/1000000} ms`);
  console.log(`${validatorKey} result: ${validationResultFunc(result)}`);
  console.log('\n');
};

const perfTest = (iterations, validatorKey, validationFunc) => {
  let execTimesAccumulator = 0;
  for (let i = 0; i < iterations; i++) {
    const [time] = getTimeResult(validationFunc);
    execTimesAccumulator += time / 1000000;
  }
  console.log(`${validatorKey} time: ${execTimesAccumulator/iterations} ms`);
  console.log('\n');
}

const superstructParams = ['superstruct', superstructTemporaryBlocksValidator, (res) => res];
const validateParams = ['validate', validateTemporaryBlocksValidator, (res) => res.length === 0];
const jsonschemaParams = ['jsonschema', jsonschemaTemporaryBlocksValidator, ({ errors }) => errors.length === 0];
const yupParams = ['yup', yupTemporaryBlocksValidator, (res) => res];
const joiParams = ['joi', joiTemporaryBlocksValidator, (res) => res.error === undefined]
const ajvParams = ['ajv', ajvTemporaryBlocksValidator, (res) => res];

const testParams = [
  superstructParams,
  validateParams,
  jsonschemaParams,
  yupParams,
  joiParams,
  ajvParams,
];

export const runTest = () => testParams.forEach((param) => test(...param));
export const runPerfTest = (iterations) => testParams.forEach((param) => perfTest(iterations, ...param));
