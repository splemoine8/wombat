import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navigation from './navigation'; // Add this line at the top of your Layout component, assuming the Navigation.js is in the same folder.
import Footer from './footer';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <div className={`${styles.container} ${styles.flexContainer}`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <div className={styles.headerBox}>
                            <Image
                                priority
                                src="/images/ebg2.jpeg"
                                className={styles.headerImage}
                                height={601}
                                width={1601}
                                alt=""
                            />
                            <div className={styles.titleBox}>
                                <h1 className={styles.headerText}>Madelyn Metsch</h1>
                                <h2 className={styles.andText}>and</h2>
                                <h1 className={styles.headerText}>Scott Lemoine</h1>
                            </div>
                        </div>
                        <Navigation />
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main className={styles.flexGrow}>{children}</main>
            <Footer />
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}
