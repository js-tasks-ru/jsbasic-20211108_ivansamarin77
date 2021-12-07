function showSalary(users, age) {
  const usersFilter = users
    .filter((user) => user.age <= age)
    .map((u) => u.name + ', ' + u.balance);
  return usersFilter.join('\n');
}
