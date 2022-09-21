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
  if (event.key === ' ') {
    intervalID = setInterval(moveRight, 16);
  }
}

function moveRight() {
  $img.style.left = data.location.x + 10 + 'px';
  data.location.x = data.location.x + 10;
}
