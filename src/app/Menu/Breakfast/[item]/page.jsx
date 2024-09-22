'use client'
import Link from 'next/link';
import styles from './page.module.css'; 

const breakfastItems = [
  { id: 1, name: 'Omelette', slug: 'Omlette', description: 'A fluffy omelette filled with vegetables and cheese, served with toast.' },
  { id: 2, name: 'Noodles', slug: 'Noodles', description: 'Savory stir-fried noodles with fresh veggies and eggs.' },
  { id: 3, name: 'Spaghetti', slug: 'Spaghetti', description: 'Classic spaghetti served with tomato sauce and meatballs.' },
  { id: 4, name: 'Hoppers', slug: 'Hoppers', description: 'A traditional dish made with rice flour and coconut milk, served with spicy sambal.' },
];

const BreakfastOrderPage = ({ params }) => {
  const { slug } = params;
  
    
    const item = breakfastItems.find((item) => breakfastItems.slug === slug);
  
    if (!item) {
      return <p>Food not found!</p>;
    }
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{item.name}</h1>
        <p>{item.description}</p>
  
        <h2>Place Your Order</h2>
        <form className={styles.orderForm}>
          <label>
            Quantity:
            <input type="number" className={styles.numberInput} name="quantity" min="1" defaultValue="1" />
          </label>
          <button type="submit" className={styles.orderButton}>Order Now</button>
        </form>
  
        <Link href="/Menu/Breakfast" className={styles.backLink}>Back to Breakfast Menu
        </Link>
      </div>
    );
  };


export default BreakfastOrderPage;
