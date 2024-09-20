import Head from 'next/head';
import Image from 'next/image';
import image01 from "../../public/images/Image01.jpg"




export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant Name</title>
      </Head>
      
      <div className="topic">
        <h1>Welcome to Our Restaurant</h1>
        
        <p className="bold-text">
          Step into our Restaurant, where passion for culinary excellence is at the heart of everything we do...
        </p>
      </div>
      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <Image src={image01} width={500} height={500} alt="About Us Image" />
          <div className="about-content">
            <h3>Our Culnary Story</h3>
            <p>
            Step into [Restaurant Name], where passion for culinary excellence is at the heart of everything we do. From the moment you walk through our doors, you’ll be greeted by the inviting aroma of freshly prepared dishes made from the finest, locally sourced ingredients. Our menu is a celebration of global cuisines, thoughtfully crafted to bring together bold flavors, timeless traditions, and modern twists.

            Whether you’re here for a light lunch, a family dinner, or a special celebration, our chefs curate each plate with precision and care, ensuring an unforgettable dining experience. Explore our rich selection of signature dishes, enjoy the welcoming ambiance of our thoughtfully designed spaces, and immerse yourself in an atmosphere that feels like home.

            With locations across the country and internationally recognized for our commitment to quality, [Restaurant Name] is more than just a meal—it’s a journey of taste, comfort, and culinary innovation. Visit us today, and let us make your dining experience extraordinary
            </p>
          </div>
        </div>
      </section>
    </>
  );
}