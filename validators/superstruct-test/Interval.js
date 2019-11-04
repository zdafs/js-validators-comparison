import { superstruct, struct } from 'superstruct';
import { timeValidator, isStartTimeBeforeEndTime } from '../common';

const intervalStruct = superstruct({
  types: {
    time: timeValidator,
  },
});

export const Interval = struct.intersection([intervalStruct({
  startTime: 'time',
  endTime: 'time',
}), isStartTimeBeforeEndTime]);
