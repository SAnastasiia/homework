
var container = document.querySelector('.container');
var sections = document.querySelectorAll('.container section');
container.addEventListener('scroll', function () {
  sections.forEach(function (section) {
    var sectionTop = section.getBoundingClientRect().top;
    var sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < window.innerHeight && sectionBottom > 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

let click = document.querySelectorAll('.myLink');

const elements = document.querySelectorAll('.myLink');

elements.forEach(function(element) {
  element.addEventListener('click', function() {
    elements.forEach(function(otherElement) {
      if (otherElement !== element) {
        otherElement.classList.remove('active');
      }
    });
    this.classList.toggle('active');
  });
});
