import React, { ReactNode } from 'react';
import styles from './sectionContainer.module.css';

interface SectionContainerProps {
  children: ReactNode;
  optionalClassName?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, optionalClassName }) => {
  return (
    <div className={`${styles.sectionContainer} ${optionalClassName || ''}`}>
      {children}
    </div>
  );
};

export default SectionContainer;