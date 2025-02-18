import React from 'react';

const projectData = [
  {
    "title": "Outil d’IA pour le numérique responsable",
    "description": "Développement d'outils basés sur l’IA pour promouvoir des pratiques numériques responsables.",
    "highlights": [
      "👉 Création d'un site web RSE avec un questionnaire intelligent basé sur l'IA et les normes RGAA/WCAG.",
      "👉 Liste d'actions optimisée par un prompt engineering avancé.",
      "👉 Développement d'une application accessible avec JavaScript, PHP et SQLite3."
    ],
    "githubLink": ""
  },
  {
    "title": "Site web de location immobilière",
    "description": "Développement d’un site complet pour la gestion des locations immobilières.",
    "highlights": [
      "👉 Initialisation du projet avec Create React App.",
      "👉 Navigation fluide grâce à React Router.",
      "👉 Composants React réutilisables pour une interface dynamique."
    ],
    "githubLink": "https://github.com/snapdev-tech1/projet-React"
  },
  {
    "title": "Back-end d'un système d’évaluation de livres",
    "description": "Création du back-end pour un système d’évaluation et gestion des livres.",
    "highlights": [
      "👉 Serveur Express connecté à MongoDB avec API RESTful.",
      "👉 Implémentation des opérations CRUD pour la gestion des livres.",
      "👉 Authentification sécurisée avec JWT et bcrypt."
    ],
    "githubLink": "https://github.com/snapdev-tech1/backend-mon-vieux-grimoire.git"
  },
  {
    "title": "Design d’une page d'accueil d'une agence de voyage",
    "description": "Création d'une interface responsive pour la page d'accueil d'une agence de voyage, centrée sur l'expérience utilisateur.",
    "highlights": [
      "👉 Design responsive avec HTML et CSS, utilisant des media queries.",
      "👉 Intégration du contenu conforme aux maquettes Figma.",
      "👉 Versioning du projet avec Git et gestion sur GitHub."
    ],
    "githubLink": "https://snapdev-tech1.github.io/agence-de-voyage-booki/"
  }
];

// Composant carte de projet
const ProjectCard = ({ title, description, highlights, githubLink }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-body">
        {highlights.map((item, index) => (
          <div className="highlight" key={index}>
            {item}
          </div>
        ))}
      </div><br></br>
      <div className="card-footer">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <h2>Mes Projets</h2>
      <div className="cards">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            highlights={project.highlights}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;