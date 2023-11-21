import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/weddingParty.module.css";

export default function WeddingParty() {
  const bridalPartyMembers = [
    {
      name: "Jocelyn Metsch",
      title: "Maid of Honor",
      image: "/images/jocelyn.jpeg",
      relationship:
        "Jocelyn has been the bride’s closest confidante since college. They’ve shared countless adventures and support each other in every aspect of life.",
    },
    {
      name: "Jocelyn Metsch",
      title: "Bridesmaid",
      image: "/images/jocelyn.jpeg",
      relationship:
        "Jocelyn has been the bride’s closest confidante since college. They’ve shared countless adventures and support each other in every aspect of life.",
    },
    {
      name: "Jocelyn Metsch",
      title: "Bridesmaid",
      image: "/images/jocelyn.jpeg",
      relationship:
        "Jocelyn has been the bride’s closest confidante since college. They’ve shared countless adventures and support each other in every aspect of life.",
    },
    // Add more bridal party members here
  ];

  const groomsmenMembers = [
    {
      name: "Amir Atefi",
      title: "Co-Best Man",
      image: "/images/amir.jpeg",
      relationship:
        "Amir, the best man, and Scott, the groom, have been close since childhood. Growing up in the same neighborhood, Amir and Scott were inseparable and did everything together. As they grew older, their friendship only deepened as they supported each other through the ups and downs of life.",
    },
    {
      name: "Amir Atefi",
      title: "Co-Best Man",
      image: "/images/amir.jpeg",
      relationship:
        "Amir, the best man, and Scott, the groom, have been close since childhood. Growing up in the same neighborhood, Amir and Scott were inseparable and did everything together. As they grew older, their friendship only deepened as they supported each other through the ups and downs of life.",
    },
    {
      name: "Amir Atefi",
      title: "Groomsman",
      image: "/images/amir.jpeg",
      relationship:
        "Amir, the best man, and Scott, the groom, have been close since childhood. Growing up in the same neighborhood, Amir and Scott were inseparable and did everything together. As they grew older, their friendship only deepened as they supported each other through the ups and downs of life.",
    },
    // Add more groomsmen members here
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle} - Wedding Party</title>
      </Head>
      <div className={styles.weddingPartyWrapper}>
        <div className={styles.partyGroups}>
          <div className={`${styles.partyGroup} ${styles.bridalParty}`}>
            {bridalPartyMembers.map((member, index) => (
              <MemberDetails member={member} key={index} />
            ))}
          </div>
          <div className={`${styles.partyGroup} ${styles.groomsmen}`}>
            {groomsmenMembers.map((member, index) => (
              <MemberDetails member={member} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function MemberDetails({ member }) {
  return (
    <div className={styles.memberWrapper}>
      <div className={styles.memberImageContainer}>
        <Image
          src={member.image}
          alt={member.name}
          layout="fill" // This will fill the container with the image
          objectFit="cover" // This will cover the area with the image
        />
      </div>
      <h3 className={styles.memberName}>{member.name}</h3>
      <p className={styles.memberTitle}>{member.title}</p>
      {member.relationship && (
        <p className={styles.memberRelationship}>{member.relationship}</p>
      )}
    </div>
  );
}
