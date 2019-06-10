function reverseString(str: string): string {
  for (let i = 0; i < str.length / 2; i++) {
    const j = str.length - 1 - i;
    const tmp = str[j];
    str[i] = str[j];
    str[j] = tmp;
    console.log({ i, j, tmp });
  }
  return str;
}

console.log(reverseString('hello'));
