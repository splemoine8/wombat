import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.css';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You - Maddy & Scott</title>
      </Head>
      <main className="min-h-screen bg-white">
        <div className={styles.wrapper}>
          <Image
            src="/images/thanks.jpg"
            alt="Maddy and Scott Wedding"
            className={styles.coverphoto1}
            width={4032}
            height={3024}
          />
        </div>
        <div className={styles.content}>
          <h1 className="py-6 text-zinc-600 font-futuraMedium text-4xl leading-6 font-normal tracking-[3px] normal-case">
            Thank You!
          </h1>
          <div className={styles.storyText}>
            <p>
              We are incredibly grateful to have shared our wedding day with all of you. Your presence, 
              love, and support made our celebration truly magical. From the bottom of our hearts, 
              thank you for being part of this special moment in our lives.
            </p>
            <p>
              We look forward to sharing more memories with you in the years to come. We'll be sharing our wedding photos soon. Stay tuned!
            </p>
          </div>
        </div>
      </main>
    </>
  );
} 