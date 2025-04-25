import React from 'react';
import styles from './tabButton.module.css';
import { Tab } from '../../../src/types/components/tap';


const TabButton = ({ tab, isActive, onTabClick, index }: {
    tab: Tab;
    isActive: boolean;
    onTabClick: (index: number) => void;
    index: number;
}) => {
    const Icon = tab.icon;

    return <div
        className={`${styles.tab} ${isActive ? styles.active : ''}`}
        onClick={() => onTabClick(index)}
    >
        <div className={styles.iconWrapper}>
            <Icon className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`} />
            <svg
                className={styles.activeBorderSvg}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    className={`${styles.animatedCircle} ${isActive ? styles.animateIn : styles.animateOut}`}
                    cx="24"
                    cy="24"
                    r="23.5"
                    stroke="#0381FF"
                    strokeWidth="1"
                    fill="none"
                />
            </svg>
        </div>
        <div className={styles.label}>{tab.label}</div>
    </div>
}

export default TabButton;