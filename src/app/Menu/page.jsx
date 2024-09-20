import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';


const MenuPage = () => {
  const sections = [
    {
      name: 'Breakfast',
      img: '/images/breakfast.jpg',
      slug: 'breakfast',
    },
    {
      name: 'Lunch',
      img: '/images/lunch.jpg',
      slug: 'lunch',
    },
    {
      name: 'Dinner',
      img: '/images/dinner.jpg',
      slug: 'dinner',
    },
    {
      name: 'Beverages',
      img: '/images/beverages.jpg',
      slug: 'beverages',
    },
    {
      name: 'Desserts',
      img: '/images/dessert.jpg',
      slug: 'desserts',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Our Menu</h1>
      <div className={styles.sections}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <Link href={`/menu/${section.slug}`}>
              <div className={styles.imageContainer}>
                <Image
                  src={section.img}
                  alt={section.name}
                  width={300}
                  height={200}
                />
                <h3 className={styles.sectionTitle}>{section.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
