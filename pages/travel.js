import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/Travel.module.css";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Travel() {
  return (
    <Layout home>
      <Head>
        <title>Travel - {siteTitle}</title>
      </Head>
      <div className={styles.paddingTopStyles}></div>
      <div className={styles.centeredTextStyles}>
              <div className={styles.pageTitle}>
                <div className={styles.lgMarginBottomStyles}>
                  <h2 className={styles.eventsHeading}>Travel</h2>
                </div>
                <div className={styles.lgMarginBottomStyles}>
                  <div className={styles.smallDivider}></div>
                </div>
              </div>
              </div>
      <div className={styles.travelContainer}>
        <Accordion>
          <AccordionItem key="1" aria-label="Important Travel Information" title={<p className={styles.accordianTitle}>Important Travel Information</p>}>
            <p className={styles.accordianButton}>Passports</p>
            <ul className={styles.travelIdeasList}>
              <li>
                All international visitors to Australia must have a valid passport.
                Make sure your passport is valid for at least six months beyond the
                date you plan to leave Australia.
              </li>
              <li>
                Keep a photocopy or digital copy of your passport separate from the
                original, which can be helpful in the event of loss or theft.
              </li>
              <li>If your passport is set to expire this year, consider applying for an expedited renewal to ensure smooth travel. See additional information on the <a href="https://travel.state.gov/content/travel/en/passports/get-fast.html" target="_blank" rel="noopener noreferrer">U.S. Department of State website</a>.</li>
            </ul>
            
            <p className={styles.accordianButton}>Visas & Entry Requirements</p>
            <ul className={styles.travelIdeasList}>
              <li>
                U.S. citizens must obtain a visa or an Electronic Travel Authority
                (ETA) to enter Australia. The ETA visa is the most popular choice for U.S. citizens and the application process is completely electronic. 
              </li>
              <li>
                You can apply for an ETA online at the official Australian
                Government Department of Home Affairs website <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601#HowTo" target="_blank" rel="noopener noreferrer">here</a>.
              </li>
              <li>In most cases, you will be notified of the result of your ETA application immediately. Sometimes there will be a delay before receiving your notification. Check your emails, including your junk mail folder.</li>
            </ul>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Airport" title={<p className={styles.accordianTitle}>Airport</p>}>
            <ul className={styles.travelIdeasList}>
              <li>
                The nearest airport to the wedding venue is Sydney Kingsford Smith
                Airport (SYD). It is located about 8 miles south of the Sydney city
                center.
              </li>
              <li>
                If needed, you can also fly into Melbourne (MEL) or Brisbane (BNE) airports. Both cities offer quick and affordable connecting flights to Sydney.
              </li>
              <li>
                For transportation from the airport to your hotel or other destinations in Sydney, we recommend ride-sharing services such as Lyft and Uber.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Local Transportation" title={<p className={styles.accordianTitle}>Local Transporation</p>}>
            <ul className={styles.travelIdeasList}>
              <li>
                Given that our guests will be staying in various parts of the city, it's not feasible for us to provide transportation to the wedding venue. We suggest using ride-sharing services like Uber or Lyft for your convenience. To ensure you arrive on time, consider scheduling your ride in advance.
              </li>
              <li>
                Public transportation is excellent in Sydney, including trains, buses, and ferries. You can use contactless payment methods for public transportation or the <a href="https://sydneyexpert.com/opal-cards-visitors-sydney/" target="_blank" rel="noopener noreferrer">Opal Card system</a>.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Currency & Exchange" title={<p className={styles.accordianTitle}>Currency & Exchange</p>}>
            <ul className={styles.travelIdeasList}>
              <li>
                The official currency in Australia is the Australian Dollar (AUD). We recommend exchanging some currency before you arrive to cover small expenses.
              </li>
              <li>
                For convenience and to get the best exchange rates, we suggest using a credit card without international transaction fees for most of your purchases. 
              </li>
              <li>
                ATMs are widely available throughout Sydney, but be aware that your bank may charge fees for international withdrawals.
              </li>
              <li>
                Inform your bank of your travel dates to avoid any potential blocks on your card due to sudden foreign transactions.
              </li>
              <li>
                While many places in Sydney accept credit cards, it's always a good idea to carry some cash for small purchases or in places that might not accept cards.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="5" aria-label="Cellphone Usage" title={<p className={styles.accordianTitle}>Cellphone Usage</p>}>
            <ul className={styles.travelIdeasList}>
              <li>
                We recommend that our guests contact their current service provider to inquire about international plan options for the trip to Australia. This can help avoid unexpected fees.
              </li>
              <li>
                Consider purchasing an international data plan or a local SIM card upon arrival for more affordable rates and better coverage.
              </li>
              <li>
                Ensure your phone is unlocked before the trip if you plan to use a local SIM card. This service is usually provided by your current carrier.
              </li>
              <li>
                Wi-Fi is widely available in hotels, cafes, and public spaces in Sydney, which can help you stay connected without incurring data charges.
              </li>
              <li>
                Download and set up any necessary communication apps such as WhatsApp or Skype before your trip, as these can offer convenient and free ways to stay in touch.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="6" aria-label="Weather" title={<p className={styles.accordianTitle}>Weather</p>}>
            <ul className={styles.travelIdeasList}>
              <li>
                In November, Sydney begins to welcome warmer weather as it transitions into summer. Average daytime temperatures range from 64°F to 77°F (18°C to 25°C), making it a pleasant time to explore the city.
              </li>
              <li>
                Nights can still be cool, with temperatures dropping to around 59°F (15°C), so we recommend bringing a light jacket or sweater for the evenings.
              </li>
              <li>
                November is relatively dry in Sydney, but occasional rain showers can occur. Packing a compact umbrella or a waterproof jacket is advisable.
              </li>
              <li>
                The UV index in Sydney can be very high, even in spring. We strongly advise wearing sunscreen, sunglasses, and a hat while you are outdoors.
              </li>
              <li>
                As the weather is generally pleasant, it's the perfect time to enjoy Sydney's beautiful beaches, parks, and outdoor attractions. Remember to stay hydrated and seek shade during the hottest parts of the day.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="7" aria-label="COVID-19 & Health" title={<p className={styles.accordianTitle}>COVID-19 & Health Requirements</p>}>
            <ul className={styles.travelIdeasList}>
              <li>
              The Australian Government does not currently have any COVID-19 requirements in place for travellers entering and departing Australia.
              </li>
              <li>
                We highly recommend purchasing travel insurance for your trip to cover any unexpected medical expenses or trip cancellations related to COVID-19 or other health issues.
              </li>
            </ul>
          </AccordionItem>

        </Accordion>
      </div>
    </Layout>
  );
}