import Head from 'next/head';
import styles from './layout.module.css';
import Navigation from './navigation';
import Footer from './footer';

export const siteTitle = 'Wedding';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" x="summary_large_image" />
      </Head>
      <Header />
      <Navigation className={styles.stick}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBox}>
        <div className={styles.titleBox}>
          <h1 className={styles.headerText}>Madelyn & Scott</h1>
        </div>
      </div>
    </header>
  );
}