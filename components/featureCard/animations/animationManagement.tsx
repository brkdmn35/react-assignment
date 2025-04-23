import React from 'react';
import Animation1 from './tab1';
import Animation2 from './tab2';
import Animation3 from './tab3';
import Animation4 from './tab4';
import Animation5 from './tab5';

interface AnimationManagerProps {
    index: number;
}

const AnimationManager: React.FC<AnimationManagerProps> = ({ index }) => {
    const animations: { [key: number]: JSX.Element } = {
        0: <Animation1 />,
        1: <Animation2 />,
        2: <Animation3 />,
        3: <Animation4 />,
        4: <Animation5 />,
    };

    return animations[index] || null;
};

export default AnimationManager;
