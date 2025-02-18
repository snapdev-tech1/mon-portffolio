import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaPhp, FaReact } from "react-icons/fa";
import { DiNodejs, DiMysql, DiGit, DiLinux } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#f4be3f", level: 80, description: "Connaissance avancée de la structure des pages web." },
  { name: "CSS", icon: <FaCss3Alt />, color: "#7987f3", level: 75, description: "CSS pour le style et la mise en page des interfaces." },
  { name: "SASS", icon: <FaSass />, color: "#f3595f", level: 70, description: "Utilisation de SASS pour une gestion efficace des styles." },
  { name: "PHP", icon: <FaPhp />, color: "#529ed5", level: 65, description: "Développement backend avec PHP pour les applications web." },
  { name: "React", icon: <FaReact />, color: "#61DBFB", level: 85, description: "Création d'interfaces dynamiques et interactives avec React." },
  { name: "Node.js", icon: <DiNodejs />, color: "#8cc84b", level: 75, description: "Développement de APIs REST avec Node.js." },
  { name: "SQL", icon: <DiMysql />, color: "#00618d", level: 70, description: "Gestion de bases de données relationnelles avec SQL." },
  { name: "Git", icon: <DiGit />, color: "#f05032", level: 80, description: "Gestion de versions avec Git pour le suivi des projets." },
  { name: "Linux", icon: <DiLinux />, color: "#333333", level: 65, description: "Utilisation de Linux pour le développement et l'administration." },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e", level: 85, description: "Langage principal pour le développement web côté client." },
];

const Competencies = () => {
  return (
    <section className="competencies">
      <h2 className="title">Mes Compétences</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ borderColor: skill.color }}
          >
            <div className="icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p> 
            <motion.div
              className="progress-bar"
              initial={{ width: "0%" }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              style={{ background: skill.color }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Competencies;