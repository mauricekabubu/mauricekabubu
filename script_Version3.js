// Basic controls for the demo: prev, pause, next
const langRoll = document.getElementById('langRoll');
const snake = document.getElementById('snake');
let paused = false;

document.getElementById('pause').addEventListener('click', () => {
  paused = !paused;
  if (paused) {
    snake.style.animationPlayState = 'paused';
    // pause each segment animation
    document.querySelectorAll('.seg').forEach(s => s.style.animationPlayState = 'paused');
    document.querySelectorAll('.lang').forEach(l => l.style.animationPlayState = 'paused');
    document.getElementById('pause').textContent = 'Play';
  } else {
    snake.style.animationPlayState = '';
    document.querySelectorAll('.seg').forEach(s => s.style.animationPlayState = '');
    document.querySelectorAll('.lang').forEach(l => l.style.animationPlayState = '');
    document.getElementById('pause').textContent = 'Pause';
  }
});

document.getElementById('next').addEventListener('click', () => {
  // jump languages forward by rotating DOM nodes
  const first = langRoll.querySelector('.lang');
  if (first) langRoll.appendChild(first);
});

document.getElementById('prev').addEventListener('click', () => {
  const items = langRoll.querySelectorAll('.lang');
  if (items.length) {
    const last = items[items.length - 1];
    langRoll.insertBefore(last, langRoll.firstChild);
  }
});