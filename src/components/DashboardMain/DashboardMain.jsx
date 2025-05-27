import styles from './DashboardMain.module.css';
import AnatomySection from './AnatomySection';
import ActivitySection from "./ActivitySection";
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { healthIndicators } from '../../data/healthData';
import HealthCard from './HealthCard';

function DashboardMain() {
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <AnatomySection />

                
                <div className={styles.healthCardContainer}>
                    {healthIndicators.map((item, index) => (
                        <HealthCard key={index} {...item} />
                    ))}
                </div>

                <CalendarView />
                <ActivitySection />
            </div>
            <div className={styles.bottom}>
                <UpcomingSchedule />
                <ActivityFeed />
            </div>
        </div>
    );
}

export default DashboardMain;
