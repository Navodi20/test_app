import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';



const MenuPage = () => {
  const sections = [
    {
      name: 'Breakfast',
      slug: 'Breakfast',
      img: '/images/breakfast.jpg',
    },
    {
      name: 'Lunch',
      slug: 'Lunch',
      img: '/images/lunch.jpg',},
    
    {
      name: 'Dinner',
      slug: 'Dinner',
      img: '/images/dinner.jpg',},
    {
      name: 'Beverages',
      slug: 'Beverages',
      img: '/images/beverages.jpg',},
    {
      name: 'Desserts',
      slug: 'Desserts',
      img: '/images/dessert.jpg',},
  ];

  return (
    <div className={styles.container}>
      <h1>Our Menu</h1>
      <div className={styles.sections}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <Link href={`/Menu/${section.slug}`}>
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
