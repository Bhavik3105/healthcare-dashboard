import React from 'react';
import './HealthCard.css';

const HealthCard = ({ title, status, color, image, progress }) => {
    return (
        <div className="health-card">
            <img src={image} alt={title} className="health-image" />
            <div className="health-info">
                <h4>{title}</h4>
                <p>{status}</p>
                <div className="progress-bar">
                    <div className={`progress-fill ${color}`} style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    );
};

export default HealthCard;
