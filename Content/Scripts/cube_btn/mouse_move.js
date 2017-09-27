function spin() {
  var cube = document.getElementsByClassName('container');
  
  var mousePosX = window.event.clientX;
  var mousePosY = window.event.clientY;
  
  
  cube.style.transform = ('rotateY('+mousePosX/2+'deg) rotateX('+(-mousePosY/2)+'deg)');
}

window.addEventListener('mousemove', spin, false);