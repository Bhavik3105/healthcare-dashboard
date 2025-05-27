import React from 'react';
import { healthIndicators } from '../data/healthData';
import HealthCard from './HealthCard.jsx';

const HealthOverview = () => {
    return (
        <div>
            {healthIndicators.map((item, index) => (
                <HealthCard key={index} {...item} />
            ))}
        </div>
    );
};

export default HealthOverview;
