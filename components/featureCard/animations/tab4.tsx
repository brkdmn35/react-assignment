import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './animation.module.css';

const Animation4 = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    const popOutRefs = useRef<HTMLImageElement[]>([]);

    const popOutConfig = [
        {
            src: '/images/feature_animations/anim4_pop_out_1.png',
            alt: 'Pop out 1',
            className: `${styles.popOut} ${styles.phone_bar_1}`,
        },
        {
            src: '/images/feature_animations/anim4_pop_out_2.png',
            alt: 'Pop out 2',
            className: `${styles.popOut} ${styles.phone_bar_2}`,
        },
    ];

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            imageRef.current,
            { bottom: '-100%', opacity: 0 },
            { bottom: '0px', opacity: 1, duration: 1.5, ease: 'power3.out' }
        );

        popOutRefs.current.forEach((el) => {
            if (el) {
                tl.fromTo(
                    el,
                    { scale: 0.5, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.2, ease: 'power1' },
                    '+=0'
                );
            }
        });
    }, []);

    return (
        <div ref={imageRef} className={styles.image}>
            <img
                src="/images/feature_animations/phone_4.png"
                alt="Tab 4 Image"
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
