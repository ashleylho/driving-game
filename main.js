var $img = document.querySelector('img');

var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  }
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
  }
}
