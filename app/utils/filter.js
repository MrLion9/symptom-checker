export default function filter(arr, checkFunc) {
  let filteredArr = [];

  arr.forEach(item => {
    if (checkFunc(item)) {
      filteredArr.push(item);
    }
  });

  return filteredArr;
};