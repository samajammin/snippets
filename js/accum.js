//The examples below show you how to write function accum:
// accum('abcd'); // "A-Bb-Ccc-Dddd"
// accum('RqaEzty'); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum('cwAt'); // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = str => {
  const arr = [...str];
  newArr = arr.map((el, i) => {
    return el.toUpperCase() + el.toLowerCase().repeat(i);
  });
  return newArr.join('-');
};

accum('abcd'); // "A-Bb-Ccc-Dddd"
accum('RqaEzty'); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum('cwAt'); // "C-Ww-Aaa-Tttt"
