import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Import the CSS file

const BeveragesMenu = () => {
  const Items = [
    { id: 1, name: 'Banana Smoothie', img: '/images/banana.jpg', slug: 'Banana Smoothie' },
    { id: 2, name: 'Faluda', img: '/images/faluda.jpg', slug: 'Faluda' },
    { id: 3, name: 'Chocolate Milkshakes', img: '/images/milkshake.jpg', slug: 'Chocolate Milkshakes' },
    { id: 4, name: 'Mojito', img: '/images/mojito.jpg', slug: 'Mojito' },
    { id: 5, name: 'Orange Juice', img: '/images/orange.jpg', slug: 'Orange Juice' },
  ];

  return (
    <div className={styles.container}>
      <h1>Beverages</h1>
      <p>Quench your thirst and elevate your dining experience with our thoughtfully curated selection of beverages. Whether you’re in the mood for a refreshing drink to complement your meal or a cozy beverage to savor on its own, our menu has something for everyone.

      Start with our handcrafted specialty coffees and teas, each brewed to perfection to awaken your senses. Choose from rich espressos, velvety lattes, or soothing herbal teas that offer a moment of calm amidst the hustle and bustle of the day.

      For those seeking something more invigorating, explore our range of fresh juices and smoothies, made from the finest seasonal fruits and vegetables. Each sip is a burst of natural goodness that nourishes and refreshes, perfect for a midday pick-me-up or a light afternoon snack.

      And let’s not forget our selection of cocktails and mocktails, expertly mixed to create delightful flavor combinations that are as beautiful as they are delicious. From classic concoctions to innovative creations, each drink is crafted to enhance your dining experience and make any occasion feel special.

      Join us as we celebrate the art of beverage-making, providing the perfect pairings to complement your meal or a refreshing respite to enjoy with friends. Cheers to good company and great flavors!
     </p>
     <hr className={styles.sectionDivider} /> 
      <div className={styles.menuGrid}>
        {Items.map(Beverages => (
          <div key={Beverages.id} className={styles.menuItem}>
            <Link href={`/menu/Beverages/${Beverages.slug}`}>
              <Image src={Beverages.img} alt={Beverages.name} width={200} height={150} />
              <h3 className={styles.menuTitle}>{Beverages.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeveragesMenu;
