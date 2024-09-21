'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'; // Import the updated CSS file

const Items = [
  { id: 1, name: 'Banana Smoothie', img: '/images/banana.jpg', slug: 'banana-smoothie', description: 'A creamy blend of fresh bananas and milk.' },
  { id: 2, name: 'Faluda', img: '/images/faluda.jpg', slug: 'faluda', description: 'A refreshing and sweet drink made with vermicelli, ice cream, and rose syrup.' },
  { id: 3, name: 'Chocolate Milkshakes', img: '/images/milkshake.jpg', slug: 'chocolate-milkshakes', description: 'Rich and creamy chocolate milkshake to satisfy your sweet tooth.' },
  { id: 4, name: 'Mojito', img: '/images/mojito.jpg', slug: 'mojito', description: 'A classic mojito with lime, mint, and soda water.' },
  { id: 5, name: 'Orange Juice', img: '/images/orange.jpg', slug: 'orange-juice', description: 'Freshly squeezed orange juice, perfect for a sunny day.' },
];

const BeverageOrderPage = ({ params }) => {
  const { slug } = params;

  // Find the beverage based on the slug
  const Beverages = Items.find((Beverages) => Items.slug === slug);

  if (!Beverages) {
    return <p>Beverage not found!</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{Beverages.name}</h1>
      <p>{Beverages.description}</p>

      <h2>Place Your Order</h2>
      <form className={styles.orderForm}>
        <label>
          Quantity:
          <input type="number" className={styles.numberInput} name="quantity" min="1" defaultValue="1" />
        </label>
        <button type="submit" className={styles.orderButton}>Order Now</button>
      </form>

      <Link href="/Menu/Beverages" className={styles.backLink}>Back to Beverages Menu
      </Link>
    </div>
  );
};

export default BeverageOrderPage;
