'use client'
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const lunchItems = [
  { id: 1, name: 'Chicken Friedrice', img: '/images/chicken.jpg', slug: 'chicken-friedrice', description: 'A delicious blend of fried rice with chicken and vegetables.' },
  { id: 2, name: 'Egg Friedrice', img: '/images/omlet.jpg', slug: 'egg-friedrice', description: 'Fluffy fried rice cooked with eggs and spices.' },
  { id: 3, name: 'Rice and Curry', img: '/images/rice.jpg', slug: 'rice-and-curry', description: 'Steamed rice served with flavorful curry of your choice.' },
  { id: 4, name: 'Thai Rice', img: '/images/thai.jpg', slug: 'thai-rice', description: 'Aromatic rice with Thai spices and herbs.' },
];

const LunchItemPage = ({ params }) => {
  const { slug } = params;

  const Lunch = lunchItems.find((item) => lunchItems.slug === slug);

  if (!Lunch) {
    return <p>Lunch item not found!</p>;
  }

  return (
    <div className={styles.container}>
      <h1>{Lunch.name}</h1>
      <p>{Lunch.description}</p>

      <h2>Place Your Order</h2>
      <form className={styles.orderForm}>
        <label>
          Quantity:
          <input type="number" className={styles.numberInput} name="quantity" min="1" defaultValue="1" />
        </label>
        <button type="submit" className={styles.orderButton}>Order Now</button>
      </form>

      <Link href="/Menu/Lunch" className={styles.backLink}>
        Back to Lunch Menu
      </Link>
    </div>
  );
};

export default LunchItemPage;
