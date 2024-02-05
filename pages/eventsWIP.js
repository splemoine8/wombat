export default function Events() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
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
            <h3 className={styles.eventDate}>Tuesday, November 26th</h3>
            <div className={styles.marginBottomStyles}>
              <div className={styles.base}>
                {/* Manually write in event details here */}
                <div className={styles.event}>
                  <div className={styles.eventContent}>
                    <div className={styles.eventHeadingStyles}>
                      <div className={styles.bottomSpacerOnly}>
                        <div className={styles.eventIcon}>
                          <i className={`fas fa-glass-cheers`}></i>
                        </div>
                        <h3 className={styles.eventTitle}>
                          Welcome Reception at Manning Bar
                        </h3>
                      </div>
                    </div>
                    <div className={styles.marginBottomStyles}>
                      <p>NOVEMBER 26, 2024</p>
                      <p className={styles.eventTime}>6:00 PM</p>
                      <p>University of Sydney Campus</p>
                      <div className={styles.eventButtons}>
                        <a
                          href="https://goo.gl/maps/v4raAQdLYA2XJLNcA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.eventButton}
                        >
                          Google Maps
                        </a>
                        <a
                          href="http://example.com/event1.ics"
                          className={styles.eventButton}
                        >
                          Add to Calendar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Repeat the above structure for other events */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
