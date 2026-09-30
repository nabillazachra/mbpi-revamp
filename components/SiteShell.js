'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const home = lang === 'id' ? '/id/' : '/';
  const altPath = lang === 'id'
    ? (pathname?.replace(/^\/id/, '') || '/')
    : `/id${pathname === '/' ? '/' : pathname}`;

  return (
    <>
      <a href="#content" className="skipLink">Skip to content</a>
      <header className="mbpiHeader">
        <div className="utilityBar">
          <div className="container utilityInner">
            <div className="utilityLeft">
              <span>EST. 1993</span>
              <span>JAKARTA</span>
              <span>SEMARANG</span>
            </div>
            <div className="utilityRight">
              <a href={site.external.efaktur} target="_blank" rel="noreferrer">E-FAKTUR</a>
              <Link href={lang === 'id' ? '/id/support/' : '/support/'}>FAQ</Link>
              <Link href={altPath}>{lang === 'id' ? 'ENGLISH' : 'INDONESIA'}</Link>
            </div>
          </div>
        </div>

        <div className="mainNav">
          <div className="container navBar">
            <Link href={home} className="brand" aria-label="MBPI home">
              <div className="brandMark">MBPI</div>
              <div className="brandMeta">MULTI BINA PURA INTERNATIONAL</div>
            </Link>
            <nav className="desktopNav" aria-label="Primary navigation">
              {nav[lang].map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
            <div className="navActions">
              <Link className="headerContact" href={lang === 'id' ? '/id/contact/' : '/contact/'}>
                {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'} <Icon name="arrow" size={16}/>
              </Link>
              <button className="menuToggle" type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>

        <div className={`mobileMenu ${mobileOpen ? 'isOpen' : ''}`}>
          <nav className="container mobileNav" aria-label="Mobile navigation">
            {nav[lang].map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</Link>
            ))}
            <Link className="mobileQuote" href={lang === 'id' ? '/id/contact/' : '/contact/'} onClick={() => setMobileOpen(false)}>
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'} <Icon name="arrow" size={17}/>
            </Link>
          </nav>
        </div>
      </header>

      <main id="content">{children}</main>

      <footer className="mbpiFooter">
        <div className="footerSignal"></div>
        <div className="container footerNewGrid">
          <div className="footerBrandBlock">
            <div className="brand brandFooter"><div className="brandMark">MBPI</div><div className="brandMeta">MULTI BINA PURA INTERNATIONAL</div></div>
            <p>{lang === 'id' ? 'Inland container terminal dan layanan logistik terintegrasi di Jakarta dan Semarang.' : 'Inland container terminal and integrated logistics services in Jakarta and Semarang.'}</p>
          </div>
          <div>
            <strong>{lang === 'id' ? 'OPERASIONAL' : 'OPERATIONS'}</strong>
            <Link href={lang === 'id' ? '/id/services/' : '/services/'}>{lang === 'id' ? 'Layanan' : 'Services'}</Link>
            <Link href={lang === 'id' ? '/id/facilities/' : '/facilities/'}>{lang === 'id' ? 'Fasilitas' : 'Facilities'}</Link>
            <a href={site.external.efaktur} target="_blank" rel="noreferrer">E-Faktur</a>
          </div>
          <div>
            <strong>{lang === 'id' ? 'PERUSAHAAN' : 'COMPANY'}</strong>
            <Link href={lang === 'id' ? '/id/about-us/' : '/about-us/'}>{lang === 'id' ? 'Tentang' : 'About'}</Link>
            <Link href={lang === 'id' ? '/id/career/' : '/career/'}>{lang === 'id' ? 'Karier' : 'Career'}</Link>
            <Link href={lang === 'id' ? '/id/news/' : '/news/'}>{lang === 'id' ? 'Berita' : 'News'}</Link>
          </div>
          <div>
            <strong>{lang === 'id' ? 'KONTAK' : 'CONTACT'}</strong>
            <a href={`mailto:${site.contacts.depot}`}>{site.contacts.depot}</a>
            <a href={`mailto:${site.contacts.warehouse}`}>{site.contacts.warehouse}</a>
            <a href={`mailto:${site.contacts.trucking}`}>{site.contacts.trucking}</a>
          </div>
        </div>
        <div className="container footerNewBottom">
          <span>© 2026 PT Multi Bina Pura International</span>
          <span>Jakarta • Semarang • Indonesia</span>
        </div>
      </footer>
    </>
  );
}
