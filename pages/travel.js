import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/travel.module.css';

export default function Travel() {
  return (
    <Layout home>
      <Head>
        <title>Travel - {siteTitle}</title>
      </Head>
      <div className={styles.travelContainer}>
        <h2 className={styles.sectionTitle}>Airport</h2>
        <p>
          The nearest airport to the wedding venue is Sydney Kingsford Smith Airport (SYD). It is located about 8 miles south of the Sydney city center.
        </p>

        <h2 className={styles.sectionTitle}>Accommodation</h2>
        <ul className={styles.accommodationList}>
          <li>
            <strong>Hotel A</strong><br />
            Address: 1234 Hotel St, Sydney NSW 2000, Australia<br />
            Phone: +61 2 9123 4567<br />
            Website: <a href="https://www.example.com/hotel-a" target="_blank" rel="noopener noreferrer">www.example.com/hotel-a</a>
          </li>
          <li>
            <strong>Hotel B</strong><br />
            Address: 5678 Hotel St, Sydney NSW 2000, Australia<br />
            Phone: +61 2 9876 5432<br />
            Website: <a href="https://www.example.com/hotel-b" target="_blank" rel="noopener noreferrer">www.example.com/hotel-b</a>
          </li>
          <li>
            <strong>Hotel C</strong><br />
            Address: 9012 Hotel St, Sydney NSW 2000, Australia<br />
            Phone: +61 2 9012 3456<br />
            Website: <a href="https://www.example.com/hotel-c" target="_blank" rel="noopener noreferrer">www.example.com/hotel-c</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
