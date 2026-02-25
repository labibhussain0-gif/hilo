import styles from './AdSlot.module.css';

export default function AdSlot({ size = 'banner' }) {
    const sizeLabels = {
        'top-banner': '970 × 90 — Top Leaderboard',
        banner: '728 × 90 — Leaderboard',
        sidebar: '300 × 250 — Medium Rectangle',
        inline: 'Full Width — In-Article',
    };

    return (
        <div
            className={`${styles.adSlot} ${styles[size]}`}
            role="complementary"
            aria-label={`Advertisement - ${sizeLabels[size] || size}`}
        >
            <span className={styles.label}>ADVERTISEMENT</span>
            <span className={styles.size}>{sizeLabels[size] || size}</span>
        </div>
    );
}
