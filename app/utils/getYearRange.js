export default function (from, years) {
  return Array.apply(null, {length: years}).map((item, i) => {
    return from -i;
  });
};