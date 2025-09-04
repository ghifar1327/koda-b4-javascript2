const obj = {
  str: [
    0,
    1,
    2,
    [
      0,
      [
        0,
        1,
        {
          man: [
            {
              the: {
                name: {
                  of: {
                    us: "koda",
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
};

const {
  str: [
    _,
    __,
    ___,
    [
      ____,
      [
        _____,
        ______,
        {
          man: [
            {
              the: {
                name: {
                  of: { us },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
} = obj;
console.log(us);

// console.log(obj.str[3][1][2].man[0].the.name.of.us);
// 'koda'
