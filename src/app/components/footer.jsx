// components/Footer.js
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <center><p>&copy; {new Date().getFullYear()} Restaurant Name. All Rights Reserved.</p></center>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
