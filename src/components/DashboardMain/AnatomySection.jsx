import styles from './AnatomySection.module.css';
import anatomyImg from '../../assets/images/anatomy.png';

function AnatomySection() {
    return (
        <div className={styles.container}>
            <img
                src={anatomyImg}
                alt="Anatomy"
                className={styles.image}
            />
        </div>
    );
}

export default AnatomySection;
