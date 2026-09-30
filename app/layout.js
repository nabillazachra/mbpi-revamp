import './globals.css';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repoName.endsWith('.github.io');
const basePath = isGithubActions && repoName && !isUserSite ? `/${repoName}` : '';

export const metadata = {
  title: {
    default: 'MBPI - Integrated Container Logistics',
    template: '%s | MBPI'
  },
  description: 'PT Multi Bina Pura International - container depot, repair, warehousing, and trucking services.',
  icons: { icon: `${basePath}/favicon.svg` }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
