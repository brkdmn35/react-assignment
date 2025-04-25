import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './animation.module.css';

const popOutConfig = [
    {
        src: '/images/feature_animations/arrow.png',
        alt: 'Pop out 1',
        className: `${styles.fileType} ${styles.arrow}`,
        from: { bottom: '-50%', left: '50%' },
        to: { bottom: '2vh', left: '-3vh' },
    },
    {
        src: '/images/feature_animations/pdf.png',
        alt: 'Pop out 2',
        className: styles.fileType,
        from: { bottom: '-50%', left: '50%' },
        to: { bottom: '1vh', left: '4vh' },
    },
    {
        src: '/images/feature_animations/jpg.png',
        alt: 'Pop out 3',
        className: styles.fileType,
        from: { bottom: '-50%' },
        to: { bottom: '5vh' },
    },
    {
        src: '/images/feature_animations/txt.png',
        alt: 'Pop out 4',
        className: styles.fileType,
        from: { bottom: '-50%', left: '30%' },
        to: { bottom: '1vh', left: '90%' },
    },
];

const Animation4 = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    const popOutRefs = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            imageRef.current,
            { bottom: '-100%', opacity: 0 },
            { bottom: '0px', opacity: 1, duration: 1.5, ease: 'power3.out' }
        );

        popOutRefs.current.forEach((el, i) => {
            const config = popOutConfig[i];
            if (el) {
                tl.fromTo(
                    el,
                    config.from,
                    { ...config.to, duration: 0.5, ease: 'power1' },
                    '+=0'
                );
            }
        });
    }, []);

    return (
        <div ref={imageRef} className={styles.image}>
            <img
                src="/images/feature_animations/phone_5.png"
                alt="Tab 5 Image"
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

export default Animation4;
