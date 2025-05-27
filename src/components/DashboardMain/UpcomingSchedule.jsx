import styles from "./UpcomingSchedule.module.css";

const appointments = [
    {
        id: 1,
        name: "Dr. Alice Martin",
        time: "10:00 AM - 10:30 AM",
        day: "Sunday",
        type: "Dental Checkup",
        avatar: "https://i.pravatar.cc/40?img=1",
        status: "Upcoming",
    },
    {
        id: 2,
        name: "Dr. John Smith",
        time: "11:00 AM - 11:45 AM",
        day: "Friday",
        type: "Eye Consultation",
        avatar: "https://i.pravatar.cc/40?img=2",
        status: "Rescheduled",
    },
];

function UpcomingSchedule() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Upcoming Appointments</h3>
                <button className={styles.seeAll}>See All</button>
            </div>
            <div className={styles.list}>
                {appointments.map((appt) => (
                    <div key={appt.id} className={styles.card}>
                        <img src={appt.avatar} alt={appt.name} className={styles.avatar} />
                        <div className={styles.details}>
                            <h4>{appt.name}</h4>
                            <p>{`${appt.time} | ${appt.day}`}</p>  
                            <p className={styles.type}>{appt.type}</p>
                        </div>

                        <span className={styles[appt.status.toLowerCase()]}>{appt.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingSchedule;
