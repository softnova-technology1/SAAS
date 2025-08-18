
import React from 'react';
import styles from "../../src/Styles/HeaderPage.module.css";
import phoneImg from '../Image/imgbg.png';
import Navbar from "../Components/Navbar";
import circleBg from '../Image/bg.png';
const Hero = () => {
  return (
  <>
    <Navbar/>
    <div className={styles.hero}>
      <div className={styles.leftContent}>
         <div className={styles.badges}>
         
          <span className={styles.subBadge}>
             <span className={styles.badge}>News!</span>
            Find Your Solution 🔥</span>
        </div>
        <h1 className={styles.title}>We Develop Websites, Applications, And Brands.</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.getStarted}>Get Started Now →</button>
          <button className={styles.learnMore}>Learn More →</button>
        </div>
        <div className={styles.stats}>
          <div>
            <img src="https://i.pravatar.cc/40?img=3" alt="user1" className={styles.avatar} />
            <img src="https://i.pravatar.cc/40?img=4" alt="user2" className={styles.avatar} />
            <img src="https://i.pravatar.cc/40?img=5" alt="user3" className={styles.avatar} />
            <span className={styles.rate}>2,291 Happy Customers</span>
          </div>
          <div>
            ⭐⭐⭐⭐☆ <span>4.8/5 Rating</span>
          </div>
        </div>
      </div>
      <div className={styles.rightImage}>
         <img src={circleBg} alt="circle background" className={styles.circleBg} />
        <img src={phoneImg} alt="phone" className={styles.phoneImg} />
      </div>
    </div>
  </>
  );
};

export default Hero;
