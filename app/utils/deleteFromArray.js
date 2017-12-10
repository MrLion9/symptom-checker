export default function deleteFromArray(arr, needles, byValue = false) {
  needles = needles instanceof Array ? needles: [needles];

  return arr.reduce((sum, cur, i) => {
    if (needles.indexOf(byValue ? cur: i) === -1) {
      sum.push(cur);
    }

    return sum;
  }, []);
};