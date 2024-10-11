
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.classList.add('cursor-trail');
  document.body.appendChild(trail);
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;

  setTimeout(() => {
    trail.remove();
  }, 500);  // Remove after animation
});


const pet = document.getElementById('virtual-pet');

pet.addEventListener('mousedown', function (e) {
  let shiftX = e.clientX - pet.getBoundingClientRect().left;
  let shiftY = e.clientY - pet.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    pet.style.left = pageX - shiftX + 'px';
    pet.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  pet.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    pet.onmouseup = null;
  };

  pet.ondragstart = function () {
    return false;
  };
});