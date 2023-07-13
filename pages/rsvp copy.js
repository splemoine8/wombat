// rsvp.js
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import RSVPForm from '../components/RSVPForm';

export default function rsvp() {
  const apiURL = 'https://script.google.com/macros/s/AKfycbwyko3Cqt7DVLFPmzVGQdr57tPYbzuMYd8i6pKXmOsUmBmIaHHYJ5yysBoBIMRJ5V7L/exec'; // Replace with your actual API URL

  return (
    <Layout>
      <Head>
        <title>RSVP</title>
      </Head>
      <h1>RSVP</h1>
      <RSVPForm apiURL={apiURL} />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
