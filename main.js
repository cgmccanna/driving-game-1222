var car = {
  direction: ''
  // x:
  // y:
};

var $car = document.querySelector('.car');

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    car.direction = 'east';
  } else if (event.key === 'ArrowUp') {
    car.direction = 'north';
  } else if (event.key === 'ArrowLeft') {
    car.direction = 'west';
  } else if (event.key === 'ArrowDown') {
    car.direction = 'south';
  }
  $car.className = 'car ' + car.direction;
});
