import React, { useState } from 'react';
import styles from '../Styles/HowItWorks.module.css';
import { FaDatabase, FaBrain, FaCog, FaRocket } from 'react-icons/fa';
 import image from "../images/img2.jpg";
 import image1 from "../images/img1.jpeg";
 import image2 from "../images/img2.jpg";
 import image3 from "../images/img3.avif";
const steps = [
  {
    icon: <FaDatabase />,
    title: 'Connect Your Data',
    image: image,
  },
  {
    icon: <FaBrain />,
    title: 'AI-Powered Analysis',
    image: image1,
  },
  {
    icon: <FaCog />,
    title: 'Configure & Optimize',
    image: image2,
  },
  {
    icon: <FaRocket />,
    title: 'Deploy & Scale',
    image: image3,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={styles.howSection} id="how-it-works">
      <h2 className={styles.heading}>How It Works</h2>
      <p className={styles.description}>
        Our streamlined process gets you up and running quickly, with powerful AI doing the heavy lifting.
      </p>

      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.stepItem} ${index === activeStep ? styles.active : ''}`}
            onClick={() => setActiveStep(index)}
          >
            <div className={styles.icon}>{step.icon}</div>
            <p className={styles.stepTitle}>{step.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.imageContainer}>
        <img
          src={steps[activeStep].image}
          alt={steps[activeStep].title}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
