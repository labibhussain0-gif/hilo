import { BarChart3 } from 'lucide-react';
import styles from './blocks.module.css';

export default function ComparisonTable({ rows, title }) {
    if (!rows || rows.length === 0) return null;

    return (
        <div className={styles.comparisonTable}>
            <div className={styles.comparisonTableHeader}>
                <BarChart3 size={14} />
                {title || 'Comparison'}
            </div>
            <table className={styles.comparisonTableInner}>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={row._key || rowIndex}>
                            {row.cells?.map((cell, cellIndex) =>
                                rowIndex === 0 ? (
                                    <th key={cellIndex}>{cell}</th>
                                ) : (
                                    <td key={cellIndex}>{cell}</td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
