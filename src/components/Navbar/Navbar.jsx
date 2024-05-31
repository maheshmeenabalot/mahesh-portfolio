import React,{useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const[menuOpen, setMenuopen] =useState(false);
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Portfolio
        </a>
        <div className={styles.menu}>
            <img className={styles.meuBtn} 
            src={
                menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
                }
                 alt="manu-btn"
                 onClick={() => setMenuopen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}` }
                onClick={() => setMenuopen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                    </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contacts">Contects</a>
                </li>
            </ul>
        </div>
    </nav>;

};