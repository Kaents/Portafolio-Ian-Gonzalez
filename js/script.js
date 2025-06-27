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

  // Forzar scroll al top al hacer click en los links del navbar
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});

// Siempre iniciar desde arriba al recargar la página
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};