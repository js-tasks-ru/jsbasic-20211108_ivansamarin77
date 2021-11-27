function namify(users) {
  let names = []
  while (names <= users.length) {
    users.forEach((i) => {
      names.push(i.name)
    });
  }
  return names
}
