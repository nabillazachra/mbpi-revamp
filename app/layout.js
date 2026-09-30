import './globals.css';

export const metadata = {
  title: {
    default: 'MBPI - Integrated Container Logistics',
    template: '%s | MBPI'
  },
  description: 'PT Multi Bina Pura International - container depot, repair, warehousing, and trucking services.',
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
