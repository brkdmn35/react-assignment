import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Animation.module.css';

const Animation2 = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const popOut1Ref = useRef<HTMLImageElement>(null);
    const popOut2Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            imageRef.current,
            { bottom: '-100%', opacity: 0 },
            { bottom: '0px', opacity: 1, duration: 1, ease: 'power3.out' }
        );
        tl.fromTo(
            popOut2Ref.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.2, ease: 'power1' },
            '+=0'
        );
        tl.fromTo(
            popOut1Ref.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.2, ease: 'power1' },
            '+=0'
        );

    }, []);

    return (
        <div ref={imageRef} className={styles.image}>
            <img src="/images/feature_animations/phone_2.png" alt="Tab 1 Image" className={styles.image} />
            <img ref={popOut1Ref} src="/images/feature_animations/anim2_pop_out_1.png" alt="Pop out 1" className={`${styles.popOut} ${styles.popOut1}`} />
            <img ref={popOut2Ref} src="/images/feature_animations/anim2_pop_out_2.png" alt="Pop out 2" className={`${styles.popOut} ${styles.popOut2}`} />
        </div>
    );
};

export default Animation2;
