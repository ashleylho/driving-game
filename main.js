var data = {
  direction: 'east'
};

var $img = document.querySelector('img');
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
}
