// Написать свой метод myFilter в прототипе массивов

const arr: number[] = [1, 5, -4, 3, -2, 0];

Array.prototype.myFilter = function <T>(this: T[], func: (value: T, index: number, array: T[]) => boolean): T[] {
  const result: T[] = [];

  for (let i = 0; i < this.length; i++) {
    const value = this[i];

    if (value !== undefined && func(value, i, this)) {
      result.push(value);
    }
  }

  return result;
};
console.log(arr.myFilter((value) => value > 0));
