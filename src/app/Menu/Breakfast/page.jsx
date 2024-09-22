import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const BreakfastMenu = () => {
  const breakfastItems = [
    { id: 1, name: 'Omelette', slug: 'Omlette', img: '/images/omlet.jpg' },
    { id: 2, name: 'Noodles', slug: 'noodles' , img: '/images/noodles.jpg', slug: 'noodles' },
    { id: 3, name: 'Spaghetti', slug: 'spaghetti', img: '/images/spaghetti.jpg', slug: 'spaghetti' },
    { id: 4, name: 'hoppers', slug: 'hoppers' , img: '/images/hoppers.jpg', slug: 'hoppers' },
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
        {breakfastItems.map(Breakfast=> (
          <div key={Breakfast.item} className={styles.menuItem}>
            <Link href={`/Menu/Breakfast/${Breakfast.slug}`}>
              <Image src={Breakfast.img} alt={Breakfast.name} width={200} height={150} />
              <h3 className={styles.menuTitle}>{Breakfast.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakfastMenu;
