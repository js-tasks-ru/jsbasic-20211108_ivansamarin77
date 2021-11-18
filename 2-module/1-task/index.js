function sumSalary(salaries) {
  let sum = 0
  for (let key in salaries) {
    if (salaries[key] == NaN || !isFinite(salaries[key])) {
      break
    } else {
      sum += salaries[key]
    }
  }
  return sum
}
