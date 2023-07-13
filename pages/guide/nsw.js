import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/destination.module.css';

export default function NSW() {
  return (
    <Layout home>
      <Head>
        <title>New South Wales - {siteTitle}</title>
      </Head>
      <div className={styles.travelContainer}>
        <Link href="/guide">
          <h3>Back to Guide</h3>
        </Link>
        <h2 className={styles.sectionTitle}>Sydney</h2>
        <ul className={styles.accommodationList}>
          <li className={styles.destination}>
            <div className={styles.imageContainer}>
              <img src="/images/sydney-opera-house.jpg" alt="Sydney Opera House" />
            </div>
            <div className={styles.destinationInfo}>
              <h3>Sydney Opera House</h3>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g255060-d257909-Reviews-Sydney_Opera_House-Sydney_New_South_Wales.html" target="_blank" rel="noopener noreferrer">TripAdvisor Link</a>
              </p>
              <p>
                <strong>Scott & Maddy’s Tip:</strong> Take a guided tour of the Opera House to learn about its history and architecture.
              </p>
            </div>
          </li>
          <li className={styles.destination}>
            <div className={styles.imageContainer}>
              <img src="/images/harbour-bridge.jpg" alt="Harbour Bridge" />
            </div>
            <div className={styles.destinationInfo}>
              <h3>Harbour Bridge</h3>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g255060-d257908-Reviews-Sydney_Harbour_Bridge-Sydney_New_South_Wales.html" target="_blank" rel="noopener noreferrer">TripAdvisor Link</a>
              </p>
              <p>
                <strong>Scott & Maddy’s Tip:</strong> Climb the bridge to get a stunning view of the city.
              </p>
            </div>
          </li>
          <li className={styles.destination}>
            <div className={styles.imageContainer}>
              <img src="/bondi-beach.jpg" alt="Bondi Beach" />
            </div>
            <div className={styles.destinationInfo}>
              <h3>Bondi Beach</h3>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g261612-d271718-Reviews-Bondi_Beach-Sydney_New_South_Wales.html" target="_blank" rel="noopener noreferrer">TripAdvisor Link</a>
              </p>
              <p>
                <strong>Scott & Maddy’s Tip:</strong> Take a dip in the ocean and grab some fish and chips from one of the nearby restaurants.
              </p>
            </div>
          </li>
        </ul>

        <h2 className={styles.sectionTitle}>Newcastle</h2>
        <ul className={styles.accommodationList}>
          <li className={styles.destination}>
            <div className={styles.imageContainer}>
              <img src="/nobbys-beach.jpg" alt="Nobbys Beach" />
            </div>
            <div className={styles.destinationInfo}>
              <h3>Nobbys Beach</h3>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g255325-d12691944-Reviews-Nobbys_Beach-Newcastle_Greater_Newcastle_New_South_Wales.html" target="_blank" rel="noopener noreferrer">TripAdvisor Link</a>
              </p>
              <p>
                <strong>Scott & Maddy’s Tip:</strong> Take a walk along the breakwall to see the historic lighthouse and enjoy the ocean breeze.
              </p>
            </div>
          </li>
          <li className={styles.destination}>
            <div className={styles.imageContainer}>
              <img src="/fort-scratchley.jpg" alt="Fort Scratchley" />
            </div>
            <div className={styles.destinationInfo}>
              <h3>Fort Scratchley</h3>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g255325-d256088-Reviews-Fort_Scratchley-Newcastle_Greater_Newcastle_New_South_Wales.html" target="_blank" rel="noopener noreferrer">TripAdvisor Link</a>
              </p>
              <p>
                <strong>Scott & Maddy’s Tip:</strong> Take a guided tour of the fort to learn about its history and enjoy the panoramic views of the ocean and city.
              </p>
            </div>
          </li>
          <li className={styles.destination}>
            <div className={styles.imageContainer}>
              <img src="/newcastle-beach.jpg" alt="Newcastle Beach" />
            </div>
            <div className={styles.destinationInfo}>
              <h3>Newcastle Beach</h3>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g255325-d12691941-Reviews-Newcastle_Beach-Newcastle_Greater_Newcastle_New_South_Wales.html" target="_blank" rel="noopener noreferrer">TripAdvisor Link</a>
              </p>
              <p>
                <strong>Scott & Maddy’s Tip:</strong> Watch the surfers catch some waves and grab a coffee from one of the nearby cafes.
              </p>
            </div>
          </li>
        </ul>

        <h2 className={styles.sectionTitle}>Wollongong</h2>
        <ul className={styles.accommodationList}>
          <li className={styles.destination}>
            <div className={styles.imageContainer}>
              <img src="/nan-tien-temple.jpg" alt="Nan Tien Temple" />
            </div>
            <div className={styles.destinationInfo}>
              <h3>Nan Tien Temple</h3>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g255333-d256023-Reviews-Nan_Tien_Temple-Unanderra_Wollongong_New_South_Wales.html" target="_blank" rel="noopener noreferrer">TripAdvisor Link</a>
              </p>
              <p>
                <strong>Scott & Maddy’s Tip:</strong> Take a guided tour of the temple to learn about Buddhism and enjoy the peaceful surroundings.
              </p>
            </div>
          </li>
          <li className={styles.destination}>
            <div className={styles.imageContainer}>
              <img src="/botanic-garden.jpg" alt="Wollongong Botanic Garden" />
            </div>
            <div className={styles.destinationInfo}>
              <h3>Wollongong Botanic Garden</h3>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g255333-d256025-Reviews-Wollongong_Botanic_Garden-Wollongong_New_South_Wales.html" target="_blank" rel="noopener noreferrer">TripAdvisor Link</a>
              </p>
              <p>
                <strong>Scott & Maddy’s Tip:</strong> Pack a picnic and enjoy a relaxing day in the garden surrounded by beautiful plants and wildlife.
              </p>
            </div>
          </li>
          <li className={styles.destination}>
            <div className={styles.imageContainer}>
              <img src="/sea-cliff-bridge.jpg" alt="Sea Cliff Bridge" />
            </div>
            <div className={styles.destinationInfo}>
              <h3>Sea Cliff Bridge</h3>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g528977-d1544505-Reviews-Grand_Pacific_Drive_Sea_Cliff_Bridge-Tourist_Drive_9_New_South_Wales.html" target="_blank" rel="noopener noreferrer">TripAdvisor Link</a>
              </p>
              <p>
                <strong>Scott & Maddy’s Tip:</strong> Take a scenic drive along the bridge and enjoy the stunning views of the ocean and coastline.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
