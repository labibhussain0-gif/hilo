'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/categories';
import styles from './Footer.module.css';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 4000);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerInner}`}>
                {/* Brand */}
                <div className={styles.brand}>
                    <Link href="/" className={styles.brandLogo}>The Daily Brief</Link>
                    <p className={styles.brandDesc}>
                        Delivering the most important breaking news, in-depth reporting,
                        and expert analysis on the topics that matter most.
                    </p>
                </div>

                {/* Sections */}
                <div className={styles.links}>
                    <h4 className={styles.linksHeading}>Sections</h4>
                    <nav className={styles.linksNav}>
                        {categories.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/?category=${cat.label}`}
                                className={styles.link}
                            >
                                {cat.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Newsletter */}
                <div className={styles.newsletter}>
                    <h4 className={styles.linksHeading}>Newsletter</h4>
                    <p className={styles.newsletterDesc}>
                        Get the day&apos;s top stories delivered to your inbox every morning.
                    </p>
                    {subscribed ? (
                        <p className={styles.success}>✓ You&apos;re subscribed!</p>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.input}
                                required
                            />
                            <button type="submit" className="btn-primary" style={{ borderRadius: '0 9999px 9999px 0' }}>
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>© {new Date().getFullYear()} The Daily Brief. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
