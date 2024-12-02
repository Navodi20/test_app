import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; 

const DinnerMenu = () => {
  const dinnerItems = [
    { id: 1, name: 'Fried Rice', img: '/images/Friedrice.jpg', slug: 'fried-rice' },
    { id: 2, name: 'Hoppers', img: '/images/hoppers.jpg', slug: 'hoppers' },
    { id: 3, name: 'Noodles', img: '/images/ndls.jpg', slug: 'noodles' },
    { id: 4, name: 'String Hoppers', img: '/images/Stringhoppers.jpg', slug: 'string-hoppers' },
    { id: 5, name: 'Spaghetti', img: '/images/spaghetti.jpg', slug: 'spaghetti' },
  ];

  return (
    <div className={styles.container}>
      <h1>Dinner</h1>
      <p>
        As the sun sets, join us for an enchanting dinner experience that elevates your evening with a symphony of flavors. 
        Our dinner menu is thoughtfully crafted to showcase a delightful array of dishes, each inspired by seasonal ingredients 
        and culinary traditions from around the world.
      </p>
      <p>
        Start your culinary journey with our delectable appetizers, featuring everything from savory bruschetta topped with fresh 
        basil to rich, creamy soups that warm the soul. As you move to the main course, indulge in a selection of expertly prepared 
        dishes, including tender grilled steaks cooked to perfection, succulent seafood options that highlight the ocean&apos;s bounty, 
        and vibrant vegetarian creations that celebrate the best of local produce.
      </p>
      <p>
        Each dish is paired with a carefully curated selection of sides, designed to complement and enhance the main flavors on your plate. 
        Don&apos;t miss our house-made sauces and dressings that add the perfect finishing touch to your meal.
      </p>
      <p>
        Whether you&apos;re celebrating a special occasion or enjoying a casual dinner with loved ones, our dinner menu promises a memorable 
        dining experience that nourishes both the body and the soul. Join us as we create unforgettable moments around the table, filled with 
        good food and great company.
      </p>
      <hr className={styles.sectionDivider} />

      <div className={styles.menuGrid}>
        {dinnerItems.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <Link href={`/Menu/Dinner/${item.slug}`}>
              <Image 
                src={item.img} 
                alt={`Image of ${item.name}`} 
                width={200} 
                height={150} 
                className={styles.menuImage}
              />
              <h3 className={styles.menuTitle}>{item.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DinnerMenu;
