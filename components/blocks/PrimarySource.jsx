import { FileText } from 'lucide-react';
import styles from './blocks.module.css';

export default function PrimarySource({ sources }) {
    if (!sources || sources.length === 0) return null;

    return (
        <div className={styles.primarySources}>
            <div className={styles.primarySourcesHeader}>
                <FileText size={14} />
                Primary Sources
            </div>
            <ol className={styles.primarySourcesList}>
                {sources.map((source, index) => (
                    <li key={source._key || index} className={styles.primarySourceItem}>
                        <span className={styles.primarySourceNumber}>[{index + 1}]</span>
                        <span>
                            {source.url ? (
                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.primarySourceLink}
                                >
                                    {source.title}
                                </a>
                            ) : (
                                source.title
                            )}
                            {source.publisher && (
                                <span className={styles.primarySourcePublisher}>
                                    {' — '}{source.publisher}
                                </span>
                            )}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
