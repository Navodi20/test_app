import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Import the CSS file

const DessertMenu = () => {
  const breakfastItems = [
    { id: 1, name: 'cake', img: '/images/cake.jpg', slug: 'Omlette' },
    { id: 2, name: 'caramel', img: '/images/caramel.jpg', slug: 'Noodles' },
    { id: 3, name: 'ice cream', img: '/images/icecream.jpg', slug: 'Spaghetti' },
    { id: 4, name: 'pudding', img: '/images/pudding.jpg', slug: 'Hoppers' },
    { id: 4, name: 'watalappan', img: '/images/watalappan.jpg', slug: 'Hoppers' },
  ];

  return (
    <div className={styles.container}>
      <h1>Desserts</h1>
      <p>Prepare to embark on a sweet journey with our exquisite dessert selection, designed to delight your taste buds and satisfy your cravings. Each dessert is a masterpiece, meticulously crafted using the finest ingredients to ensure an unforgettable experience.

      From rich and velvety chocolate creations to refreshing fruit-based treats, our menu offers a diverse array of options that cater to every palate. Indulge in classic favorites like our decadent chocolate cake, perfectly layered with silky ganache, or savor the light and airy goodness of our signature tiramisu, infused with the rich flavors of espresso and mascarpone.

      For those who prefer a fruity finish, our seasonal fruit tart showcases a buttery crust filled with creamy custard and topped with a vibrant medley of fresh fruits, bringing a burst of flavor in every bite. And don’t miss our artisanal ice creams, hand-churned and available in a variety of unique flavors that are sure to refresh and invigorate.

      Whether you're celebrating a special occasion or simply treating yourself, our dessert offerings promise to provide a sweet conclusion to your dining experience. Join us in indulging in these delightful creations, where every bite is a celebration of flavor and craftsmanship!</p>
      <hr className={styles.sectionDivider} />

      <div className={styles.menuGrid}>
        {breakfastItems.map(Dessert => (
          <div key={Dessert.id} className={styles.menuItem}>
            <Link href={`/menu/breakfast/${Dessert.slug}`}>
              <Image src={Dessert.img} alt={Dessert.name} width={200} height={150} />
              <h3 className={styles.menuTitle}>{Dessert.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertMenu;
