import React from "react";
import { motion } from "framer-motion";
import cactusImage from "../assets/cactus.png"; 

const Cactus = () => {
  return (
    <div className="cactus">
    <motion.img
      src={cactusImage}
      alt="Cactus qui bouge"
      className="cactus"
      animate={{
        rotate: [-2, 2, -2], // Oscillation entre -2° et 2°
      }}
      transition={{
        repeat: Infinity, // Répète à l'infini
        duration: 2, // Durée de l'animation
        ease: "easeInOut", // Douceur du mouvement
      }}
    />
    </div>
  );
};

export default Cactus;