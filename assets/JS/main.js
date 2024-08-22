const slider = document.querySelector('.slider');

// Dừng animation khi rê chuột vào slider
slider.addEventListener('mouseover', () => {
  slider.classList.add('paused');
});

// Tiếp tục animation khi rời chuột khỏi slider
slider.addEventListener('mouseout', () => {
  slider.classList.remove('paused');
});
