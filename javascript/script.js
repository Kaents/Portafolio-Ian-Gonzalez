function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
// Función para inicializar proyectos
function initializeProjects() {
    const projects = [
        {
            title: "Sistema Gestion de Fichas Clinicas",
            imgSrc: "",
            description: "El sisguiente sistema fue un proyecto de titulo realizado en conjunto a compañeros del instituto para facilitar la gestión y mejorar la seguridad de las fichas clinicas de la organizacion Casaquinta Terapias. Se utilizó PHP, HTML, CCS, XAMPP y Laravel para su desarrollo, ademas una vez terminado el desarrollo se integro a un subdominio para su uso remoto."
        }
        // Proyectos futuros
        /*
        {
            title: "Nombre del Proyecto Futuro",
            imgSrc: ""
            description: "Descripción del proyecto futuro."
        }
        */
    ];

    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <img src="${project.imgSrc}" alt="">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        `;
        projectContainer.appendChild(projectDiv);
    });
}

// Inicializar proyectos al cargar la página
document.addEventListener('DOMContentLoaded', initializeProjects);
