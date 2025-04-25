import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './animation.module.css';

const popOutConfig = [
  {
    src: '/images/feature_animations/file_preview.png',
    alt: 'File preview 1',
    className: styles.filePreview,
    from: { width: '50%', height: '0%', bottom: '-100%', opacity: 0 },
    to: {
      width: '55%',
      height: '55%',
      bottom: '20%',
      opacity: 1,
      duration: 0.5,
      ease: 'power1',
    },
  },
  {
    src: '/images/feature_animations/file_preview.png',
    alt: 'File preview 2',
    className: styles.filePreview,
    from: { width: '50%', height: '0%', bottom: '-100%', opacity: 0 },
    to: {
      width: '65%',
      height: '65%',
      bottom: '5%',
      opacity: 1,
      duration: 0.5,
      ease: 'power1',
    },
  },
  {
    src: '/images/feature_animations/file_preview.png',
    alt: 'File preview 3',
    className: styles.filePreview,
    from: { width: '50%', height: '0%', bottom: '-100%', opacity: 0 },
    to: {
      width: '75%',
      height: '75%',
      bottom: '-10%',
      opacity: 1,
      duration: 0.5,
      ease: 'power1',
    },
  },
];

const Animation3 = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const popOutRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      wrapperRef.current,
      { bottom: '-100%', opacity: 0 },
      {
        bottom: '0px',
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      }
    );

    popOutRefs.current.forEach((el, i) => {
      if (el) {
        tl.fromTo(el, popOutConfig[i].from, popOutConfig[i].to, '+=0.1');
      }
    });
  }, []);

  return (
    <div ref={wrapperRef} className={styles.image}>
      <img
        src="/images/feature_animations/phone_3.png"
        alt="Phone Image"
        className={styles.imageWithPopUp}
      />
      {popOutConfig.map((item, i) => (
        <img
          key={i}
          ref={(el) => {
            if (el) popOutRefs.current[i] = el;
          }}
          src={item.src}
          alt={item.alt}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default Animation3;