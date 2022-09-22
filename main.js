var $img = document.querySelector('img');
var intervalID = null;

var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  carStarted: false
};

document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  if (event.key === 'ArrowUp') {
    data.direction = 'north';
    $img.className = 'north';
  } else if (event.key === 'ArrowDown') {
    data.direction = 'south';
    $img.className = 'south';
  } else if (event.key === 'ArrowRight') {
    data.direction = 'east';
    $img.className = 'east';
  } else if (event.key === 'ArrowLeft') {
    data.direction = 'west';
    $img.className = 'west';
  }
  if (event.key === ' ' && data.carStarted === false) {
    intervalID = setInterval(move, 16);
    data.carStarted = true;
  } else if (event.key === ' ' && data.carStarted === true) {
    clearInterval(intervalID);
    data.carStarted = false;
  }
}

function move() {
  if (data.direction === 'east') {
    $img.style.left = data.location.x + 10 + 'px';
    data.location.x = data.location.x + 10;
  } else if (data.direction === 'west') {
    $img.style.left = data.location.x - 10 + 'px';
    data.location.x = data.location.x - 10;
  } else if (data.direction === 'north') {
    $img.style.top = data.location.y - 10 + 'px';
    data.location.y = data.location.y - 10;
  } else if (data.direction === 'south') {
    $img.style.top = data.location.y + 10 + 'px';
    data.location.y = data.location.y + 10;
  }
}
