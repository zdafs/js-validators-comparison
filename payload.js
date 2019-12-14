export const payload = [
  {
    days: ['2019-10-20'],
    isEntireDay: false,
    intervals: [
      {
        startTime: '08:00',
        endTime: '12:00',
      },
      {
        startTime: '14:00',
        endTime: '17:00',
      },
    ],
  },
  {
    days: ['2019-10-21', '2019-10-22', '2019-10-23'],
    isEntireDay: true,
    intervals: [],
  },
];

const tempBlock1 = {
  days: ['2019-10-20'],
  isEntireDay: false,
  intervals: [
    {
      startTime: '08:00',
      endTime: '12:00',
    },
    {
      startTime: '14:00',
      endTime: '17:00',
    },
  ],
};

const tempBlock2 = {
  days: ['2019-10-21', '2019-10-22', '2019-10-23'],
  isEntireDay: true,
  intervals: [],
};

export const generateRandPayload = (entries = 100) => {
  const randPayload = [];

  console.log(`Generating payload with ${entries} entries...`);
  for (let i = 0; i < entries; i++) {
    randPayload.push(Math.random() < 0.5 ? tempBlock1 : tempBlock2);
  }
  console.log('Payload generated!');

  return randPayload;
};
