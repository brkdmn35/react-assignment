import React from 'react';
import styles from './featureCard.module.css';
import Headline from '../elements/headline';
import Title from '../elements/title';
import Description from '../elements/description';
import LightButton from '../elements/lightButton';
import AnimationManager from './animations/animationManagement';

interface FeatureCardProps {
  title: string;
  headline: string;
  description: string;
  onLearnMore?: () => void;
  activeIndex: number;
}

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
        <Headline>{headline}</Headline>
        <Title>{title}</Title>
        <Description>{description}</Description>
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
