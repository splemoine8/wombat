import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/index.module.css';
import { useState, useEffect } from 'react';


export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  function calculateTimeLeft() {
    const targetDate = new Date('November 28, 2024');
    const now = new Date();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
          <div className={styles.wrapper}>
            <Image
              src="/images/ravello.jpeg"
              alt="Welcome"
              className={styles.coverphoto1}
              width={4032}
              height={3024}
            />
          </div>
          <div className={styles.content}>
            <p class="py-6 text-zinc-600 font-adios text-4xl font-normal leading-6 tracking-[0.3px] normal-case">Please join us for our wedding celebration on</p>
            <h3 class="py-6 text-zinc-600 font-futuraMedium text-4xl leading-6 font-normal tracking-[3px] normal-case">November 28, 2024</h3>
            <h3 class="py-6 text-zinc-600 font-futuraMedium text-xl leading-6 font-normal tracking-[3px]">Sydney, Australia</h3>
            <div class="py-6 text-zinc-600 font-futuraMedium text-xl leading-6 font-normal tracking-[3px]">
              {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
            </div>
            <div className={styles.Buttons}>
              <Link className={styles.Button} href="/rsvp">RSVP</Link>
            </div>
            <h3 class="py-6 text-zinc-600 font-futuraMedium text-xl leading-6 font-normal tracking-[3px]">#MadForScott</h3>
            <div class="mb-14"></div>
            <div className={styles.wrapper}>
              <Image
                src="/images/smalldivider.png"
                alt="Small Graphic"
                className={styles.palm}
                width={278} // Adjust this value according to the original width of the image
                height={278} // Adjust this value according to the original height of the image
              />
            </div>
            <h2 className={styles.ourStory}>OUR STORY</h2>
            <div className={styles.storyText}>
              <div className={styles.storyText}>
                <p>
                  Maddy and Scott met at Manning Bar at the University of Sydney campus in Australia.
                  Maddy was studying abroad during her final year at UC Santa Cruz, and Scott had just
                  started his Masters program at the university. They were introduced by a mutual friend
                  and discovered they both happened to be from San Diego.
                </p>
                <p>
                  Despite their initial intentions to meet people from outside of California, Maddy and
                  Scott quickly became best friends. Over time, their friendship blossomed into romance,
                  creating an inseparable bond that continued to grow stronger as they spent more time together.
                </p>
                <p>
                  As they embark on this new journey, Maddy and Scott are excited to celebrate their love
                  with friends and family, and they can't wait to share their special day with all those
                  who have supported them throughout the years.
                </p>
              </div>
            </div>
            <div class="mb-10"></div>
            <div className={styles.wrapper}>
              <Image
                src="/images/smalldivider.png"
                alt="Small Graphic"
                className={styles.palm}
                width={278} // Adjust this value according to the original width of the image
                height={278} // Adjust this value according to the original height of the image
              />
            </div>
            <h2 className={styles.ourStory}>THE PROPOSAL</h2>
            <div className={styles.storyText}>
              <div className={styles.storyText}>
                <p>
                  Maddy and Scott met at Manning Bar at the University of Sydney campus in Australia.
                  Maddy was studying abroad during her final year at UC Santa Cruz, and Scott had just
                  started his Masters program at the university. They were introduced by a mutual friend
                  and discovered they both happened to be from San Diego.
                </p>
                <p>
                  Despite their initial intentions to meet people from outside of California, Maddy and
                  Scott quickly became best friends. Over time, their friendship blossomed into romance,
                  creating an inseparable bond that continued to grow stronger as they spent more time together.
                </p>
                <p>
                  As they embark on this new journey, Maddy and Scott are excited to celebrate their love
                  with friends and family, and they can't wait to share their special day with all those
                  who have supported them throughout the years.
                </p>
              </div>
            </div>
            <div class="mb-14"></div>
            <div className={styles.wrapper}>
              <Image
                src="/images/proposal.jpeg"
                alt="Welcome"
                className={styles.coverphoto}
                layout="responsive"
                width={1440}
                height={1880}
              />
            </div>
          </div>
      </Layout>
    </>
  );
}
