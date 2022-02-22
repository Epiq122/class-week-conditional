document.querySelector('#check').addEventListener('click', check);

function check() {
  const day = document.querySelector('#day').value;

  if (day === 'tuesday'.toLowerCase() || day === 'thursday'.toLowerCase()) {
    document.querySelector('#placeToSee').innerText = `Class Time `;
  } else if (day === 'sunday'.toLowerCase()) {
    document.querySelector('#placeToSee').innerText = `Office Hours`;
  } else if (day === 'saturday'.toLowerCase()) {
    document.querySelector('#placeToSee').innerText = `Its the Weekend!`;
  } else if (
    day === 'monday'.toLowerCase() ||
    day === 'wednesday'.toLowerCase() ||
    day === 'friday'.toLowerCase()
  ) {
    document.querySelector('#placeToSee').innerText = `Weekday :(`;
  } else {
    document.querySelector('#placeToSee').innerText = 'Enter Valid Day';
  }
}
