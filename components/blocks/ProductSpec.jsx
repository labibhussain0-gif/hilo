import { Cpu } from 'lucide-react';
import styles from './blocks.module.css';

export default function ProductSpec({ items }) {
    if (!items || items.length === 0) return null;

    return (
        <div className={styles.productSpec}>
            <div className={styles.productSpecHeader}>
                <Cpu size={14} />
                Specifications
            </div>
            <div className={styles.productSpecList}>
                {items.map((item, index) => {
                    // Expect format "Label: Value" or just plain text
                    const parts = typeof item === 'string' ? item.split(':') : [item];
                    const label = parts[0]?.trim() || '';
                    const value = parts.length > 1 ? parts.slice(1).join(':').trim() : '';

                    return (
                        <div key={index} className={styles.productSpecItem}>
                            <span className={styles.productSpecLabel}>{label}</span>
                            {value && <span className={styles.productSpecValue}>{value}</span>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
