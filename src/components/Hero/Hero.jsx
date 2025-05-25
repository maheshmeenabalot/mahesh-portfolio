import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css' ;

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
           <h1 className={styles.title}> 
                    Hello, I'm Mahesh Meena
           </h1>
            <p className={styles.discription}>I'm Mahesh Meena, a Computer Science and Engineering undergraduate from IIT Goa. I have experience in full-stack development, having worked as a Senior Software Developer at DCB Bank and interned at Timemarks Examiner, where I helped build a Web3.0 e-commerce platform. I'm skilled in React.js, Node.js, Spring Boot, SQL, Docker, and more. I’ve also built projects like an Academic Management System and a real-time chat app. I have a strong interest in financial markets and trading.


            </p>
            <a href='mailto:immaheshbalot@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Image of mine' className={styles.HeroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
};
