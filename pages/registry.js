import React, { useEffect } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/events.module.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Registry() {
  useEffect(() => {
    // Dynamically load the Zola script
    const script = document.createElement("script");
    script.src = "https://widget.zola.com/js/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle} - Registry</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
        </Head>
        <div className={styles.registry}>
          <a
            className="zola-registry-embed"
            href="https://www.zola.com/wedding/scottandmaddy2024"
            data-registry-key="scottandmaddy2024"
          >
            Our Zola Wedding Registry
          </a>
        </div>
      </Layout>
    </>
  );
}
