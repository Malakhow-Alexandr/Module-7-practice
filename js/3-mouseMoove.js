function findScreenCoords(mouseEvent) {
  let xpos;
  let ypos;
  if (mouseEvent) {
    //FireFox
    xpos = mouseEvent.screenX;
    ypos = mouseEvent.screenY;
  } else {
    //IE
    xpos = window.event.screenX;
    ypos = window.event.screenY;
  }
  document.getElementById("screenCoords").innerHTML = xpos + ", " + ypos;
}
document.getElementById("screenBox").onmousemove = findScreenCoords;
