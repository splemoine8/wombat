import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/Stay.module.css"; // Import the styles from the Events page
import Image from "next/image";

export default function Stay() {
  return (
    <Layout home>
      <Head>
        <title>Stay - {siteTitle}</title>
      </Head>
      <div className={styles.eventsWrapper}>
        <div id="stay" className={styles.paddingTopStyles}>
          <div className={styles.centeredTextStyles}>
            <div className={styles.pageTitle}>
              <div className={styles.lgMarginBottomStyles}>
                <h2 className={styles.eventsHeading}>Stay</h2>
              </div>
              <div className={styles.lgMarginBottomStyles}>
                <div className={styles.smallDivider}></div>
              </div>
            </div>
          </div>
          <div className={styles.stayContainer}>
            <h3 className={styles.subheader}>Hotels</h3>
            <p className={styles.introText}>
              There are tons of great hotels in Sydney, both in the Central
              Business District (CBD) and by the beaches. Our wedding events are
              spread across the city, so feel free to stay where ever you want
              since it's so easy to get around. Here are just a few that we
              reccomend!
            </p>
            <br></br>
            <ul className={styles.list}>
              {" "}
              {/* Use the list style from the Events page */}
              <li className={styles.hotelItem}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/fourseasons.jpeg"
                    alt="Hotel Image"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <strong>Four Seasons Hotel Sydney</strong>
                  <br />
                  199 George Street, Sydney, New South Wales 2000 Australia
                  <br />
                  Website:{" "}
                  <a
                    href="https://www.fourseasons.com/sydney/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.fourseasons.com/sydney/
                  </a>
                </div>
              </li>
              <br />
              <li className={styles.hotelItem}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/littlenationalresize.jpg"
                    alt="Hotel Image"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <strong>Little National Hotel Sydney</strong>
                  <br />
                  26 Clarence St, Sydney, New South Wales 2000 Australia
                  <br />
                  Website:{" "}
                  <a
                    href="https://littlenationalhotel.com.au/sydney/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://littlenationalhotel.com.au/sydney/
                  </a>
                </div>
              </li>
              <br />
              <li className={styles.hotelItem}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/hyatt.jpg"
                    alt="Hotel Image"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <strong>Hyatt Regency Sydney</strong>
                  <br />
                  Address: 161 Sussex Street, Sydney, New South Wales 2000
                  Australia
                  <br />
                  Website:{" "}
                  <a
                    href="https://www.hyatt.com/hyatt-regency/en-US/sydrs-hyatt-regency-sydney"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.hyatt.com/hyatt-regency/en-US/sydrs-hyatt-regency-sydney
                  </a>
                </div>
              </li>
            </ul>
            <div className={styles.spacer}></div>
            <p className={styles.introText}>
              Additionally, our wedding venue has generiously provided a{" "}
              <strong>15% discount</strong> off a select group of hotels,
              including:
              <ul style={{ listStyleType: "disc" }}>
                <li style={{ marginLeft: "20px" }}>
                  <a
                    href="https://abyadina.com/luxury-hotels/sydney/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A by Adina Sydney
                  </a>
                </li>
                <li style={{ marginLeft: "20px" }}>
                  <a
                    href="https://www.tfehotels.com/en/hotels/adina-apartment-hotels/bondi-beach-sydney/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Adina Apartment Hotel Bondi Beach
                  </a>
                </li>
                <li style={{ marginLeft: "20px" }}>
                  <a
                    href="https://www.adinahotels.com/en/apartments/sydney-darling-harbour/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Adina Apartment Hotel Darling Harbour
                  </a>
                </li>
                <li style={{ marginLeft: "20px" }}>
                  <a
                    href="https://www.adinahotels.com/en/apartments/sydney-surry-hills/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Adina Apartment Hotel Surry Hills
                  </a>
                </li>
                <li style={{ marginLeft: "20px" }}>
                  <a
                    href="https://vibehotels.com/book-accommodation/sydney/hotel-north-sydney/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vibe Hotel North Sydney
                  </a>
                </li>
              </ul>
              <p>
                See the{" "}
                <a
                  href="/Accommodation - TFE Hotels 2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  attached flyer
                </a>{" "}
                for additional information and QR code.
              </p>
              <br />
            </p>
            <p className={styles.introText}>
              Check out{" "}
              <a
                href="https://www.tripadvisor.com/Hotels-g255060-Sydney_New_South_Wales-Hotels.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                TripAdvisor
              </a>{" "}
              for more hotel recommendations.
            </p>
            <div className={styles.spacer}></div>
            <h3 className={styles.subheader}>AirBnbs</h3>
            <p className={styles.introText}>
              AirBnb is popular in Australia and a great option if you are
              planning to stay with a large group or as a family! Here are a few
              options for inspiration, but we recommend searching through the
              site directly for the best availability.
            </p>
            <br></br>

            <ul className={styles.list}>
              {" "}
              {/* Use the list style from the Events page */}
              <li className={styles.hotelItem}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/jetflamingo.jpg"
                    alt="Hotel Image"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <strong>Jet Flamingo: Luxe Villa</strong>
                  <br />
                  Bedrooms: 5
                  <br />
                  Bathrooms: 3
                  <br />
                  Sleeps: 12
                  <br />
                  Website:{" "}
                  <a
                    href="https://www.airbnb.com/rooms/11106673?adults=1&check_in=2024-11-26&check_out=2024-11-29&source_impression_id=p3_1703033804_u6SuRs78OxnpDqhP&previous_page_section_name=1000&federated_search_id=cad117e1-1e85-43fe-837e-5493f416dfaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AirBnb Listing
                  </a>
                </div>
              </li>
              <br />
              <li className={styles.hotelItem}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/rockstar.jpg"
                    alt="Hotel Image"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <strong>Jet Flamingo: Rockstar Villa</strong>
                  <br />
                  Bedrooms: 6
                  <br />
                  Bathrooms: 5
                  <br />
                  Sleeps: 16+
                  <br />
                  Website:{" "}
                  <a
                    href="https://www.airbnb.com/rooms/1961902?adults=1&check_in=2024-11-26&check_out=2024-11-29&source_impression_id=p3_1703033804_ZIHbt57uARkIGxMA&previous_page_section_name=1000&federated_search_id=cad117e1-1e85-43fe-837e-5493f416dfaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AirBnb Listing
                  </a>
                </div>
              </li>
              <br />
              <li className={styles.hotelItem}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/watsons-1.jpg"
                    alt="Hotel Image"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <strong>Villa in Wastons Bay</strong>
                  <br />
                  Bedrooms: 6
                  <br />
                  Bathrooms: 3
                  <br />
                  Sleeps: 14
                  <br />
                  Website:{" "}
                  <a
                    href="https://www.airbnb.com/rooms/1023522466845393812?adults=1&check_in=2024-11-26&check_out=2024-11-29&source_impression_id=p3_1703035404_YmHxdnXeLaxBtgK4&previous_page_section_name=1000&federated_search_id=a01c3deb-e018-4920-8f63-068166a06e61"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AirBnb Listing
                  </a>
                </div>
              </li>
            </ul>
            <div className={styles.spacer}></div>
            <p className={styles.introText}>
              Check out{" "}
              <a
                href="https://www.airbnb.com/sydney-australia/stays"
                target="_blank"
                rel="noopener noreferrer"
              >
                AirBnb
              </a>{" "}
              for more rental accommodations.
            </p>
            <div className={styles.spacer}></div>
            <h3 className={styles.subheader}>Where to Stay</h3>
            <p className={styles.introText}>
              While our wedding venue is located in Mossman, there's no need to
              limit your accommodation search to the immediate vicinity. Sydney
              has excellent transportation options and you can easily explore
              and stay in a wider range of locations. Here are a few areas we
              recommend:
            </p>
            <br></br>

            <ul className={styles.introText} style={{ listStyleType: "disc" }}>
              <li style={{ marginLeft: "20px" }}>Circular Quay/The Rocks</li>
              <li style={{ marginLeft: "20px" }}>Darling Harbour</li>
              <li style={{ marginLeft: "20px" }}>Surry Hills</li>
              <li style={{ marginLeft: "20px" }}>Bondi Beach</li>
              <li style={{ marginLeft: "20px" }}>Manly Beach</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
