import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './animation.module.css';

const Animation4 = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const popOut1Ref = useRef<HTMLImageElement>(null);
    const popOut2Ref = useRef<HTMLImageElement>(null);
    const popOut3Ref = useRef<HTMLImageElement>(null);
    const popOut4Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            imageRef.current,
            { bottom: '-100%', opacity: 0 },
            { bottom: '0px', opacity: 1, duration: 1.5, ease: 'power3.out' }
        );
        tl.fromTo(
            popOut1Ref.current,
            { bottom: '-50%', left: '50%' },
            { bottom: '2vh', left: '-3vh', duration: 0.5, ease: 'power1' },
            '+=0'
        );
        tl.fromTo(
            popOut2Ref.current,
            { bottom: '-50%', left: '50%' },
            { bottom: '1vh', left: '4vh', duration: 0.5, ease: 'power1' },
            '+=0'
        );
        tl.fromTo(
            popOut3Ref.current,
            { bottom: '-50%', },
            { bottom: '5vh', duration: 0.5, ease: 'power1' },
            '+=0'
        );
        tl.fromTo(
            popOut4Ref.current,
            { bottom: '-50%', left: '30%' },
            { bottom: '1vh', left: '90%', duration: 0.5, ease: 'power1' },
            '+=0'
        );

    }, []);

    return (
        <div ref={imageRef} className={styles.image}>
            <img src="/images/feature_animations/phone_5.png" alt="Tab 5 Image" className={styles.imageWithPopUp} />
            <img ref={popOut1Ref} src="/images/feature_animations/arrow.png" alt="Pop out 1" className={`${styles.fileType} ${styles.arrow}`} />
            <img ref={popOut2Ref} src="/images/feature_animations/pdf.png" alt="Pop out 2" className={`${styles.fileType} `} />
            <img ref={popOut3Ref} src="/images/feature_animations/jpg.png" alt="Pop out 3" className={`${styles.fileType} `} />
            <img ref={popOut4Ref} src="/images/feature_animations/txt.png" alt="Pop out 4" className={`${styles.fileType}`} />
        </div>
    );
};

export default Animation4;
