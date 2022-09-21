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
    clearInterval(intervalID);
    intervalID = setInterval(moveUp, 16);
    data.carStarted = true;
  } else if (event.key === 'ArrowDown') {
    data.direction = 'south';
    $img.className = 'south';
    clearInterval(intervalID);
    intervalID = setInterval(moveDown, 16);
    data.carStarted = true;
  } else if (event.key === 'ArrowRight') {
    data.direction = 'east';
    $img.className = 'east';
    clearInterval(intervalID);
    intervalID = setInterval(moveRight, 16);
    data.carStarted = true;
  } else if (event.key === 'ArrowLeft') {
    data.direction = 'west';
    $img.className = 'west';
    clearInterval(intervalID);
    intervalID = setInterval(moveLeft, 16);
    data.carStarted = true;
  }

  if (event.key === ' ' && data.carStarted === false) {
    if (data.direction === 'east') {
      intervalID = setInterval(moveRight, 16);
    } else if (data.direction === 'west') {
      intervalID = setInterval(moveLeft, 16);
    } else if (data.direction === 'north') {
      intervalID = setInterval(moveUp, 16);
    } else if (data.direction === 'south') {
      intervalID = setInterval(moveDown, 16);
    }
    data.carStarted = true;
  } else if (event.key === ' ' && data.carStarted === true) {
    clearInterval(intervalID);
    data.carStarted = false;
  }
}

function moveRight() {
  $img.style.left = data.location.x + 10 + 'px';
  data.location.x = data.location.x + 10;
}

function moveLeft() {
  $img.style.left = data.location.x - 10 + 'px';
  data.location.x = data.location.x - 10;
}

function moveDown() {
  $img.style.top = data.location.y + 10 + 'px';
  data.location.y = data.location.y + 10;
}

function moveUp() {
  $img.style.top = data.location.y - 10 + 'px';
  data.location.y = data.location.y - 10;
}
