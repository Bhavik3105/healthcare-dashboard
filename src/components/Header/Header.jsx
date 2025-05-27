// src/components/Header/Header.jsx
import styles from './Header.module.css';
import { FaBell, FaPlus } from 'react-icons/fa';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <h2 className={styles.title}>Dashboard</h2>
            </div>
            <div className={styles.center}>
                <input
                    type="text"
                    placeholder="Search here"
                    className={styles.search}
                />
            </div>
            <div className={styles.right}>
                <FaBell className={styles.icon} />
                <div className={styles.user}>
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User"
                        className={styles.avatar}
                    />
                    <span className={styles.username}>John Doe</span>
                </div>
                <button className={styles.addBtn}>
                    <FaPlus />
                </button>
            </div>
        </header>
    );
}

export default Header;
