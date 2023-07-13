import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/events.module.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome stylesheet

export default function Events() {
  const eventDetails = [
    {
      title: 'Welcome Reception at Manning Bar',
      icon: 'fa-star',
      date: 'NOVEMBER 26, 2024',
      time: '6:00 PM',
      location: 'University of Sydney Campus',
      mapUrl: 'https://goo.gl/maps/v4raAQdLYA2XJLNcA',
      calendarUrl: 'http://example.com/event1.ics',
    },
    {
      title: 'Harbour Boat Cruise',
      icon: 'fa-ship',
      date: 'NOVEMBER 27, 2024',
      time: '2:00 PM',
      location: 'Sydney Warf',
      mapUrl: 'https://goo.gl/maps/abcdef',
      calendarUrl: 'http://example.com/event2.ics',
    },
    {
      title: 'Wedding Ceremony',
      icon: 'fa-heart',
      date: 'NOVEMBER 28, 2024',
      time: '4:00 PM',
      location: 'Harbour View Lawn',
      mapUrl: 'https://goo.gl/maps/ghijkl',
      calendarUrl: 'http://example.com/event3.ics',
    },
    {
      title: 'Wedding Dinner and Reception',
      icon: 'fa-glass-cheers',
      date: 'NOVEMBER 28, 2024',
      time: '6:30 PM',
      location: 'Gunnars Barracks',
      mapUrl: 'https://goo.gl/maps/mnopqr',
      calendarUrl: 'http://example.com/event4.ics',
    },
    {
      title: 'After Party',
      icon: 'fa-martini-glass-citrus',
      date: 'NOVEMBER 29, 2024',
      time: '12:00 AM',
      location: 'The Argyle',
      mapUrl: 'https://goo.gl/maps/mnopqr',
      calendarUrl: 'http://example.com/event4.ics',
    },
  ];

  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        </Head>
        <div className={styles.eventsWrapper}>
          <div id="events" className={styles.paddingTopStyles}>
            <div className={styles.centeredTextStyles}>
              <div className={styles.pageTitle}>
                <div className={styles.lgMarginBottomStyles}>
                  <h2 className={styles.eventsHeading}>Events</h2>
                </div>
                <div className={styles.lgMarginBottomStyles}>
                  <div className={styles.smallDivider}></div>
                </div>
              </div>
            </div>
            <div className={styles.marginBottomStyles}>
              <div className={styles.base}>
                {eventDetails.map((event, index) => (
                  <div key={index} className={styles.event}>
                    <div className={styles.eventContent}>
                      <div className={styles.eventHeadingStyles}>
                        <div className={styles.bottomSpacerOnly}>
                          <div className={styles.eventIcon}>
                            <i className={`fas ${event.icon}`}></i>
                          </div>
                          <h3 className={styles.eventTitle}>{event.title}</h3>
                        </div>
                      </div>
                      <div className={styles.marginBottomStyles}>
                        <p>{event.date}</p>
                        <p className={styles.eventTime}>{event.time}</p>
                        <p>{event.location}</p>
                        <div className={styles.eventButtons}>
                          <a
                            href={event.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.eventButton}
                          >
                            Google Maps
                          </a>
                          <a
                            href={event.calendarUrl}
                            className={styles.eventButton}
                          >
                            Add to Calendar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}