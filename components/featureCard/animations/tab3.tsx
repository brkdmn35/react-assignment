import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './animation.module.css';

const Animation3 = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const preview1Ref = useRef<HTMLImageElement>(null);
    const preview2Ref = useRef<HTMLImageElement>(null);
    const preview3Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Main phone enters from bottom
        tl.fromTo(
            wrapperRef.current,
            { bottom: '-100%', opacity: 0 },
            { bottom: '0px', opacity: 1, duration: 1, ease: 'power3.out' }
        );

        tl.fromTo(
            preview1Ref.current,
            { width: '50%', height: '0%', bottom: '-100%', opacity: 0 },
            { width: '55%', height: '55%', bottom: '20%', opacity: 1, duration: 0.5, ease: 'power1' },
            '+=0.1'
        );
        tl.fromTo(
            preview2Ref.current,
            { width: '50%', height: '0%',  bottom: '-100%', opacity: 0 },
            { width: '65%', height: '65%', bottom: '5%', opacity: 1, duration: 0.5, ease: 'power1' },
            '+=0.1'
        );
        tl.fromTo(
            preview3Ref.current,
            { width: '50%', height: '0%',  bottom: '-100%', opacity: 0 },
            { width: '75%', height: '75%', bottom: '-10%', opacity: 1, duration: 0.5, ease: 'power1' },
            '+=0.1'
        );
    }, []);

    return (
        <div ref={wrapperRef} className={styles.image}>
            <img src="/images/feature_animations/phone_3.png" alt="Phone Image" className={styles.imageWithPopUp} />
            <img
                ref={preview1Ref}
                src="/images/feature_animations/file_preview.png"
                alt="File preview 1"
                className={styles.filePreview}
            />
            <img
                ref={preview2Ref}
                src="/images/feature_animations/file_preview.png"
                alt="File preview 2"
                className={styles.filePreview}
            />
            <img
                ref={preview3Ref}
                src="/images/feature_animations/file_preview.png"
                alt="File preview 3"
                className={styles.filePreview}
            />
        </div>
    );
};

export default Animation3;
