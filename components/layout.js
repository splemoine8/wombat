import Head from "next/head";
import styles from "./layout.module.css";
import Navigation from "./navigation";
import Footer from "./footer";

export const siteTitle = "Madelyn & Scott - Sydney Wedding";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head> {/* ... */} </Head>
      <Header />
      <Navigation />
      <main className={styles.mainContent}>{children}</main>
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
