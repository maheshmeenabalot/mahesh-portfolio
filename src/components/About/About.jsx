import react from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return( 
    <section className={styles.container}>
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
            alt='about image'
            className={styles.aboutImg}
            >
                
            </img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='cursor image in about '></img>
                    <div className={styles.abouItemText}>
                        <h3>Frontend Devloper</h3>
                        <p>I'm a frontend devloper with experience in building
                             responsive and optimized websites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='cursor image in about '></img>
                    <div className={styles.abouItemText}>
                        <h3>Backend Devloper</h3>
                        <p>I have experience developing fast and optimized API's And backend
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt='cursor image in about '></img>
                    <div className={styles.abouItemText}>
                        <h3>UI/UX Designer</h3>
                        <p>I have designed multiple landing pages and have sastem 
                            as well. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
    );
};