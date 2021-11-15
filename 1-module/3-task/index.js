function ucFirst(str) {
  if (!str) return str;
  const concatWordPart = str[0].toUpperCase() + str.slice([1]);
  return concatWordPart
}
