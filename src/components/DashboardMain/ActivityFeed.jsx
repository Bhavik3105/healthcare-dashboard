// src/components/DashboardMain/ActivityFeed.jsx
import styles from "./ActivityFeed.module.css";

const activities = [
    {
        id: 1,
        user: "Dr. Emily Rose",
        action: "updated a patient record",
        time: "5 mins ago",
        avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
        id: 2,
        user: "Nurse Olivia",
        action: "added a new note to patient John",
        time: "20 mins ago",
        avatar: "https://i.pravatar.cc/40?img=4",
    },
];

function ActivityFeed() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Activity Feed</h3>
            <div className={styles.feedList}>
                {activities.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <img src={item.avatar} alt={item.user} className={styles.avatar} />
                        <div className={styles.content}>
                            <p>
                                <strong>{item.user}</strong> {item.action}
                            </p>
                            <span className={styles.time}>{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivityFeed;
