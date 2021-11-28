function showSalary(users, age) {
  const people = [];
  const usersFilter = users
    .filter((user) => user.age <= age)
    .map((i) => {
      people.push([i.name + ', ' + i.balance])
    });
  return people.join('\n');
}
