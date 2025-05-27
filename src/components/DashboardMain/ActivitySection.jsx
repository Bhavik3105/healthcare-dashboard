import styles from "./ActivitySection.module.css";

const activityData = [
    { day: "Mon", value: 40 },
    { day: "Tues", value: 60 },
    { day: "Wed", value: 50 },
    { day: "Thurs", value: 70 },
    { day: "Fri", value: 90 },
    { day: "Sat", value: 45 },
    { day: "Sun", value: 55 },
];

function ActivitySection() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Activity</h3>
                <span className={styles.subtext}>3 appointments on this week</span>
            </div>

            <div className={styles.chart}>
                {activityData.map((item, index) => (
                    <div key={index} className={styles.barGroup}>
                        <div className={styles.barWrapper}>
                            <div
                                className={styles.bar}
                                style={{ height: `${item.value}px` }}
                            ></div>
                        </div>
                        <span className={styles.label}>{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivitySection;
