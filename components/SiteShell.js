'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { site } from '../content/site';

const nav = {
  id: [
    ['Tentang', '/id/about-us/'], ['Layanan', '/id/services/'], ['Fasilitas', '/id/facilities/'], ['Dukungan', '/id/support/'], ['Berita', '/id/news/'], ['Karier', '/id/career/'], ['Kontak', '/id/contact/']
  ],
  en: [
    ['About', '/about-us/'], ['Services', '/services/'], ['Facilities', '/facilities/'], ['Support', '/support/'], ['News', '/news/'], ['Career', '/career/'], ['Contact', '/contact/']
  ]
};

export default function SiteShell({ lang = 'id', children }) {
  const pathname = usePathname();
  const home = lang === 'id' ? '/id/' : '/';
  const altPath = lang === 'id'
    ? (pathname?.replace(/^\/id/, '') || '/')
    : `/id${pathname === '/' ? '/' : pathname}`;
  const quoteLabel = lang === 'id' ? 'Minta Penawaran' : 'Request a Quote';

  return (
    <>
      <a href="#content" className="skipLink">Skip to content</a>
      <header className="siteHeader">
        <div className="container navBar">
          <Link href={home} className="brand" aria-label="MBPI home">
            <div className="brandMark">MBPI</div>
            <div className="brandMeta">MULTI BINA PURA INTERNATIONAL</div>
          </Link>
          <nav className="desktopNav" aria-label="Primary navigation">
            {nav[lang].map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <div className="navActions">
            <Link className="language" href={altPath}>{lang === 'id' ? 'EN' : 'ID'}</Link>
            <Link className="quoteBtn" href={lang === 'id' ? '/id/contact/' : '/contact/'}>{quoteLabel} <Icon name="arrow" size={16}/></Link>
          </div>
        </div>
      </header>
      <main id="content">{children}</main>
      <footer>
        <div className="container footerGrid">
          <div>
            <div className="brand brandFooter"><div className="brandMark">MBPI</div><div className="brandMeta">MULTI BINA PURA INTERNATIONAL</div></div>
            <p>{lang === 'id' ? 'Layanan logistik kontainer terintegrasi untuk depot, repair, warehousing, dan trucking.' : 'Integrated container logistics for depot, repair, warehousing, and trucking.'}</p>
          </div>
          <div>
            <strong>{lang === 'id' ? 'Akses Cepat' : 'Quick Access'}</strong>
            <a href={site.external.efaktur} target="_blank" rel="noreferrer">E-Faktur</a>
            <Link href={lang === 'id' ? '/id/support/' : '/support/'}>FAQ & Support</Link>
            <Link href={lang === 'id' ? '/id/contact/' : '/contact/'}>{lang === 'id' ? 'Jam Operasional' : 'Operational Hours'}</Link>
          </div>
          <div>
            <strong>Jakarta</strong>
            <span>{site.offices.jakarta.address}</span>
            <a href={`mailto:${site.contacts.depot}`}>{site.contacts.depot}</a>
          </div>
          <div>
            <strong>Semarang</strong>
            <span>{site.offices.semarang.address}</span>
            <a href={`mailto:${site.offices.semarang.email}`}>{site.offices.semarang.email}</a>
          </div>
        </div>
        <div className="container footerBottom">
          <span>© 2026 PT Multi Bina Pura International</span>
          <span>Revamp concept - static GitHub Pages build</span>
        </div>
      </footer>
    </>
  );
}
