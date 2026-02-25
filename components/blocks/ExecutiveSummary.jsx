import styles from './blocks.module.css';

export default function ExecutiveSummary({ text }) {
    if (!text) return null;

    return (
        <div className={styles.executiveSummary}>
            <span className={styles.executiveSummaryLabel}>Executive Summary</span>
            <p className={styles.executiveSummaryText}>{text}</p>
        </div>
    );
}
