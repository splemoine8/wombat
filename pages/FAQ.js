import Head from "next/head";
import Layout from "../components/layout";
import { siteTitle } from "../components/layout";
import styles from '../styles/FAQ.module.css';

export default function FAQ() {
  return (
    <Layout home>
      <Head>
        <title>FAQ - {siteTitle}</title>
      </Head>
      <div className={styles.pageTitle}>
        <div className={styles.lgMarginBottomStyles}>
          <h2 className={styles.eventsHeading}>FAQ</h2>
        </div>
        <div className={styles.lgMarginBottomStyles}>
          <div className={styles.smallDivider}></div>
        </div>
      </div>
      <div className={styles.eventContainer}>
        
        <div className={styles.eventContent}>
          <p className="mb-2 text-[#466f5d] font-bold">What is the dress code for the wedding?</p>
          <p>The dress code is cocktail attire. Please dress accordingly to the weather as the wedding and reception will be held outdoors. For attire information for the other events, please see the <a href="/events">Events</a> page.</p>
        </div>
        <p className={styles.descriptionSpacer}></p>
        <div className={styles.eventContent}>
        <p className="mb-2 text-[#466f5d] font-bold">What time should we arrive?</p>
          <p>The ceremony will start at 5:30pm. We encourage everyone to arrive 15 minutes earlier.</p>
        </div>
        <p className={styles.descriptionSpacer}></p>
        <div className={styles.eventContent}>
        <p className="mb-2 text-[#466f5d] font-bold">Are children welcome at the wedding?</p>
          <p>This is an adults-only event. However, exceptions for children may be made upon prior discussion.</p>
        </div>
        <p className={styles.descriptionSpacer}></p>
        <div className={styles.eventContent}>
        <p className="mb-2 text-[#466f5d] font-bold">Is transportation provided for the events?</p>
          <p>We are not providing transportation since our guests are staying in many different areas. Please refer to the <a href="/travel">Travel</a> page for details on local transportation.</p>
        </div>
        <p className={styles.descriptionSpacer}></p>
        <div className={styles.eventContent}>
        <p className="mb-2 text-[#466f5d] font-bold">Can we bring a plus one?</p>
          <p>The number of guests invited is listed on the RSVP page. If you believe we did not account for everyone in your party, please contact us directly.</p>
        </div>
        <p className={styles.descriptionSpacer}></p>
        <div className={styles.eventContent}>
        <p className="mb-2 text-[#466f5d] font-bold">I have dietary restrictions/allergies. What's the best way to let you know?</p>
          <p>You can specify your dietary restrictions through the <a href="/rsvp">RSVP page</a>. Feel free to reach out to us if you have other concerns about the food options.</p>
        </div>
      </div>
    </Layout>
  );
}