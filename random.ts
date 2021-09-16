"use strict";

function random(rangeStart: number = 0, rangeEnd: number = 9): number {
  let tempNumber: number | string[] = Date.now();

  tempNumber = tempNumber.toString().split("");

  for (let i = tempNumber.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * i);
    const temp = tempNumber[i];
    tempNumber[i] = tempNumber[j];
    tempNumber[j] = temp;
  }

  tempNumber = parseInt(tempNumber.join("")) / 1e13;

  switch (rangeStart === undefined && rangeEnd === undefined) {
    case true:
      // @ts-ignore
      let number: number = ((tempNumber - 1) % rangeEnd) + 0;

      switch (number < rangeStart) {
        case true:
          return random(rangeStart, rangeEnd);

        default:
          return number;
      }

    default:
      return tempNumber;
  }
}

export default random;
