  const sections = document.querySelectorAll('.section');
  let currentSection = 0;



// Определение функции openNextSection
function openNextSection() {
  if (currentSection < sections.length - 1) {
    sections[currentSection].classList.remove('active');
    currentSection++;
    sections[currentSection].classList.add('active');
  }
}

function openPreviousSection() {
  if (currentSection > 0) {
    sections[currentSection].classList.remove('active');
    currentSection--;
    sections[currentSection].classList.add('active');
  }
}

// Обработчик события keydown
window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp') {
    openPreviousSection();
  } else if (e.key === 'ArrowDown') {
      openNextSection();
    }
});