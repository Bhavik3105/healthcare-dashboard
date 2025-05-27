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

        </div>
    );
}

export default AnatomySection;
