"use strict";
function random(rangeStart = 0, rangeEnd = 9) {
    let tempNumber = Date.now();
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
            let number = ((tempNumber - 1) % rangeEnd) + 0;
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
