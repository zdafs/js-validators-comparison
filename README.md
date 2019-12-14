# js-validators-comparison
Comparison between multiple js object validators

## Tested validators
- Superstruct: https://www.npmjs.com/package/superstruct
- Validate: https://www.npmjs.com/package/validate
- JsonSchema: https://www.npmjs.com/package/jsonschema
- Yup: https://www.npmjs.com/package/yup
- Joi: https://www.npmjs.com/package/@hapi/joi
- Ajv: https://www.npmjs.com/package/ajv

## The payload

The tested object is inside the [`payload`](/payload.js) file. It represents a possible payload for a blocked agenda. The `days` field store which dates are blocked, `isEntireDay` tell us if the block is for the entire day and the `intervals` array show us what hours intervals are blocked. The object looks something like this:

```javascript
{
  days: ['2019-01-01', '2019-01-02'],
  isEntireDay: false,
  intervals: [
    {
      startTime: '08:00',
      endTime: '12:00',
    },
    {
      startTime: '16:00',
      endTime: '18:00',
    },
  ],
}
```

There are some mandatory checks that we tested:

  - All fields must be present;
  - `days` must be an array of `string`s with the `YYYY-MM-DD` format;
  - `days` must have length of at least 1;
  - `isEntireDay` must be a `boolean`;
  - `intervals` must be an array of `object`s. The object must have two `string` fields, `startTime` and `endTime`. The fields must have the `HH:mm` format;

All the tested libs correctly checked the above points. Other nice to have checks are:

  - The dates inside the `days` array must be a ascendent sequence;
  - The `startTime` value must be less than the `endTime` value;

Those checks where not possible in the Ajv and JsonSchema implementations.

## The implementation

The implementations for each of the libs is located in the [`validators`](/validators) folder. Each implementation is inside a folder named `<lib_name>-test`, where `lib_name` is the name of the desired lib.

## Running tests
There is two ways you can run the tests. The first one is using the `npm start` command. Running with this command will output something like:

```
superstruct time: 1.644679 ms
superstruct result: true


validate time: 2.190185 ms
validate result: true

...
```

The other command you can use is `npm run start:perf <number_of_iterations> <number_of_entries_in_payload>`. This command generates a random payload with `number_of_entries_in_payload` entries, runs each validation function for `number_of_iterations` times and calculates the average execution time of each function. If no `number_of_iterations` or `number_of_entries_in_payload` argument is provided the value defaults to 10 and 100 respectively. The generated payload is saved in the `randPayload.json` file. The output is something like:

```
superstruct time: 0.052601160000000015 ms


validate time: 0.6678564000000001 ms

...
```
