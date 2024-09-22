'use client'
import Link from 'next/link';
import styles from './page.module.css'; // Import the updated CSS file

const dinnerItems = [
  { id: 1, name: 'Fried Rice', slug: 'fried-rice', description: 'A flavorful mix of rice with vegetables and spices.' },
  { id: 2, name: 'Hoppers', slug: 'hoppers', description: 'Crispy bowl-shaped pancakes made from fermented rice flour.' },
  { id: 3, name: 'Noodles', slug: 'noodles', description: 'Wok-fried noodles with fresh vegetables and your choice of protein.' },
  { id: 4, name: 'String Hoppers', slug: 'string-hoppers', description: 'Steamed rice flour noodles served with coconut milk and curry.' },
  { id: 5, name: 'Spaghetti', slug: 'spaghetti', description: 'Classic spaghetti served with a rich marinara sauce.' },
];

const DinnerOrderPage = ({ params }) => {
  const { slug } = params;

  const itemB = dinnerItems.filter((obj)=>obj.slug===params.Dinner)
    const Dinner =itemB[0]

  if (!Dinner) {
    return <p>Dinner item not found!</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{Dinner.name}</h1>
      <p>{Dinner.description}</p>

      <h2>Place Your Order</h2>
      <form className={styles.orderForm}>
        <label>
          Quantity:
          <input type="number" className={styles.numberInput} name="quantity" min="1" defaultValue="1" />
        </label>
        <button type="submit" className={styles.orderButton}>Order Now</button>
      </form>

      <Link href="/Menu/Dinner" className={styles.backLink}>
        Back to Dinner Menu
      </Link>
    </div>
  );
};

export default DinnerOrderPage;
