import * as tests from './validatorsTest';

const isValidNumber = (n) => !Number.isNaN(Number(n));

const getPerfTestParams = (pIterations, pEntries) => {
  const params = [];

  if (isValidNumber(pIterations)) {
    params.push(Number(pIterations));
  }

  if (isValidNumber(pEntries)) {
    params.push(Number(pEntries));
  }

  return params;
}

const testType = process.argv[2];

const testsParams = {
  runTest: [],
  runPerfTest: getPerfTestParams(process.argv[3], process.argv[4]),
};

if (tests[testType] === undefined) {
  console.log(`There is no ${process.argv[2]} option.`);
} else {
  tests[testType](...testsParams[testType]);
}
