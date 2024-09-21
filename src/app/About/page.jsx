import React from 'react';
import styles from '../../app/About/page.module.css';

function Page() {
  return (
    <div className={styles.aboutContainer}> {/* Use CSS Module here */}
      <section className={styles.aboutIntro}>
        <h1><center>About Our Restaurant</center></h1>
        <p>Our story began in a quaint kitchen, where a shared passion for exceptional cuisine first took root. What started as a humble endeavor quickly blossomed into a journey of culinary discovery. From the first bite, it was clear that our dedication to quality and innovation would set us apart. Driven by a love for bringing people together through unforgettable meals, we embarked on a mission to create a dining experience that combines tradition with modern flair. Our menu reflects a careful selection of ingredients and flavors from around the world, prepared with artistry and precision.</p>
        <img className={styles.sameSizeImage} src="/images/intro1.jpg" alt="Overview Image"/>
        <img className={styles.sameSizeImage} src="/images/intro2.jpeg" alt="Overview Image" />
        <img className={styles.sameSizeImage} src="/images/intro.jpg" alt="Overview Image" />
        <img className={styles.sameSizeImage} src="/images/intro3.jpg" alt="Overview Image" />
        <p>As we continue to grow, our commitment remains the same: to offer a warm and welcoming atmosphere where every meal is a celebration of taste and togetherness. Join us as we write the next chapter of our story, one delicious dish at a time.</p>
      </section>
      
      <hr className={styles.sectionDivider} />

      <section>
      <div>
        <center><h1>Our Team</h1></center>
        <p>At our team is the heart and soul of everything we do. Behind every dish, there’s a dedicated team of passionate chefs and culinary experts, each bringing their unique talents and creativity to the table. With years of experience and a shared love for innovative cuisine, our team works together to craft meals that inspire and delight. From our head chef, who has spent decades mastering the art of flavor, to our kitchen staff who ensure every plate is prepared to perfection, we take pride in every dish we serve.

        Our team’s commitment to excellence goes beyond the kitchen. With a focus on quality ingredients, expert techniques, and a warm, welcoming environment, we work tirelessly to make each visit to a memorable dining experience. We invite you to meet the faces behind the flavors, and experience firsthand the dedication and passion that sets us apart.</p>
        <center><img src="/images/chef 1.webp" alt="Chef" className="chef-image" />
          <h2>Chef Alexander Grant - Head Chef</h2></center>
          <p>With over 20 years of experience, Chef Alexander Grant is the visionary behind the culinary success. Trained at top culinary institutions, he blends traditional techniques with modern innovation, crafting dishes that are both visually striking and flavorful. Chef Alexander's focus on fresh, local ingredients and his passion for creativity define every plate. As a mentor and leader, he fosters a collaborative kitchen, ensuring excellence in every meal. Under his guidance, Restaurant has become a destination for exceptional dining experiences</p>
      </div>
    </section>

      
      <section>
        <div>
          <center><h2>Core Staff</h2></center>
          <img className={styles.sameSizeImage1} src="/images/chef 2.webp" alt="Overview Image"/>
          <img className={styles.sameSizeImage1} src="/images/chef 3.jpg" alt="Overview Image" />
          <img className={styles.sameSizeImage1} src="/images/chef 4.jpg" alt="Overview Image" />
          <img className={styles.sameSizeImage1} src="/images/chef 5.jpg" alt="Overview Image" />
        </div>
      </section>
      <hr className={styles.sectionDivider} />
    </div>
  );
}

export default Page;
