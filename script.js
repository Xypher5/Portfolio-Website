
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// TYPING EFFECT

const logoElement = document.getElementById('logo');
const fullText = 'Xypher Kelly';
const stopText = 'X';
let isDeleting = false;
let text = '';
let typingSpeed = 200; // Typing speed in milliseconds

function typeEffect() {
  if (!isDeleting && text.length < fullText.length) {
    // Typing forward
    text = fullText.substring(0, text.length + 1);
  } else if (isDeleting && text.length > stopText.length) {
    // Deleting backward
    text = fullText.substring(0, text.length - 1);
  } else if (!isDeleting && text.length === fullText.length) {
    // Pause before deleting
    setTimeout(() => { isDeleting = true; }, 1000);
  } else if (isDeleting && text.length === stopText.length) {
    // Pause before typing again
    setTimeout(() => { isDeleting = false; }, 1000);
  }

  logoElement.textContent = text;

  // Adjust typing speed
  let speed = isDeleting ? typingSpeed / 2 : typingSpeed;
  setTimeout(typeEffect, speed);
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', typeEffect);

//MOUSE TRAIL EFFECT

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

// VIRTUAL PET EFFECT

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

