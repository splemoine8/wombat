// components/footer.js
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <img
          src="/images/leavesleft.png"
          alt="Image Left"
          className={styles.footerImageLeft}
        />
        <img
          src="/images/leavesright.png"
          alt="Image Right"
          className={styles.footerImageRight}
        />
      </div>
      <p className={styles.footerText} class="py-5">
        Crafted by Scott with lots of &nbsp;
        <span className={`fa fa-heart fa-beat ${styles.redHeart}`}></span>
        &nbsp; for Maddy
      </p>
    </div>
  );
};

export default Footer;
