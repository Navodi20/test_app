import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Import the CSS file

const LunchMenu = () => {
  const Items = [
    { id: 1, name: 'Chicken Friedrice', img: '/images/chicken.jpg', slug: 'chicken-friedrice' },
    { id: 3, name: 'Egg Friedrice', img: '/images/omlet.jpg', slug: 'egg-friedrice' },
    { id: 4, name: 'Rice and Curry', img: '/images/rice.jpg', slug: 'rice-and-curry' },
    { id: 5, name: 'Thai rice', img: '/images/thai.jpg', slug: 'thai-rice' },
  ];

  return (
    <div className={styles.container}>
      <h1>Lunch</h1>
      <p>PTake a break from your day and savor a delightful lunch experience that refreshes and revitalizes. Our lunch menu is designed with a perfect balance of flavors and textures, offering a variety of dishes to satisfy any midday craving.

      Start with our appetizing starters, featuring fresh salads bursting with seasonal ingredients and vibrant dressings, or enjoy our hearty sandwiches made with artisanal bread and premium fillings that are both comforting and satisfying. For a lighter option, our grain bowls are a fantastic choice, combining wholesome grains with colorful vegetables and proteins, all topped with our house-made sauces for an extra kick of flavor.

      As you explore the main courses, indulge in our signature dishes, which showcase the best of culinary creativity. From savory pasta dishes that evoke the essence of Italian cuisine to flavorful stir-fries that bring a taste of the East, every bite promises to transport you to different culinary landscapes.

      Whether you're dining solo or sharing a meal with colleagues and friends, our lunch offerings are perfect for a quick bite or a leisurely afternoon meal. Join us and let our inviting atmosphere and delicious food turn your lunch break into a cherished moment of the day!</p>
      <hr className={styles.sectionDivider} />

      <div className={styles.menuGrid}>
        {Items.map(Lunch => (
          <div key={Lunch.id} className={styles.menuItem}>
            <Link href={`/Menu/Lunch/${Lunch.slug}`}>
              <Image src={Lunch.img} alt={Lunch.name} width={200} height={150} />
              <h3 className={styles.menuTitle}>{Lunch.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LunchMenu;
