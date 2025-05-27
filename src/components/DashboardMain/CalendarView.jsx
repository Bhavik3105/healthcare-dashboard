import styles from './CalendarView.module.css';

function CalendarView() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Appointments</h3>
                <div className={styles.month}>May 2025</div>
            </div>
            <div className={styles.calendar}>
                <div className={styles.day}>Mon</div>
                <div className={styles.day}>Tue</div>
                <div className={styles.day}>Wed</div>
                <div className={styles.day}>Thu</div>
                <div className={styles.day}>Fri</div>
                <div className={styles.day}>Sat</div>
                <div className={styles.day}>Sun</div>
                
                {[...Array(30)].map((_, i) => (
                    <div key={i} className={styles.date}>
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CalendarView;
