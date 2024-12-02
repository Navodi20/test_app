'use client'
import Link from 'next/link';
import styles from './page.module.css'; 

const dessertItems = [
  { id: 1, name: 'Cake', slug: 'cake', description: 'A rich and moist cake layered with chocolate ganache.' },
  { id: 2, name: 'Caramel', slug: 'caramel', description: 'A creamy dessert topped with sweet caramel sauce.' },
  { id: 3, name: 'Ice Cream', slug: 'ice-cream', description: 'Hand-churned ice cream in various flavors.' },
  { id: 4, name: 'Pudding', slug: 'pudding', description: 'A smooth and silky vanilla pudding topped with whipped cream.' },
  { id: 5, name: 'Watalappan', slug: 'watalappan', description: 'A traditional Sri Lankan coconut custard with jaggery and cardamom.' },
];

const DessertOrderPage = ({ params }) => {

  const itemB = dessertItems.filter((obj)=>obj.slug===params.Dessert)
    const Dessert =itemB[0]

  if (!Dessert) {
    return <p>Dessert item not found!</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{Dessert.name}</h1>
      <p>{Dessert.description}</p>

      <h2>Place Your Order</h2>
      <form className={styles.orderForm}>
        <label>
          Quantity:
          <input type="number" className={styles.numberInput} name="quantity" min="1" defaultValue="1" />
        </label>
        <button type="submit" className={styles.orderButton}>Order Now</button>
      </form>

      <Link href="/Menu/Desserts" className={styles.backLink}>
        Back to Desserts Menu
      </Link>
    </div>
  );
};

export default DessertOrderPage;
