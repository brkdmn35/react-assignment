export interface FeatureCardData {
    title: string;
    headline: string;
    description: string;
    onLearnMore: () => void;
}

export interface FeatureCardProps extends FeatureCardData {
    activeIndex: number; 
}

