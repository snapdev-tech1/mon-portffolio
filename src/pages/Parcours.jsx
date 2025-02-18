import React from 'react';
import sg from '../assets/societe-generale.webp';
import agpm from '../assets/agpm.webp';
import openclassrooms from '../assets/openclassrooms.webp';
import esa from '../assets/esa.webp';

const Parcours = () => {
  return (
    <div className="parcours">
      <h2>Mon Parcours</h2>

      {/* Expérience Professionnelle */}
      <div className="experience">
        <div className="experience-item" id="experience-item-dev">
          <img 
            src={sg} 
            alt="Société Générale Assurance" 
            className="company-logo"  
            style={{ height: '40px', marginRight: '16px' }} 
          />
          <p>
            <strong>Septembre 2023 - Septembre 2024</strong> @Société Générale Assurance
          </p>
          <p className="role" id="role-dev">Développeuse en alternance</p>
          <ul>
            <li>Développement d’outils web utilisant Vue.js, PHP</li>
            <li>Optimisation de l'intelligence artificielle avec des stratégies de prompt engineering avancées</li>
            <li>Utilisation de technologies et d’outils avancés (Kubernetes, Git, Linux, etc.)</li>
            <li>Mise en conformité de l’accessibilité des interfaces (RGAA)</li>
          </ul>
        </div>

        <div className="experience-item">
          <img 
            src={agpm} 
            alt="Groupe AGPM" 
            className="company-logo"  
            style={{ height: '40px', marginRight: '16px' }} 
          />
          <p>
            <strong>Février 2020 - Mars 2023</strong> @Groupe AGPM
          </p>
          <p className="role">Manageuse en Assurance</p>
          <ul>
            <li>Gestion et coordination d'une équipe de 5 conseillers en assurance</li>
            <li>Amélioration des processus de service client et formation des équipes à la conduite du changement</li>
          </ul>
        </div>

        <div className="experience-item">
          <img 
            src={sg} 
            alt="Société Générale Assurance" 
            className="company-logo"  
            style={{ height: '40px', marginRight: '16px' }} 
          />
          <p>
            <strong>Novembre 2018 - Février 2020</strong> @Société Générale Assurance
          </p>
          <p className="role">Responsable Adjointe</p>
          <ul>
            <li>Supervision des opérations quotidiennes et soutien à la direction, contribuant à l’optimisation des processus internes</li>
          </ul>
        </div>

        <div className="experience-item">
          <img 
            src={sg}  
            alt="Société Générale Assurance" 
            className="company-logo"  
            style={{ height: '40px', marginRight: '16px' }} 
          />
          <p>
            <strong>Janvier 2010 - Novembre 2018</strong> @Société Générale Assurance
          </p>
          <p className="role">Téléconseillère en Assurance Dommages</p>
          <ul>
            <li>Gestion des appels entrants et sortants pour des produits d'assurance dommages, obtenant des taux de satisfaction client supérieurs à 90%</li>
          </ul>
        </div>
      </div>

      {/* Formation */}
      <div className="formation">
        <div className="formation-item">
          <img 
            src={openclassrooms} 
            alt="OpenClassrooms" 
            className="formation-logo" 
            style={{ width: "70px", height: '60px', marginRight: '16px' }} 
          />
          <p>
            <strong>2023 - 2024</strong> Formation Développeur Web - OpenClassrooms
          </p>
          <ul>
            <li>Maîtrise des langages et frameworks : React.js, Node.js, MongoDB</li>
            <li>Optimisation SEO</li>
            <li>Gestion de projet et méthodologies Agile</li>
          </ul>
        </div>

        <div className="formation-item">
          <img 
            src={esa} 
            alt="Ecole Supérieure des Assurances" 
            className="formation-logo" 
            style={{ width: "50px", height: '40px', marginRight: '16px' }} 
          />
          <p>
            <strong>Bac +2</strong> Assurance - Ecole Supérieure des Assurances Paris
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parcours;