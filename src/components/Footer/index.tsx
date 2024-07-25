
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["l-nav-footer"]}>
      <div className={styles["l-nav-footer__inner"]}>
        <nav>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: easymeals15@gmail.com</p>
          <p>Phone: 9817748915</p>
          <p>Address: 123 Food Street, Jalandhar
          </p>
        </div>
        <div className="footer-section social">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} 2024 Easymeals, Co. All rights reserved.</p>
      </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
