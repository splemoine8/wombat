import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/weddingParty.module.css';

export default function WeddingParty() {
  const weddingPartyMembers = [
    {
      name: 'Amir Atefi',
      title: 'Best Man',
      image: '/images/amir.jpeg', // Replace with the actual image path
      relationship: 'Amir, the best man, and Scott, the groom, have been close since childhood. Growing up in the same neighborhood, Amir and Scott were inseparable and did everything together. They spent countless hours playing sports, exploring the outdoors, and dreaming about their futures. As they grew older, their friendship only deepened as they supported each other through the ups and downs of life.'
    },
    {
      name: 'Jocelyn Metsch',
      title: 'Maid of Honor',
      image: '/images/jocelyn.jpeg', // Replace with the actual image path
    },
    // Add more wedding party members here
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle} - Wedding Party</title>
      </Head>
      <div className={styles.weddingPartyWrapper}>
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
          <div className={styles.members}>
            {weddingPartyMembers.map((member, index) => (
              <div key={index} className={styles.memberWrapper}>
              <div className={styles.memberImageContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberDetailsContainer}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberTitle}>{member.title}</p>
                <p className={styles.memberRelationship}>{member.relationship}</p>
              </div>
            </div>
            ))}
          </div>
      </div>
    </Layout>
  );
  
}
