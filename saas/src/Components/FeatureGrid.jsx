import React from 'react';
import styles from '../Styles/FeaturedGrid.module.css';
import {
  FaBootstrap,
  FaMobileAlt,
  FaCogs,
  FaLayerGroup,
  FaJsSquare,
  FaGlobe,
  FaGem,
  FaFont,
  FaSass,
  FaHeadset,
  FaFileAlt,
  FaThLarge,
} from 'react-icons/fa';

const features = [
  { icon: <FaBootstrap />, label: 'Bootstrap v5.3.6' },
  { icon: <FaMobileAlt />, label: 'Fully Responsive' },
  { icon: <FaCogs />, label: 'Gulp Workflow' },
  { icon: <FaLayerGroup />, label: 'Multiple Demos' },
  { icon: <FaJsSquare />, label: 'Pure JavaScript' },
  { icon: <FaGlobe />, label: 'Cross Browser' },
  { icon: <FaGem />, label: 'Rich Components' },
  { icon: <FaFont />, label: '15k+ Font Icons' },
  { icon: <FaSass />, label: 'SASS Support' },
  { icon: <FaHeadset />, label: '1 Day Support' },
  { icon: <FaFileAlt />, label: 'Well Documentation' },
  { icon: <FaThLarge />, label: '14+ Apps' },

];

const FeatureGrid = () => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.gridContainer}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <p className={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
