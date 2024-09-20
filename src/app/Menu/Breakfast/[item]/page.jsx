import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Import the CSS file

const BreakfastMenu = () => {
  const breakfastItems = [
    { id: 1, name: 'Omelette', img: '/images/omlet.jpg', slug: 'Omlette' },
    { id: 2, name: 'Noodles', img: '/images/noodles.jpg', slug: 'Noodles' },
    { id: 3, name: 'Spaghetti', img: '/images/spaghetti.jpg', slug: 'Spaghetti' },
    { id: 4, name: 'hoppers', img: '/images/hoppers.jpg', slug: 'Hoppers' },
  ];

  return (
    <div className={styles.container}>
      <h1>Breakfast Menu</h1>
      <p>Wake up to a delicious start with our carefully curated breakfast selection, crafted to energize your day and delight your senses. Our breakfast menu features a range of wholesome and flavorful dishes, made with the freshest ingredients to ensure a nourishing experience.

      Indulge in our hearty classics, like fluffy pancakes drizzled with pure maple syrup, or savor the satisfying crunch of our perfectly toasted avocado toast, topped with ripe tomatoes and a sprinkle of feta. For a protein-packed option, try our signature omelette, filled with a medley of seasonal vegetables and served with a side of golden hash browns.

      If you’re in the mood for something lighter, our yogurt parfaits layered with house-made granola and fresh berries offer a refreshing balance of flavors. And don’t forget to explore our selection of artisanal pastries, baked daily to provide that warm, buttery goodness that pairs perfectly with your morning coffee.

      Whether you’re looking for a quick bite to fuel your morning or a leisurely brunch with friends, our breakfast offerings promise to set a positive tone for the day ahead. Join us as we celebrate the most important meal of the day with delicious creations that cater to every palate!
     </p>
     <hr className={styles.sectionDivider} /> 
      <div className={styles.menuGrid}>
        {breakfastItems.map(item => (
          <div key={item.id} className={styles.menuItem}>
            <Link href={`/menu/breakfast/${item.slug}`}>
              <Image src={item.img} alt={item.name} width={200} height={150} />
              <h3 className={styles.menuTitle}>{item.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakfastMenu;
