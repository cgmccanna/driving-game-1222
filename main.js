var car = {
  direction: 'east',
  x: 0,
  y: 0
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

function start() {
  if (car.direction === 'east') {
    car.x += 7;
    $car.style.left = (car.x.toString()) + 'px';
  } else if (car.direction === 'south') {
    car.y += 7;
    $car.style.top = (car.y.toString()) + 'px';
  }
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    setInterval(start, 16);
  }
});
