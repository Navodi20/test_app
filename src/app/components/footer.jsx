
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <center><p>&copy; {new Date().getFullYear()} My Restaurant. All Rights Reserved.</p></center>
          <p><a href="/privacy-policy" className="footer-link">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
