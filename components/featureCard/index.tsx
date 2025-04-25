import React from 'react';
import styles from './featureCard.module.css';
import Headline from '../reusable/elements/headline';
import Title from '../reusable/elements/title';
import Description from '../reusable/elements/description';
import LightButton from '../reusable/elements/lightButton';
import AnimationManager from './animations/animationManagement';
import { FeatureCardProps } from '../../src/types/content/landing';

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  headline,
  description,
  onLearnMore,
  activeIndex
}) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.imageWrapper}>
        <AnimationManager index={activeIndex} />
      </div>
      <div key={activeIndex} className={styles.textContent}>
        <div>
          <Headline>{headline}</Headline>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        {onLearnMore && (
          <LightButton onClick={onLearnMore} className={styles.learnMoreButton}>
            Learn More
          </LightButton>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
