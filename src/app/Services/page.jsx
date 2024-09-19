import React from 'react'
import Head from 'next/head';
import styles from '../../app/Services/page.module.css'; 

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services</title>
      </Head>
      
      <div className={styles.servicesContainer}>
        <h1 className={styles.servicesTitle}>Our Services</h1>
        <p className={styles.servicesDescription}>
          We offer a wide range of culinary services designed to make your dining experience unforgettable.
        </p>

        <div className={styles.serviceList}>
          <div className={styles.serviceItem}>
            <h2 className={styles.serviceTitle}>Catering</h2>
            <p className={styles.serviceDescription}>
              Professional catering services for events of all sizes. Contact Us for more details (Tel - 0112674937)
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h2 className={styles.serviceTitle}>Private Dining</h2>
            <p className={styles.serviceDescription}>
              Exclusive private dining experiences tailored to your needs.  Contact Us for more details (Tel - 0112674947)
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h2 className={styles.serviceTitle}>Event Hosting</h2>
            <p className={styles.serviceDescription}>
              Host your events at our restaurant with personalized service.  Contact Us for more details (Tel - 0112674957)
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h2 className={styles.serviceTitle}>Cooking Classes</h2>
            <p className={styles.serviceDescription}>
              Join our expert chefs for hands-on cooking classes.  Contact Us for more details (Tel - 0112674967)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
