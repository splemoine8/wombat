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
    },
    {
      name: "Lillian Metsch",
      title: "Bridesmaid",
      image: "/images/lillian.jpeg",
    },
    {
      name: "Celeste McLaughlin",
      title: "Bridesmaid",
      image: "/images/celeste.jpeg",
    },
    {
      name: "McKenzie Stevens",
      title: "Bridesmaid",
      image: "/images/mckenzie.jpeg",
    },
    {
      name: "Shay Marcon",
      title: "Bridesmaid",
      image: "/images/shay.jpeg",
    },
    {
      name: "Susan Metsch",
      title: "Mother of the Bride",
      image: "/images/susan.jpeg",
    },
    {
      name: "Paul Metsch",
      title: "Father of the Bride",
      image: "/images/paul.jpeg",
    },
  ];

  const groomsmen = [
    {
      name: "Amir Atefi",
      title: "Co-Best Man",
      image: "/images/amir.jpeg",
    },
    {
      name: "AJ Melts",
      title: "Co-Best Man",
      image: "/images/aj.jpeg",
    },
    {
      name: "Danny Roth",
      title: "Groomsman",
      image: "/images/danny.jpeg",
    },
    {
      name: "Ryan Andrade",
      title: "Groomsman",
      image: "/images/ryanA.jpeg",
    },
    {
      name: "Jacob Eurich",
      title: "Groomsman",
      image: "/images/jacob.jpeg",
    },
    {
      name: "Ryan Marcon",
      title: "Groomsman",
      image: "/images/ryanM.jpeg",
    },
    {
      name: "Sandy Lemoine",
      title: "Mother of the Groom",
      image: "/images/sandy.jpeg",
    },
    {
      name: "Chuck Lemoine",
      title: "Father of the Groom",
      image: "/images/chuck.jpeg",
    },
  ];

  const officiant = {
    name: "Juan Schmidt",
    title: "Officiant",
    image: "/images/juan.jpeg",
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.container}>
        <h1 className={styles.title}>Wedding Party</h1>
        <div className={styles.grid}>
          <div className={styles.column}>
            {bridalPartyMembers.map((member, index) => (
              <div key={index} className={styles.member}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className={styles.image}
                />
                <p className={styles.name}>{member.name}</p>
                <p className={styles.title}>{member.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.column}>
            {groomsmen.map((groomsman, index) => (
              <div key={index} className={styles.member}>
                <Image
                  src={groomsman.image}
                  alt={groomsman.name}
                  width={150}
                  height={150}
                  className={styles.image}
                />
                <p className={styles.name}>{groomsman.name}</p>
                <p className={styles.title}>{groomsman.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.officiantSection}>
          <div className={styles.officiant}>
            <Image
              src={officiant.image}
              alt={officiant.name}
              width={150}
              height={150}
              className={styles.image}
            />
            <p className={styles.name}>{officiant.name}</p>
            <p className={styles.title}>{officiant.title}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
