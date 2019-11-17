import * as tests from './validatorsTest';

const testType = process.argv[2];

const testsParams = {
  runTest: [],
  runPerfTest: !Number.isNaN(Number(process.argv[3])) ? [Number(process.argv[3])] : [10],
};

if (tests[testType] === undefined) {
  console.log(`There is no ${process.argv[2]} option.`);
} else {
  tests[testType](...testsParams[testType]);
}
