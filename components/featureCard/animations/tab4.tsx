import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './animation.module.css';

const Animation4 = () => {
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
            <img src="/images/feature_animations/phone_4.png" alt="Tab 4 Image" className={styles.imageWithPopUp} />
            <img ref={popOut1Ref} src="/images/feature_animations/anim4_pop_out_1.png" alt="Pop out 1" className={`${styles.popOut} ${styles.phone_bar_1}`} />
            <img ref={popOut2Ref} src="/images/feature_animations/anim4_pop_out_2.png" alt="Pop out 2" className={`${styles.popOut} ${styles.phone_bar_2}`} />
        </div>
    );
};

export default Animation4;
