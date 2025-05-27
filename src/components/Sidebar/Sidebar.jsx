// src/components/Sidebar/Sidebar.jsx
import styles from './Sidebar.module.css';
import { FaThLarge, FaHistory, FaCalendarAlt, FaChartBar, FaComments, FaPhoneAlt, FaPlus } from 'react-icons/fa';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>General</div>
                <SidebarItem icon={<FaThLarge />} label="Dashboard" active />
                <SidebarItem icon={<FaHistory />} label="History" />
                <SidebarItem icon={<FaCalendarAlt />} label="Calendar" />
                <SidebarItem icon={<FaPlus />} label="Appointments" />
                <SidebarItem icon={<FaChartBar />} label="Statistics" />
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Tools</div>
                <SidebarItem icon={<FaComments />} label="Chat" />
                <SidebarItem icon={<FaPhoneAlt />} label="Support" />
            </div>
        </div>
    );
}

function SidebarItem({ icon, label, active }) {
    return (
        <div className={`${styles.item} ${active ? styles.active : ''}`}>
            <span className={styles.icon}>{icon}</span>
            <span>{label}</span>
        </div>
    );
}

export default Sidebar;
