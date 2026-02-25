'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Moon, Sun } from 'lucide-react';
import { getAllArticles } from '@/lib/articles';
import { categories } from '@/lib/categories';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [breakingVisible, setBreakingVisible] = useState(true);
    const [theme, setTheme] = useState('dark');
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    // Initialize theme from localStorage or default to dark
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const initial = saved || 'dark';
        setTheme(initial);
        document.documentElement.setAttribute('data-theme', initial);
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    };

    // Search logic
    useEffect(() => {
        if (searchQuery.trim().length > 1) {
            const articles = getAllArticles();
            const q = searchQuery.toLowerCase();
            const results = articles.filter(
                (a) =>
                    a.title.toLowerCase().includes(q) ||
                    a.excerpt.toLowerCase().includes(q) ||
                    a.category.toLowerCase().includes(q)
            );
            setSearchResults(results.slice(0, 5));
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    // Focus input when search overlay opens
    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchOpen]);

    // Close search on Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSearchOpen(false);
                setSearchQuery('');
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Close search on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchOpen(false);
                setSearchQuery('');
            }
        };
        if (searchOpen) {
            document.addEventListener('mousedown', handleClick);
        }
        return () => document.removeEventListener('mousedown', handleClick);
    }, [searchOpen]);

    // Today's date formatted
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <>
            {/* ── Top Ad Banner ── */}
            <div className={styles.topAdBanner}>
                <div className={styles.topAdInner}>
                    <span className={styles.topAdLabel}>ADVERTISEMENT</span>
                    <div className={styles.topAdSlot}>970 × 90 — Top Leaderboard</div>
                </div>
            </div>

            {/* ── Breaking News Bar ── */}
            {breakingVisible && (
                <div className="breaking-bar">
                    <strong>Breaking:</strong>
                    Federal Reserve signals potential rate cuts amid cooling inflation data
                    <button
                        className="breaking-bar__close"
                        onClick={() => setBreakingVisible(false)}
                        aria-label="Dismiss breaking news"
                    >
                        ×
                    </button>
                </div>
            )}

            {/* ── Top Toolbar ── */}
            <div className={styles.toolbar}>
                <div className={`container ${styles.toolbarInner}`}>
                    <div className={styles.toolbarLeft}>
                        <button
                            className={styles.toolbarBtn}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                        >
                            {menuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                        <button
                            className={styles.toolbarBtn}
                            onClick={() => setSearchOpen(true)}
                            aria-label="Search"
                        >
                            <Search size={18} />
                        </button>
                    </div>

                    <div className={styles.toolbarRight}>
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <Link href="/" className="btn-primary" style={{ fontSize: '0.75rem', padding: '6px 18px' }}>
                            Subscribe
                        </Link>
                        <Link href="/" className={styles.toolbarLink}>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Masthead ── */}
            <header className={styles.masthead}>
                <div className={styles.mastheadDate}>{today}</div>
                <Link href="/" className={styles.mastheadLogo}>
                    The Daily Brief
                </Link>
                <div className={styles.mastheadTagline}>Clarity in Every Headline</div>
            </header>

            {/* ── Category Navigation ── */}
            <nav className={styles.categoryNav} aria-label="Primary navigation">
                <div className={`container ${styles.categoryNavInner}`}>
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/?category=${cat.label}`}
                            className={styles.categoryLink}
                        >
                            {cat.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* ── Mobile Menu ── */}
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <nav className={styles.mobileMenuNav}>
                        {categories.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/?category=${cat.label}`}
                                className={styles.mobileMenuLink}
                                onClick={() => setMenuOpen(false)}
                            >
                                {cat.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}

            {/* ── Search Overlay ── */}
            {searchOpen && (
                <div className={styles.searchOverlay} ref={searchRef}>
                    <div className={`container ${styles.searchInner}`}>
                        <div className={styles.searchBar}>
                            <Search size={20} className={styles.searchIcon} />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                            <button
                                className={styles.searchClose}
                                onClick={() => {
                                    setSearchOpen(false);
                                    setSearchQuery('');
                                }}
                                aria-label="Close search"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {searchResults.length > 0 && (
                            <ul className={styles.searchResults}>
                                {searchResults.map((article) => (
                                    <li key={article.slug}>
                                        <Link
                                            href={`/news/${article.slug}`}
                                            className={styles.searchResultItem}
                                            onClick={() => {
                                                setSearchOpen(false);
                                                setSearchQuery('');
                                            }}
                                        >
                                            <span className="category-badge">{article.category}</span>
                                            <span className={styles.searchResultTitle}>
                                                {article.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {searchQuery.trim().length > 1 && searchResults.length === 0 && (
                            <p className={styles.searchEmpty}>
                                No articles found for &ldquo;{searchQuery}&rdquo;
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
