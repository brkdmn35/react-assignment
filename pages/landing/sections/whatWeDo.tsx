import React, { useState } from 'react';
import styles from '../landing.module.css';
import SectionContainer from '../../../components/reusable/sectionContainer';
import TabMenu from '../../../components/tabMenu/tabMenu';

import ExportIcon from '../../../src/assets/icons/export.svg?react';
import File from '../../../src/assets/icons/file.svg?react';
import Circle from '../../../src/assets/icons/circle.svg?react';
import Chip from '../../../src/assets/icons/chip.svg?react';
import Certified from '../../../src/assets/icons/certified.svg?react';
import FeatureCard from '../../../components/featureCard';
import { Tab } from '../../../src/types/components/tap';
import { FeatureCardData } from '../../../src/types/content/landing';

const tabs: Tab[] = [
    {
        label: 'Document Scanner',
        icon: File,
    },
    {
        label: 'Sign & Stamp',
        icon: Certified,

    },
    {
        label: 'Batch Scanning',
        icon: Chip,

    },
    {
        label: 'Advanced Filters',
        icon: Circle,

    },
    {
        label: 'Export & Share',
        icon: ExportIcon,
    },
];

const featureCardDummyData: FeatureCardData[] = [
    {
        title: 'Scan with Ease',
        headline: 'Document Scanner',
        description: 'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
        onLearnMore: () => console.info('Navigation would be place it here'),
    },
    {
        title: 'One-Tap Focus',
        headline: 'Sign & Stamp',
        description: 'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
        onLearnMore: () => console.info('Navigation would be place it here'),
    },
    {
        title: 'Multiple Page Scan',
        headline: 'Batch Scanning',
        description: 'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
        onLearnMore: () => console.info('Navigation would be place it here'),
    },
    {
        title: 'Unique Filters',
        headline: 'Advanced filters',
        description: 'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
        onLearnMore: () => console.info('Navigation would be place it here'),
    },
    {
        title: 'All-Round Conversion',
        headline: 'export & share',
        description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
        onLearnMore: () => console.info('Navigation would be place it here'),
    },
]

const WhatWeDo = () => {
    const [activeTab, setActiveTab] = useState(0);

    return <section className={styles.whatWeDo}>

        {featureCardDummyData[activeTab] && <SectionContainer>
            <FeatureCard
                activeIndex={activeTab}
                title={featureCardDummyData[activeTab].title}
                headline={featureCardDummyData[activeTab].headline}
                description={featureCardDummyData[activeTab].description}
                onLearnMore={featureCardDummyData[activeTab].onLearnMore}
            />
            <TabMenu tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
        </SectionContainer>}
    </section>

}

export default WhatWeDo;