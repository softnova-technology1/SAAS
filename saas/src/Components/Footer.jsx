// Footer.jsx
import React from "react";
import styles from "../Styles/Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h2 className={styles.logo}>
          
            <img
              src="./src/images/SOFTNOVA LOGO.png"
              alt="SoftNova Logo"
              className={styles.logoImage}
            />
          </h2>
          <p>
            It is a long established fact that from will be distracted by the
            readable from when looking.
          </p>
        </div>

        <div className={styles.footerCenter}>
          <h3>Pages</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Integrations</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Contact Us</p>
        </div>

        <div className={styles.footerCenter}>
          <h3>Utility Pages</h3>
          <p>Integrations</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>Pricing</p>
          <p>Project Details</p>
          <p>Our Team</p>
        </div>

        <div className={styles.footerRight}>
          <h3>Address</h3>
          <h4>Ready To Get Started?</h4>
          <p>
            It is a long established fact that a reader will be distracted
            layout.
          </p>

          <div className={styles.contactItem}>
            <FaEnvelope /> contact.tech@gmail.com
          </div>
          <div className={styles.contactItem}>info@Niotech.com</div>
          <div className={styles.contactItem}>
            <FaPhone /> +880 123 654 789 00
          </div>
          <div className={styles.contactItem}>+001 6520 698 00</div>
        </div>
      </div>
      <hr />
      <div className={styles.footerBottom}>
        <div>
          <p>Copyright © Softnova All Rights</p>
        </div>
        <div className={styles.socialIcons}>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaPinterest />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
