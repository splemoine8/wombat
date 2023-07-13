// pages/coming-soon.js

import Image from "next/image";
import styles from "../styles/comingSoon.module.css";

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Coming Soon</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/sydney-opera-house.jpg"
            alt="Coming soon"
            width={600}
            height={400}
          />
        </div>

        <div className={styles.text}>
          <p>Our website is under construction.</p>
          <p>Please check back later!</p>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; My Website {new Date().getFullYear()}
      </footer>
    </div>
  );
}
