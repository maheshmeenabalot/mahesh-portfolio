import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.card}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Preview of ${title}`}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.sourceButton}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
