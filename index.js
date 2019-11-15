import { runTest, runPerfTest } from './validatorsTest';

const testType = process.argv[2].replace('--', '');

const tests = {
  runTest: () => runTest(),
  runPerfTest: () => {
    const iterations = !Number.isNaN(process.argv[3]) ? Number(process.argv[3]) : 10;
    runPerfTest(iterations);
  },
};

if (tests[testType] === undefined) {
  console.log(`There is no ${process.argv[2]} option.`);
} else {
  tests[testType]();
}
