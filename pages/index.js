// pages/coming-soon.js

import NextImage from "next/image";
import styles from "../styles/comingSoon.module.css";
import Footer from "../components/footer";

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Coming Soon</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <NextImage
            src="/images/proposal.jpeg"
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

      <Footer />
    </div>
  );
}
