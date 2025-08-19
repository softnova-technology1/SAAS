// import React from 'react'

// export const About = () => {
//   return (
//     <div>About</div>
//   )
// }

import React from "react";
import styles from "../Styles/About.module.css";
import { FaUsers, FaLock, FaComments } from "react-icons/fa";
import analyticsImage from "../images/about1.png";
import image1 from "../images/02.jpg";
import image2 from "../images/03.jpg";
import image3 from "../images/01.jpg";
import image4 from "../images/06.jpg";
import image5 from "../images/04.jpg";
import image6 from "../images/05.jpg";
import Slider from "react-slick";
import girl from "../images/girl.jpg";
import Footer from "./Footer";

const steps = [
  {
    step: "STEP—01",
    title: "Track, Analyze & Optimize",
    desc: "Aenean id est pellentesque, consequat sem et, viverra lacus. Aliquam tincidunt.",
  },
  {
    step: "STEP—02",
    title: "Insight. Action. Results.",
    desc: "Mauris dignissim vel augue vel congue. Pellentesque sit amet metus tortor hendrerit.",
  },
  {
    step: "STEP—03",
    title: "Monitor, Measure & Improve",
    desc: "Donec eu hendrerit lorem. In ultrices erat pulvinar venenatis auctor.",
  },
];

const features = [
  {
    id: 1,
    tag: "KEY FEATURES",
    title: "Intuitive Campaign Editor",
    desc: "Duis congue eget neque sit amet mollis. Aliquam auctor diam et amet efficitur condimentum. Aliquam vitae scelerisque leo, eu vulputate felis.",
    points: [
      "Intuitive Drag & Drop Editor",
      "Mobile-Responsive Design",
      "Undo/Redo & Version History",
    ],
    reverse: false,
  },
  {
    id: 2,
    tag: "KEY FEATURES",
    title: "Data–Backed AI Insights",
    desc: "Donec eu hendrerit lorem. In ultrices erat pulvinar venenatis auctor. Fusce porta massa sit amet leo rutrum, quis lacinia dui.",
    points: [
      "Intuitive Drag & Drop Editor",
      "Mobile-Responsive Design",
      "Undo/Redo & Version History",
    ],
    reverse: true,
  },
];

