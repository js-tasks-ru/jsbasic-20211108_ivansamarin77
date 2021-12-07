function highlight(table) {
  const elements = table.querySelectorAll('tr');

  for (let i = 0; i < elements.length; i++) {
    const row = elements[i];
    if (row.cells[3].getAttribute('data-available') === 'true') {
      row.classList.add('available')
    } else if (row.cells[3].getAttribute('data-available') === 'false') {
      row.classList.add('unavailable')
    } else {
      row.setAttribute('hidden', 'true')
    }
  } 

  for (let i = 0; i < elements.length; i++) {
    const row = elements[i];
    if (row.cells[1].innerText < '18') {
      row.style.textDecoration = "line-through"
    }   
  }

  for (let i = 0; i < elements.length; i++) {
    const row = elements[i];

    if (row.cells[2].innerText === "m") {
      row.classList.add("male")
    } 
    else if (row.cells[2].innerText === "f") {
      row.classList.add("female")
    }
  }

  return elements
}