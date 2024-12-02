import React from 'react';
import Image from 'next/image';
import styles from '../../app/About/page.module.css';

function Page() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.aboutIntro}>
        <h1><center>About Our Restaurant</center></h1>
        <p>Our story began in a quaint kitchen...</p>
        <Image
          className={styles.sameSizeImage}
          src="/images/intro1.jpg"
          alt="Overview Image"
          width={500}
          height={300}
        />
        <Image
          className={styles.sameSizeImage}
          src="/images/intro2.jpeg"
          alt="Overview Image"
          width={500}
          height={300}
        />
        <Image
          className={styles.sameSizeImage}
          src="/images/intro.jpg"
          alt="Overview Image"
          width={500}
          height={300}
        />
        <Image
          className={styles.sameSizeImage}
          src="/images/intro3.jpg"
          alt="Overview Image"
          width={500}
          height={300}
        />
        <p>As we continue to grow, our commitment remains the same...</p>
      </section>
      
      <hr className={styles.sectionDivider} />

      <section>
        <div>
          <center><h1>Our Team</h1></center>
          <p>At our team is the heart and soul...</p>
          <center>
            <Image
              src="/images/chef 1.webp"
              alt="Chef"
              width={300}
              height={300}
              className="chef-image"
            />
            <h2>Chef Alexander Grant - Head Chef</h2>
          </center>
          <p>With over 20 years of experience...</p>
        </div>
      </section>

      <section>
        <div>
          <center><h2>Core Staff</h2></center>
          <Image
            className={styles.sameSizeImage1}
            src="/images/chef 2.webp"
            alt="Core Staff"
            width={300}
            height={300}
          />
          <Image
            className={styles.sameSizeImage1}
            src="/images/chef 3.jpg"
            alt="Core Staff"
            width={300}
            height={300}
          />
          <Image
            className={styles.sameSizeImage1}
            src="/images/chef 4.jpg"
            alt="Core Staff"
            width={300}
            height={300}
          />
          <Image
            className={styles.sameSizeImage1}
            src="/images/chef 5.jpg"
            alt="Core Staff"
            width={300}
            height={300}
          />
        </div>
      </section>
      <hr className={styles.sectionDivider} />
    </div>
  );
}

export default Page;
