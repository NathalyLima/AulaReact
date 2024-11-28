import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css'; 

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.homeTitle}>Página Inicial</h1>
            <nav className={styles.homeNav}>
                <ul className={styles.homeList}>
                    <li className={styles.homeListItem}>
                        <Link to="/Atividade1" className={styles.homeLink}>Atividade 1</Link>
                    </li>
                    <li className={styles.homeListItem}>
                        <Link to="/Atividade2" className={styles.homeLink}>Atividade 2</Link>
                    </li>
                    <li className={styles.homeListItem}>
                        <Link to="/Atividade03" className={styles.homeLink}>Atividade 3</Link>
                    </li>
                    <li className={styles.homeListItem}>
                        <Link to="/Atividade04" className={styles.homeLink}>Atividade 4</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
