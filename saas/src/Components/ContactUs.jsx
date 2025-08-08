import React from 'react';
import styles from '../Styles/ContactUs.module.css';

const ContactUs = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h6 className={styles.topLink}>Get in Touch</h6>
      <h2 className={styles.heading}>Contact Us</h2>
      <p className={styles.description}>
        Have questions or ready to get started with Metronic? Send us a message and we’ll respond as soon as possible.
      </p>

      <div className={styles.contactContainer}>
        {/* Left Side */}
        <div className={styles.infoSection}>
          <h4 className={styles.infoHeading}>Let's Start a Conversation</h4>
          <p className={styles.infoText}>
            Whether you're looking to streamline your workflow, boost productivity, or transform your business operations,
            we're here to help you succeed.
          </p>

          <div className={styles.infoItem}>
            <span className={styles.label}>Email</span>
            <p>hello@kt.com</p>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Phone</span>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Address</span>
            <p>
              123 Business St, Suite 100<br />
              San Francisco, CA 94102
            </p>
          </div>
        </div>

        {/* Right Side */}
        <form className={styles.formSection}>
          <div className={styles.inputRow}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className={styles.input}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="What’s this about?"
            className={styles.inputFull}
            required
          />
          <textarea
            name="message"
            placeholder="Tell us more about your project or question..."
            className={styles.textarea}
            rows={5}
            required
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
