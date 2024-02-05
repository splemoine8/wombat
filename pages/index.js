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
          <p class="py-3 lg:py-6 md:py-6 text-zinc-600 font-adios text-4xl font-normal leading-6 tracking-[0.3px] normal-case">Please join us for our wedding celebration on</p>
          <h3 class="py-3 lg:py-6 md:py-6 text-zinc-600 font-futuraMedium lg:text-3xl md:text-3xl text-base leading-6 font-normal tracking-[3px] normal-case">Thursday, November 28, 2024</h3>
          <h3 class="py-3 lg:py-6 md:py-6 text-zinc-600 font-futuraMedium text-xl leading-6 font-normal tracking-[3px]">Sydney, Australia</h3>
          <div class="py-3 lg:py-6 md:py-6 text-zinc-600 font-futuraMedium text-xl leading-6 font-normal tracking-[3px] mx-5">
            {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
          </div>
          <div className={`${styles.Buttons} py-3`}>
            <Link className={styles.Button} href="/rsvp">RSVP</Link>
          </div>
          {/* <h3 class="py-6 text-zinc-600 font-futuraMedium text-xl leading-6 font-normal tracking-[3px]">#MadForScott</h3> */}
          <div class="mb-8"></div>
          <div className={styles.wrapper}>
            <Image
              src="/images/smalldivider.png"
              alt="Small Graphic"
              className={styles.palm}
              width={278} // Adjust this value according to the original width of the image
              height={278} // Adjust this value according to the original height of the image
            />
          </div>
          <div class="mb-5"></div>
          <h2 className={styles.ourStory}>OUR STORY</h2>
          <div className={styles.storyText}>
            <div className={`${styles.storyText} mx-10 `}>
              <p>
                Maddy and Scott met at Manning Bar at the University of Sydney campus in Australia.
                Maddy was studying abroad during her final year at UC Santa Cruz, and Scott had just
                started his Masters program at the university. They were introduced by a mutual friend, Juan Schmidt,
                and discovered they both happened to be from San Diego.
              </p>
              <br />
              <p>
                Despite their original intentions to meet people from outside of California, Maddy and
                Scott quickly became best friends. Over time, their friendship blossomed into romance,
                creating an inseparable bond that continued to grow stronger as they spent more time together in a new city.
              </p>
              <br />
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
            <div class="mb-5"></div>
          </div>
          <h2 className={styles.ourStory}>THE PROPOSAL</h2>
          <div className={styles.storyText}>
          <div className={`${styles.storyText} mx-10 `}>
              <p>
                Maddy and Scott's love story took an unexpected turn during their European adventures. 
                While traveling through Croatia in the summer of 2022, Scott hatched a plan that would forever change the course of their lives. He decided to pop the question on the picturesque island of Hvar, a place known for its timeless beauty and serene atmosphere.
              </p>
              <br />
              <p>
                On one of their last days in Hvar, Scott suggested that they dine at a Michelin-starred restaurant right by the water's edge, promising her an unforgettable evening. Little did she know, he had bigger plans in place. A sleek black car arrived to pick them up, taking them in the opposite direction of the coastline and towards the Hvar mountainside.
              </p>
              <br />
              <p>
                When they arrived they were greeted by their waiter - the only waiter at a one table resturant on the mountainsde. Scott continued to play the dinner off as just another surprise date, and Maddy bought into it wholeheartedly, her excitement growing with each passing moment. The evening unfolded with a seven-course meal perfectly paired with a collection of Croatian wines, and as the sun began its descent, the stage was set for Scott's grand plan.
              </p>
              <br />
              <p>
                Seizing the perfect moment, the waiter offered to capture a photograph of the couple. As Maddy turned around for the snapshot, her heart skipped a beat as she found Scott down on one knee, holding a sparkling ring in his hand. Under the romantic Croatian sky, with the gentle breeze of Hvar surrounding them, Scott asked Maddy the most important question of their lives. Overwhelmed with joy, she said yes, and they celebrated their love late into the night, knowing that their journey together had just taken a beautiful and unforgettable turn.
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
