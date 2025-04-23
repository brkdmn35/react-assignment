// components/TabMenu.tsx
import React from 'react';
import styles from './tabMenu.module.css';
import { Tab } from '../../src/types/components/tap';
import TabButton from '../reusable/tabButton';


interface TabMenuProps {
  tabs: Tab[];
  activeTab: number;
  onTabClick: (index: number) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className={styles.tabContainer}>
      {tabs.map((tab, index) => {
        return (
          <TabButton
            key={index}
            tab={tab}
            isActive={activeTab === index}
            onTabClick={onTabClick}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default TabMenu;
