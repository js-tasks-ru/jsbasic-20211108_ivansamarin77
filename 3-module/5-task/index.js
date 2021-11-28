function getMinMax(str) {
  let splitStr = str.match(/(-?\d+(\.\d+)?)/g).map(v => +v);
  let min = Math.min.apply(null, splitStr);
  let max = Math.max.apply(null, splitStr);
  return {
    'min': min,
    'max': max
  };
}
