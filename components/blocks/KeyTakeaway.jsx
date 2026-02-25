import { Lightbulb } from 'lucide-react';
import styles from './blocks.module.css';

export default function KeyTakeaway({ items }) {
    if (!items || items.length === 0) return null;

    return (
        <div className={styles.keyTakeaway}>
            <div className={styles.keyTakeawayHeader}>
                <Lightbulb size={16} />
                Key Takeaways
            </div>
            <ul className={styles.keyTakeawayList}>
                {items.map((item, index) => (
                    <li key={index} className={styles.keyTakeawayItem}>
                        <span className={styles.keyTakeawayBullet} />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
