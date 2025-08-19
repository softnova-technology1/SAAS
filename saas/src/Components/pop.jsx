import React, { useRef,useEffect } from 'react';
import confetti from 'canvas-confetti';
import style from './../Styles/pop.module.css';

const PopUp = () => {
   useEffect(() => {
    const area = document.querySelector(`.${style.effectarea}`);

    const createBox = (className, animation) => {
      const box = document.createElement('div');
      box.className = `${style[className]}`;
      box.style.left = `${Math.random() * 100}%`;
      box.style.top = `${Math.random() * 100}%`;
      box.style.animation = `${style[animation]} 2s linear infinite`;
      area.appendChild(box);
      setTimeout(() => box.remove(), 2000);
    };

    const interval = setInterval(() => {
      createBox('box1', 'blink1');
      createBox('box2', 'blink2');
    }, 300);

    return () => clearInterval(interval);
  }, []);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const handleHover = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 },
    });
  };

  const handleMouseMove = (e) => {
    const hero = e.currentTarget;
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (box1Ref.current && box2Ref.current) {
      box1Ref.current.style.left = `${x - 30}px`;
      box1Ref.current.style.top = `${y - 30}px`;
      box1Ref.current.style.animation = 'none';
      void box1Ref.current.offsetWidth;
      box1Ref.current.style.animation = 'blink1 0.8s linear forwards';

      box2Ref.current.style.left = `${x}px`;
      box2Ref.current.style.top = `${y}px`;
      box2Ref.current.style.animation = 'none';
      void box2Ref.current.offsetWidth;
      box2Ref.current.style.animation = 'blink2 0.8s linear forwards';
    }
    
  };

  return (
    <div className={style.main}>
      <div className={style.herosection} onMouseMove={handleMouseMove}>
        <p className={style.smallheading}>READY TO GET STARTED?</p>
        <h1 className={style.mainheading}>Start your free trial today.</h1>
        <button className={style.ctabutton} onMouseEnter={handleHover}>
          Get started for free
        </button>
        <div className={style.effectarea}>
          <div ref={box1Ref} className={style.box1} />
          <div ref={box2Ref} className={style.box2}/>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
