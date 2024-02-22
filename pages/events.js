import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/events.module.css";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome stylesheet

export default function Events() {
  const eventDetails = [
    {
      title: "Welcome Reception at Manning Bar",
      icon: "fa-glass-cheers",
      date: "TUESDAY, NOVEMBER 26, 2024",
      time: "6:00 PM",
      location: "University of Sydney Campus",
      address: "Manning House, Level 2 Manning Rd, Camperdown NSW 2050",
      mapUrl: "https://goo.gl/maps/v4raAQdLYA2XJLNcA",
      calendarUrl: "http://example.com/event1.ics",
      description:
        "Join us for pub food and drinks at the place where we first met. For those interested, a night out in the city will follow! Attire is casual.",
    },
    {
      title: "Rehearsal Boat Cruise",
      icon: "fa-ship",
      date: "WEDNESDAY, NOVEMBER 27, 2024",
      time: "2:00 PM",
      location: "King Street Wharf",
      address: "The Promenade, Lime St, Sydney NSW 2000",
      mapUrl:
        "https://www.google.com/maps/place/Sydney+Harbour/@-33.8441347,151.077693,12z/data=!3m1!4b1!4m6!3m5!1s0x6b12ac27b4c8141b:0x9c8d82d1bc806be8!8m2!3d-33.8436313!4d151.23731!16s%2Fg%2F11cjgbwxlt?entry=ttu",
      calendarUrl: "http://example.com/event2.ics",
      description:
        "Come along for a breathtaking sunset cruise of the harbor. Enjoy drinks and canapés while taking in views of the city skyline. Attire is semi-formal. ",
    },
    {
      title: "Wedding Ceremony",
      icon: "fa-heart",
      date: "THURSDAY, NOVEMBER 28, 2024",
      time: "5:00 PM",
      location: "Harbour View Lawn",
      address: "End of, Suakin Dr, Mosman NSW 2088",
      mapUrl:
        "https://www.google.com/maps/place/Gunners+Barracks/@-33.8367956,151.257662,359m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b12ac6b498cdf71:0xc1b530b9ab6790b0!8m2!3d-33.8367956!4d151.2583057!16s%2Fg%2F1ttdylsp?entry=ttu",
      calendarUrl: "http://example.com/event3.ics",
      description:
        "Share our special moment with us as we exchange vows and start our new journey together. Please arrive by 5:00pm for refreshments and live music prior the ceremony. Attire is cocktail.",
    },
    {
      title: "Wedding Dinner and Reception",
      icon: "fa-utensils",
      date: "THURSDAY, NOVEMBER 28, 2024",
      time: "6:30 PM",
      location: "Gunnars Barracks",
      address: "End of, Suakin Dr, Mosman NSW 2088",
      mapUrl:
        "https://www.google.com/maps/place/Gunners+Barracks/@-33.8367956,151.257662,359m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b12ac6b498cdf71:0xc1b530b9ab6790b0!8m2!3d-33.8367956!4d151.2583057!16s%2Fg%2F1ttdylsp?entry=ttu",
      calendarUrl: "http://example.com/event4.ics",
      description:
        "Following the ceremony, join us for a grand dinner complete with a DJ and dancing. Let’s make some wonderful memories together.",
    },
    {
      title: "After Party",
      icon: "fa-martini-glass-citrus",
      date: "THURSDAY, NOVEMBER 28, 2024",
      time: "12:00 AM",
      location: "The Argyle",
      address: "18 Argyle St, The Rocks NSW 2000",
      mapUrl:
        "https://www.google.com/maps/place/The+Argyle/@-33.8588837,151.202953,1435m/data=!3m3!1e3!4b1!5s0x6b12ae42d02ad381:0xfb658c93d0b2f3c8!4m6!3m5!1s0x6b12ae42dba4368d:0x6fffc41ab13bf55d!8m2!3d-33.8588838!4d151.2078239!16s%2Fg%2F12qfdj09l?entry=ttu",
      calendarUrl: "http://example.com/event4.ics",
      description:
        "As the wedding night winds down, we're not stopping there! Meet us in The Rocks for some lively post-wedding fun.",
    },
    {
      title: "Recovery Brunch",
      icon: "fa-bacon",
      date: "FRIDAY, NOVEMBER 29, 2024",
      time: "11:00 AM",
      location: "Coogee Bay Pavillion",
      address: "Ground Floor, 169 Dolphin St, Coogee NSW 2034",
      mapUrl:
        "https://www.google.com/maps/place/Coogee+Pavilion+Ground+Floor/@-33.9187131,151.2556692,1433m/data=!3m3!1e3!4b1!5s0x6b12b26b3d9195b5:0xff1f03752c75979e!4m6!3m5!1s0x6b12b26b236338d9:0x9b143a3a04cc4be9!8m2!3d-33.9187131!4d151.2582441!16s%2Fg%2F1q69q15_j?entry=ttu",
      calendarUrl: "http://example.com/event4.ics",
      description:
        "Before we head off to our honeymoon, and bid you adieu, join us for a refreshing hangover brunch by the water. Attendance is optional, but we would love to see you!",
    },
  ];

  // Initialize a variable to keep track of the current event date
  let currentDate = "";

  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle} - Events</title>
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

            {eventDetails.map((event, index) => {
              const displayDate = event.date !== currentDate;
              const isLastEvent = index === eventDetails.length - 1;
              const isNextDateDifferent = isLastEvent
                ? false
                : event.date !== eventDetails[index + 1].date;

              currentDate = event.date;

              return (
                <div key={index} className={styles.event}>
                  {displayDate && (
                    <h3 className={styles.eventDate}>{event.date}</h3>
                  )}
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
                      <p>{event.time}</p>
                      <p>{event.location}</p>

                      <a href={event.mapUrl} className={styles.addressLink}>
                        {event.address}
                      </a>
                      <div className="content-center">
                        <p className={styles.descriptionSpacer}>
                          {event.description}
                        </p>
                      </div>
                      <div className={styles.eventButtons}>
                        <a
                          href={event.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.eventButton}
                        >
                          Google Maps
                        </a>
                        {/* <a
                          href={event.calendarUrl}
                          className={styles.eventButton}
                        >
                          Add to Calendar
                        </a> */}
                      </div>
                    </div>
                  </div>
                  {!isLastEvent && isNextDateDifferent && (
                    <div className={styles.divider}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