const testimonials = [
  {
    id: 1,
    text: "Simple and Save you hours every week with real automation.",
    author: "John Doe",
    role: "CEO - Startup",
    stars: 5,
  },
  {
    id: 2,
    text: "Our smart features make complex tasks simple and fast.",
    author: "Jane Smith",
    role: "CTO - Company",
    stars: 5,
  },
  {
    id: 3,
    text: "Best tool for managing campaigns effortlessly.",
    author: "Marc Delalonde",
    role: "Co-Founder - Penida",
    stars: 5,
  },
  {
    id: 4,
    text: "Simple and Save you hours every week with real automation.",
    author: "John Doe",
    role: "CEO - Startup",
    stars: 5,
  },
  {
    id: 5,
    text: "Our smart features make complex tasks simple and fast.",
    author: "Jane Smith",
    role: "CTO - Company",
    stars: 5,
  },
  {
    id: 6,
    text: "Best tool for managing campaigns effortlessly.",
    author: "Marc Delalonde",
    role: "Co-Founder - Penida",
    stars: 5,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1, // show only 1 testimonial at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true, // smooth fade effect instead of card slide
  pauseOnHover: true,
};

const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutPage}>
        {/* Top Banner */}
        <section className={styles.heroSection}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.breadcrumb}>
            Home <span className={styles.arrow}>›</span> About Us
          </p>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={styles.leftContent}>
            <span className={styles.tag1}>Who We Are</span>
            <h2 className={styles.heading}>
              Crafting Ideas Into Digital Impact
            </h2>
            <p className={styles.description}>
              In vestibulum dui a odio pharetra, nec accumsan sapien
              consectetur. Pellentesque magna risus, volutpat a vestibulum ut,
              tempus et quam. Nulla vitae erat blandit, mattis nisl ut,
              venenatis enim. Maecenas tempus arcu tincidunt.
            </p>

            <ul className={styles.features}>
              <li>
                <span className={styles.icon}>✔</span>
                <div>
                  <strong>Smart Automation</strong>
                  <p>
                    Streamline repetitive tasks and workflows with intelligent
                    automation tools.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.icon}>✔</span>
                <div>
                  <strong>Powerful Automation</strong>
                  <p>
                    Donec eu hendrerit lorem. In ultrices erat pulvinar
                    venenatis auctor.
                  </p>
                </div>
              </li>
            </ul>

            <button className={styles.ctaBtn}>Discover More →</button>
          </div>

          {/* Right Content (Image / Charts) */}
          <div className={styles.rightContent}>
            <img
              src={analyticsImage}
              alt="Analytics"
              className={styles.mainImage}
            />
            {/* <img src={chartImage} alt="Chart" className={styles.overlayImage} /> */}
          </div>
        </section>
      </div>
      <section className={styles.wrapper}>
        <p className={styles.subHeading}>— HOW IT WORKS —</p>
        <h2 className={styles.heading1}>Marketing Made Simple</h2>

        <div className={styles.timeline}>
          {/* Curve behind steps */}
          <div className={styles.curve}></div>

          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.stepTag}>{step.step}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.wrapper1}>
        {/* Feature 1 */}
        <div className={styles.feature}>
          {/* Left: images in 3-grid */}
          <div className={styles.imageGrid}>
            <img src={image1} alt="analytics" className={styles.img1} />
            <img src={image2} alt="graph" className={styles.img2} />
            <img src={image3} alt="stats" className={styles.img3} />
          </div>

          {/* Right: text */}
          <div className={styles.text}>
            <p className={styles.tag}>KEY FEATURES</p>
            <h2 className={styles.title}>Intuitive Campaign Editor</h2>
            <p className={styles.desc1}>
              Duis congue eget neque sit amet mollis. Aliquam auctor diam sit
              amet efficitur condimentum. Aliquam vitae scelerisque leo, eu
              vulputate felis.
            </p>
            <ul>
              <li>Intuitive Drag & Drop Editor</li>
              <li>Mobile-Responsive Design</li>
              <li>Undo/Redo & Version History</li>
            </ul>
            <button className={styles.button}>Read More →</button>
          </div>
        </div>

        <div className={`${styles.feature} ${styles.reverse}`}>
          <div className={styles.imageGrid}>
            <img src={image4} alt="visitors" className={styles.img1} />
            <img src={image5} alt="charts" className={styles.img2} />
            <img src={image6} alt="reports" className={styles.img3} />
          </div>
          <div className={styles.text}>
            <p className={styles.tag}>KEY FEATURES</p>
            <h2 className={styles.title1}>Data–Backed AI Insights</h2>
            <p className={styles.desc1}>
              Donec eu hendrerit lorem. In ultrices erat pulvinar venenatis
              auctor. Fusce porta massa sit amet leo rutrum, quis lacinia dui.
            </p>
            <ul>
              <li>Intuitive Drag & Drop Editor</li>
              <li>Mobile-Responsive Design</li>
              <li>Undo/Redo & Version History</li>
            </ul>
            <button className={styles.button}>Read More →</button>
          </div>
        </div>
      </section>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.slide}>
              <div className={styles.stars}>{"★".repeat(t.stars)}</div>
              <p className={styles.textt}>{t.text}</p>
              <h4 className={styles.author}>{t.author}</h4>
              <p className={styles.role}>{t.role}</p>
            </div>
          ))}
        </Slider>
      </div>
      <section className={styles.whySection}>
        <div className={styles.container}>
          {/* Left Content */}
          <div className={styles.left}>
            <p className={styles.subHeading}>WHY CHOOSE</p>
            <h2 className={styles.heading}>
              Why should you <br /> choose our <span>GoSaas?</span>
            </h2>

            <div className={styles.feature}>
              <div className={styles.iconWrapper}>
                <FaUsers />
              </div>
              <div>
                <h4>Enhanced Collaboration</h4>
                <p>
                  GoSaaS Chat enables efficient team communication with
                  real-time messaging, group chats, and multimedia sharing from
                  anywhere.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.iconWrapper}>
                <FaLock />
              </div>
              <div>
                <h4>Robust Security</h4>
                <p>
                  With end-to-end encryption and secure storage, GoSaaS Chat
                  ensures your privacy and data protection.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.iconWrapper}>
                <FaComments />
              </div>
              <div>
                <h4>Enhanced Collaboration</h4>
                <p>
                  GoSaaS Chat enables efficient team communication with
                  real-time messaging, group chats, and multimedia sharing from
                  anywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <img
                src={girl}
                alt="Why Choose Us"
                className={styles.mainImage1}
              />

              {/* Floating Labels */}
              <div className={`${styles.floatingLabel} ${styles.topLabel}`}>
                <span>🔒 Advance Security</span>
              </div>
              <div className={`${styles.floatingLabel} ${styles.bottomLabel}`}>
                <span>💬 Live Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <h2 className={styles.heading}>Our Team</h2>
        <p className={styles.description}>
          Our team is made up of passionate developers, creative designers, and
          dedicated support staff who work together to deliver high-quality
          projects. With strong collaboration and innovative ideas, we ensure
          the best solutions for our clients.
        </p>
        <button className={styles.btn}>Meet the Team →</button>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
