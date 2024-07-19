import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css' ;

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
           <h1 style={{ color: 'black', fontSize: '2em' }}>Hello, I'm Mahesh Meena</h1>
            <p className={styles.discription}>I'm Mahesh Meena, a Computer Science and Engineering graduate from IIT Goa.
                With a strong foundation in both front-end and back-end web development, I have interned at TIMEMARKS EXAMINER PRIVATE LIMITED,
                 where I contributed to developing an e-commerce platform using Web3.0 technologies. 
                 I am proficient in SQL, HTML, CSS, JavaScript, React.js, Node.js, MySQL, Docker, 
                 and have a keen interest in financial markets and trading.
            </p>
            <a href='mailto:immaheshbalot@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Image of mine' className={styles.HeroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
};
