'use client';

import { useState } from 'react';
import { Link2, Twitter, CheckCircle, Share2 } from 'lucide-react';

export default function ArticleShareButtons({ title, variant }) {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleShareTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(title);
        window.open(
            `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    if (variant === 'footer') {
        return (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                    className="share-btn"
                    onClick={handleCopyLink}
                    aria-label="Copy article link"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '6px',
                        background: 'transparent', color: 'var(--text-secondary)', cursor: 'pointer',
                        fontSize: '0.85rem', transition: 'all 0.2s',
                    }}
                >
                    <Share2 size={16} />
                    Share Article
                </button>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
                onClick={handleCopyLink}
                aria-label="Copy article link"
                style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '6px',
                    background: 'transparent', color: 'var(--text-secondary)', cursor: 'pointer',
                    fontSize: '0.85rem', transition: 'all 0.2s',
                }}
            >
                {copied ? <CheckCircle size={16} /> : <Link2 size={16} />}
                {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <button
                onClick={handleShareTwitter}
                aria-label="Share on Twitter"
                style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '6px',
                    background: 'transparent', color: 'var(--text-secondary)', cursor: 'pointer',
                    fontSize: '0.85rem', transition: 'all 0.2s',
                }}
            >
                <Twitter size={16} />
                Share
            </button>
            {copied && (
                <div className="toast success" style={{
                    position: 'fixed', bottom: '2rem', right: '2rem',
                    padding: '0.75rem 1.5rem', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    zIndex: 9999,
                }}>
                    <CheckCircle size={16} />
                    Link copied to clipboard
                </div>
            )}
        </div>
    );
}
