import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './animation.module.css';

const Animation1 = () => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { bottom: '-100%', opacity: 0 },
            { bottom: '0px', opacity: 1, duration: 1.5, ease: 'power3.out' }
        );
    }, []);

    return (
        <img ref={imageRef} src={'/images/feature_animations/phone_1.png'} alt={'Tab 1 Image'} className={styles.image} />
    );
};

export default Animation1;
