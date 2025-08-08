import React from 'react';
import styles from '../Styles/KeyFeatures.module.css';
import { FaBolt, FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaBolt className={`${styles.icon} ${styles.blue}`} />,
    metricSub: "SPEED INCREASE",
    title: "Lightning Workflows",
    description: "Supercharge your daily operations with automation that not only saves time, but intelligently adapts to your evolving business routines..",
  },
  {
    icon: <FaShieldAlt className={`${styles.icon} ${styles.red}`} />,
    metricSub: "UPTIME",
    title: "Adaptive Safeguards",
    description: "Protect your data and streamline processes with real-time AI security, adapting instantly to threats and keeping your operations resilient and confidential.",
  },
  {
    icon: <FaUsers className={`${styles.icon} ${styles.green}`} />,
    metricSub: "ACTIVE USERS",
    title: "Smart Team Sync",
    description: "Let AI handle the chaos of calendars and meetings—Smart Team Sync coordinates, schedules, and adapts to your team’s needs, so you can focus on what matters most.",
  },
  {
    icon: <FaChartLine className={`${styles.icon} ${styles.orange}`} />,
    metricSub: "GROWTH BOOST",
    title: "Predictive Insights",
    description: "Reveal hidden trends and forecast outcomes with analytics that learn from your unique data, giving you a competitive edge and actionable clarity.",
  }
];

const KeyFeatures = () => {
  return (
    <section className={styles.keyFeaturesSection} id="key-features">
      <h1 className={styles.heading}>Key Features</h1>
      <p className={styles.subheading}>
        Our platform provides all the tools and features you need to build, scale, and optimize your business operations efficiently.
      </p>

      <div className={styles.featuresGrid}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            {feature.icon}
            <div className={styles.metricSub}>{feature.metricSub}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
