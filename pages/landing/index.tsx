import styles from './landing.module.css';
import WhatWeDo from './sections/whatWeDo';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <WhatWeDo />
        </div>
    );
}

export default HomePage;