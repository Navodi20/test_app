import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Import the CSS file

const DinnerMenu = () => {
  const breakfastItems = [
    { id: 1, name: 'Fried Rice', img: '/images/Friedrice.jpg', slug: 'Fried Rice' },
    { id: 2, name: 'Hoppers', img: '/images/hoppers.jpg', slug: 'Hoppers' },
    { id: 3, name: 'Noodles', img: '/images/ndls.jpg', slug: 'Noodles' },
    { id: 4, name: 'String Hoppers', img: '/images/Stringhoppers.jpg', slug: 'String Hoppers' },
    { id: 4, name: 'Spaghetti', img: '/images/spaghetti.jpg', slug: 'Spaghetti' },
  ];

  return (
    <div className={styles.container}>
      <h1>Dinner</h1>
      <p>As the sun sets, join us for an enchanting dinner experience that elevates your evening with a symphony of flavors. Our dinner menu is thoughtfully crafted to showcase a delightful array of dishes, each inspired by seasonal ingredients and culinary traditions from around the world.

      Start your culinary journey with our delectable appetizers, featuring everything from savory bruschetta topped with fresh basil to rich, creamy soups that warm the soul. As you move to the main course, indulge in a selection of expertly prepared dishes, including tender grilled steaks cooked to perfection, succulent seafood options that highlight the ocean's bounty, and vibrant vegetarian creations that celebrate the best of local produce.

      Each dish is paired with a carefully curated selection of sides, designed to complement and enhance the main flavors on your plate. Don't miss our house-made sauces and dressings that add the perfect finishing touch to your meal.

      To complete your evening, we invite you to explore our exquisite dessert offerings, where sweet indulgence awaits.

      Whether you're celebrating a special occasion or enjoying a casual dinner with loved ones, our dinner menu promises a memorable dining experience that nourishes both the body and the soul. Join us as we create unforgettable moments around the table, filled with good food and great company.
      </p>
      <hr className={styles.sectionDivider} />

      <div className={styles.menuGrid}>
        {breakfastItems.map(Dinner => (
          <div key={Dinner.id} className={styles.menuItem}>
            <Link href={`/Menu/Dinner/${Dinner.slug}`}>
              <Image src={Dinner.img} alt={Dinner.name} width={200} height={150} />
              <h3 className={styles.menuTitle}>{Dinner.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DinnerMenu;
