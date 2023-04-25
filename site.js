const elements = document.querySelectorAll('.myElement');
const threshold = window.innerHeight;

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  const elementTop = element.offsetTop;

  window.addEventListener('scroll', function() {
    if (window.pageYOffset + threshold > elementTop) {
      element.classList.add('visible');
    }
  });
}
