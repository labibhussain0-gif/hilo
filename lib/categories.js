// Centralized category configuration — CMS-ready
// When integrating with Sanity/CMS, this file becomes the single source of truth
// for category slugs, labels, and any associated metadata.

export const categories = [
    { slug: 'politics', label: 'Politics' },
    { slug: 'finance', label: 'Finance' },
    { slug: 'tech', label: 'Tech' },
    { slug: 'climate', label: 'Climate' },
    { slug: 'well-being', label: 'Well+Being' },
    { slug: 'business', label: 'Business' },
];

// Convenience helper: returns just the labels
export function getCategoryLabels() {
    return categories.map((c) => c.label);
}

// Convenience helper: find a category by slug
export function getCategoryBySlug(slug) {
    return categories.find((c) => c.slug === slug);
}
