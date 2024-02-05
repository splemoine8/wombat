import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/weddingParty.module.css";

export default function WeddingParty() {
  const bridalPartyMembers = [
    {
      name: "Jocelyn Dagostino",
      title: "Maid of Honor",
      image: "/images/jocelynnew.jpeg",
      // relationship:
      //   "Jocelyn, Maddy's older sister, has been a pivotal figure in shaping her into the woman she is today. Their shared childhood is filled with enduring memories, particularly the idyllic summers at the family cabin and their collegiate years at the same university. Jocelyn is much more than a sibling to Maddy; she’s her alter ego and dearest friend.",
    },
    {
      name: "Celeste McLaughlin",
      title: "Bridesmaid",
      image: "/images/celeste.jpeg",
      // relationship:
      //   "Maddy and Celeste's friendship, which began at the age of 10, didn’t start out perfectly. It took a common adversary—humorously enough—to seal their bond. From that point forward, Celeste has been a steadfast presence in Maddy’s life, providing support through every significant milestone. Maddy's gratitude for their enduring friendship is immeasurable.",
    },
    {
      name: "Tatiana Ward",
      title: "Bridesmaid",
      image: "/images/tati.jpeg",
      // relationship:
      //   "Although Maddy and Tatiana were high school acquaintances, it wasn't until their college years that their friendship truly blossomed. As teenagers, they moved in different circles, but adulthood has thankfully reunited them. Maddy cherishes Tatiana's companionship and cannot fathom her life without such a cherished friend.",
    },
    {
      name: "Emily Barbosa",
      title: "Bridesmaid",
      image: "/images/emily.jpeg",
      // relationship:
      //   "Maddy’s friendship with McKenzie started during their sophomore year of high school, with cheerleading and dance as their common ground. The pair share an infectious sense of humor, and Maddy finds herself in constant laughter when McKenzie is around.",
    },
    {
      name: "McKenzie Stevens",
      title: "Bridesmaid",
      image: "/images/kenzie.jpeg",
      // relationship:
      //   "During their sophomore year in high school, Maddy forged a bond with Emily on the cheer squad. Emily, serving as Maddy’s base, supported her both literally and figuratively. Since then, Emily has remained a loyal confidante, providing unwavering support for which Maddy is deeply appreciative.",
    },
    {
      name: "Shay Marcon",
      title: "Bridesmaid",
      image: "/images/shay.jpeg",
      // relationship:
      //   "The friendship between Maddy and Shay blossomed in 2016, instigated by Maddy’s soon to be husband, Scott. They connected instantly over shared interests and have been like two peas in a pod from their serendipitous meeting onward.",
    },
    {
      name: "Tyler Tripp",
      title: "Bridesmaid",
      image: "/images/tyler.jpeg",
      // relationship:
      //   "Maddy met Tyler on the first day of their graduate program in the fall quarter. There's nothing like the rigors of a master’s level social work program to forge a bond! Finding friends as an adult can be daunting, but Tyler made it seamless. Maddy is immensely thankful to have her as a steadfast ally.",
    },
    {
      name: "Sandy Lemoine",
      title: "Mother of the Groom",
      image: "/images/sandy.jpg", // Replace with the actual image path when available
    },
    {
      name: "Susan Metsch",
      title: "Mother of the Bride",
      image: "/images/susan.jpg", // Replace with the actual image path when available
    },
    // Add more bridal party members here
  ];

  const groomsmenMembers = [
    {
      name: "Amir Atefi",
      title: "Co-Best Man",
      image: "/images/amirnew.jpg",
      // relationship:
      //   "Amir has been one of Scott’s closest friends since he first moved to San Diego and has been instrumental in his life ever since. Bonded by their love of sports (RIP San Diego Chargers), video games, and movies, their friendship was formed over shared memories and adventures. Scott stood as Amir’s best man at his wedding in Ravello, Italy, and they have been cornerstones in each other’s lives.",
    },
    {
      name: "AJ Mells",
      title: "Co-Best Man",
      image: "/images/ajnew.jpeg",
      // relationship:
      //   "AJ and Scott have been best friends since they were kids and have played significant roles in each other's lives. Their friendship began in the hallways of school and on the tennis courts, extending through their years at UCSB, where they lived and partied together, and somehow managed to graduate. AJ’s support and encouragement have been pivotal in shaping Scott, both professionally and personally. He is both a role model and a lifelong friend, having been a positive influence on Scott’s life.",
    },
    {
      name: "Danny Roth",
      title: "Groomsman",
      image: "/images/dannynew.jpeg",
      // relationship:
      //   "Danny and Scott's friendship is a wild journey filled with adventures and unforgettable memories. From skating through their neighborhood to endless summer surfing, they've shared some of the best times together. As Scott steps into this new chapter of his life, Danny is right there by his side, not just as a groomsman but as a lifelong brother and friend.",
    },
    {
      name: "Ryan Andrade",
      title: "Groomsman",
      image: "/images/ryana.jpeg",
      // relationship:
      //   "Ryan and Scott’s friendship dates back to their college days in Santa Barbara. From their legendary SigEp adventures to music festivals and epic travels, they’ve been best friends through it all. After Scott’s proposal in Croatia, he hot-routed down to Ecuador to stand by Ryan’s side for his incredible wedding.",
    },
    {
      name: "Jacob Eurich",
      title: "Groomsman",
      image: "/images/jacob.jpeg",
      // relationship:
      //   "Jacob and Scott's friendship kicked off with a beer pong game at a UCSB and grew stronger over their shared love for Australia and sustainability. They've sparred in countless games, from house parties to Sydney flats, and bonded over their dedication to making a positive impact on the world. Jacob's achievements in marine biology have always impressed Scott, who sees Jacob not just as a friend but as a brother.",
    },
    {
      name: "Ryan Marcon",
      title: "Groomsman",
      image: "/images/ryanmarcon.jpeg",
      // relationship:
      //   "Even though Ryan and Scott met in college, it wasn’t until after that they became as close as they are today. As the years rolled by, their friendship grew stronger, especially after Shay and Maddy became best friends, intertwining their lives even further. For Scott, Ryan is more than a kook; he's a brother in spirit, always there to bring laughter and energy to every moment they share.",
    },
    {
      name: "Ryan McInerney",
      title: "Groomsman",
      image: "/images/ryanmacnew.jpeg",
      // relationship:
      //   "Scott and Ryan’s friendship began with cracking jokes in Spanish class at UCSB and evolved into into long nights of snappa and trap music. After graduating, their friendship continued with Call of Duty games and EDM livestream watch parties during quarantine, making some of the best memories. Now, with Ryan in Denver, the adventure continues.",
    },
    {
      name: "Chuck Lemoine",
      title: "Father of the Groom",
      image: "/images/chuck.jpg",
      // relationship:
      //   "Scott and Ryan’s friendship began with cracking jokes in Spanish class at UCSB and evolved into into long nights of snappa and trap music. After graduating, their friendship continued with Call of Duty games and EDM livestream watch parties during quarantine, making some of the best memories. Now, with Ryan in Denver, the adventure continues.",
    },
    {
      name: "Paul Metsch",
      title: "Father of the Bride",
      image: "/images/paul.jpg",
      // relationship:
      //   "Scott and Ryan’s friendship began with cracking jokes in Spanish class at UCSB and evolved into into long nights of snappa and trap music. After graduating, their friendship continued with Call of Duty games and EDM livestream watch parties during quarantine, making some of the best memories. Now, with Ryan in Denver, the adventure continues.",
    },
    // {
    //   name: "Kevin Lydon",
    //   title: "Groomsman",
    //   image: "/images/kevin.jpg",
    //   relationship:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula auctor risus sit amet gravida. Donec dapibus dolor ut nunc efficitur, a ornare risus maximus. Sed cursus magna magna, ut vehicula ligula tincidunt et. Duis volutpat eros ac sem semper, at vulputate ante blandit. Suspendisse et magna malesuada, aliquet turpis.",
    // },
    // Add more groomsmen members here
  ];
  const officantMembers = [
    {
      name: "Juan Schmidt",
      title: "Officiant",
      image: "/images/juancropped.jpg",
      // relationship:
      //   "Juan played a crucial role in the lives of Scott and Maddy. He introduced Scott and Maddy during the first few weeks of school and the rest was history. As Scott's best friend, Juan shared countless memories with the couple, becoming an integral part of their journey together.",
    },
  ];

  const parentMembers = [
    {
      name: "Susan Metch",
      title: "Mother of the Bride",
      image: "/images/susan.jpg", // Replace with the actual image path when available
    },
    {
      name: "Paul Metsch",
      title: "Father of the Bride",
      image: "/images/paul.jpg", // Replace with the actual image path when available
    },
    {
      name: "Sandy & Chuck Lemoine",
      title: "Mother & Father of the Groom",
      image: "/images/lemoines.jpg", // Replace with the actual image path when available
    },
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle} - Wedding Party</title>
      </Head>
      <div className={styles.centeredTextStyles}>
      <div className={styles.pageTitle}>
        <div className={styles.lgMarginBottomStyles}>
          <h2 className={styles.eventsHeading}>Wedding Party</h2>
        </div>
        <div className={styles.lgMarginBottomStyles}>
          <div className={styles.smallDivider}></div>
        </div>
      </div>
    </div>
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
        <div className={styles.officiantGroups}>
          <div className={`${styles.partyGroup} ${styles.bridalParty}`}>
            {officantMembers.map((member, index) => (
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
      <br />
      <h3 className={styles.memberName}>{member.name}</h3>
      <p
        className={
          member.title === "Maid of Honor" || member.title === "Co-Best Man"
            ? styles.emphasizedTitle
            : styles.memberTitle
        }
      >
        {member.title}
      </p>
      {/* {member.relationship && (
        <p className={styles.memberRelationship}>{member.relationship}</p>
      )} */}
    </div>
  );
}
