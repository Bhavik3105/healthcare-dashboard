// src/components/DashboardMain/AnatomySection.jsx
import styles from './AnatomySection.module.css';
import { healthIndicators } from '../../data/healthData';

function AnatomySection() {
    return (
        <div className={styles.container}>
            <img
                src="src/assets/images/anatomy.png"
                alt="Anatomy"
                className={styles.image}
            />

            {/* <div className={styles.indicators}>
                {healthIndicators.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.statusDot} style={{ backgroundColor: item.color }} />
                        <img src={item.image} alt={item.title} className={styles.icon} />
                        <div>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.status}>{item.status}</div>
                        </div>
                    </div>

                ))}
            </div> */}
        </div>
    );
}

export default AnatomySection;
