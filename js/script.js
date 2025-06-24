document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector('.hero');
  const about = document.getElementById('about');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');

  function mostrarSeccion(seccion) {
    if (seccion === 'about') {
      hero.style.display = 'block';
      about.style.display = 'block';
      projects.style.display = 'none';
      contact.style.display = 'none';
    } else if (seccion === 'projects') {
      hero.style.display = 'none';
      about.style.display = 'none';
      projects.style.display = 'block';
      contact.style.display = 'none';
    } else if (seccion === 'contact') {
      hero.style.display = 'none';
      about.style.display = 'none';
      projects.style.display = 'none';
      contact.style.display = 'block';
    }
  }

  // Mostrar About y Hero por defecto
  mostrarSeccion('about');

  // Asignar eventos a los enlaces del navbar
  document.querySelector('.nav-links a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    mostrarSeccion('about');
  });
  document.querySelector('.nav-links a[href="#projects"]').addEventListener('click', function (e) {
    e.preventDefault();
    mostrarSeccion('projects');
  });
  document.querySelector('.nav-links a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault();
    mostrarSeccion('contact');
  });
});