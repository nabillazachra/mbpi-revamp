import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

export default function SupportPage({ lang='id' }) {
  const id = lang === 'id';
  const faqs = id ? [
    ['Permintaan E-Faktur Depot', <>Gunakan portal E-Faktur. Untuk permintaan login, hubungi <a href={`mailto:${site.contacts.efakturLogin}`}>{site.contacts.efakturLogin}</a> dan siapkan scan NPWP serta invoice.</>],
    ['Nomor container dan seal', <>Untuk tracking Evergreen gunakan ShipmentLink. Jakarta: {site.contacts.containerJakarta}. Semarang: {site.contacts.containerSemarang}.</>],
    ['Pengambilan EIR', 'Datang ke Depot - Gate Bon Muat dengan copy SP2/DO pelayaran dan bukti pembayaran MBPI.'],
    ['Stock container dan tarif LOLO', 'Hubungi kontak Depot untuk informasi stok dan tarif terkini.'],
    ['Keluhan dan saran', <>Kirimkan laporan ke <a href={`mailto:${site.contacts.complaint}`}>{site.contacts.complaint}</a>.</>]
  ] : [
    ['Depot E-Invoice request', <>Use the E-Faktur portal. For login requests, contact <a href={`mailto:${site.contacts.efakturLogin}`}>{site.contacts.efakturLogin}</a> and prepare a scanned tax ID and invoice.</>],
    ['Container and seal number', <>Use ShipmentLink for Evergreen tracking. Jakarta: {site.contacts.containerJakarta}. Semarang: {site.contacts.containerSemarang}.</>],
    ['EIR collection', 'Visit the Depot - Loading Note Gate with a copy of SP2/shipping DO and MBPI payment proof.'],
    ['Container stock and LOLO tariff', 'Contact the Depot team for current stock and tariff information.'],
    ['Feedback and complaints', <>Send your report to <a href={`mailto:${site.contacts.complaint}`}>{site.contacts.complaint}</a>.</>]
  ];
  return <SiteShell lang={lang}>
    <PageHero index="05" kicker={id ? 'DUKUNGAN' : 'SUPPORT'} title={id ? 'Akses operasional tanpa harus mencari terlalu jauh.' : 'Operational access without unnecessary searching.'} intro={id ? 'Seluruh konteks support existing dipusatkan di satu tempat: E-Faktur, tracking, operational FAQ, complaint channel, Damage Container Photos, dan CFS Consol.' : 'Legacy support context is centralized in one place: E-Faktur, tracking, operational FAQ, complaint channel, Damage Container Photos, and CFS Consol.'}/>
    <section className="section">
      <div className="container quickGrid">
        <a href={site.external.efaktur} target="_blank" rel="noreferrer"><Icon name="link"/><span>E-Faktur</span><strong>{id ? 'Portal invoice depot' : 'Depot invoice portal'}</strong><Icon name="arrow"/></a>
        <a href={site.external.shipmentLink} target="_blank" rel="noreferrer"><Icon name="link"/><span>ShipmentLink</span><strong>{id ? 'Tracking Evergreen' : 'Evergreen tracking'}</strong><Icon name="arrow"/></a>
        <a href={`mailto:${site.contacts.complaint}`}><Icon name="mail"/><span>{id ? 'Keluhan dan Saran' : 'Feedback & Complaints'}</span><strong>{site.contacts.complaint}</strong><Icon name="arrow"/></a>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="sectionHead compact"><div><span className="sectionIndex">05A</span><span className="kicker">{id ? 'MODUL SUPPORT EXISTING' : 'LEGACY SUPPORT MODULES'}</span></div><h2>{id ? 'Dua modul tetap dipertahankan dalam arsitektur baru.' : 'Two legacy modules remain part of the new architecture.'}</h2></div>
        <div className="valueGrid">
          <a className="supportModuleCard" href={site.external.damagePhotos} target="_blank" rel="noreferrer">
            <span>01</span><h3>Damage Container Photos</h3>
            <p>{id ? 'Portal existing untuk melihat dokumentasi foto kerusakan kontainer. Portal membuka halaman login terpisah.' : 'Existing portal for viewing container damage photo documentation. The portal opens a separate login page.'}</p>
            <strong>{id ? 'Buka portal' : 'Open portal'} <Icon name="arrow" size={16}/></strong>
          </a>
          <a className="supportModuleCard" href={site.external.cfsConsol} target="_blank" rel="noreferrer">
            <span>02</span><h3>CFS Consol</h3>
            <p>{id ? 'Akses sistem CFS Consol existing MBPI. Sistem tetap dibuka sebagai aplikasi terpisah dari website company profile.' : 'Access the existing MBPI CFS Consol system. The system remains a separate application from the corporate website.'}</p>
            <strong>{id ? 'Buka sistem' : 'Open system'} <Icon name="arrow" size={16}/></strong>
          </a>
        </div>
      </div>
    </section>
    <section className="section faqBand"><div className="container"><div className="sectionHead compact"><div><span className="sectionIndex">05B</span><span className="kicker">FAQ</span></div><h2>{id ? 'Pertanyaan operasional yang sering muncul.' : 'Common operational questions.'}</h2></div><div className="faqList">{faqs.map(([q,a],i)=><article key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></article>)}</div></div></section>
  </SiteShell>;
}
