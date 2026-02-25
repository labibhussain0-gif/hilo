import './globals.css';

export const metadata = {
  title: 'The Daily Brief — Breaking News, Politics, Business & More',
  description:
    'The Daily Brief delivers the most important breaking news, in-depth reporting, and expert analysis on politics, business, technology, climate, and well-being.',
  keywords: [
    'news',
    'breaking news',
    'politics',
    'business',
    'technology',
    'climate',
    'well-being',
    'finance',
  ],
  openGraph: {
    title: 'The Daily Brief',
    description:
      'Breaking news, in-depth reporting, and expert analysis.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script to set theme before paint — prevents FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
