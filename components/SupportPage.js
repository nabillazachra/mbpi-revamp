import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

export default function SupportPage({ lang='id' }) {
  const id = lang === 'id';
  const faqs = id ? [
    ['Permintaan E-Faktur Depot', <>Gunakan portal E-Faktur. Untuk permintaan login, hubungi <a href="mailto:act3@mbpi.co.id">act3@mbpi.co.id</a> dan siapkan scan NPWP serta invoice.</>],
    ['Nomor container dan seal', <>Untuk tracking Evergreen gunakan ShipmentLink. Jakarta: allcy@mbpi.co.id. Semarang: allcy.srg@mbpi.co.id.</>],
    ['Pengambilan EIR', 'Datang ke Depot - Gate Bon Muat dengan copy SP2/DO pelayaran dan bukti pembayaran MBPI.'],
    ['Stock container dan tarif LOLO', 'Hubungi kontak Depot untuk informasi stok dan tarif terkini.'],
    ['Keluhan dan saran', <>Kirimkan laporan ke <a href={`mailto:${site.contacts.complaint}`}>{site.contacts.complaint}</a>.</>]
  ] : [
    ['Depot E-Invoice request', <>Use the E-Faktur portal. For login requests, contact <a href="mailto:act3@mbpi.co.id">act3@mbpi.co.id</a> and prepare a scanned tax ID and invoice.</>],
    ['Container and seal number', <>Use ShipmentLink for Evergreen tracking. Jakarta: allcy@mbpi.co.id. Semarang: allcy.srg@mbpi.co.id.</>],
    ['EIR collection', 'Visit the Depot - Loading Note Gate with a copy of SP2/shipping DO and MBPI payment proof.'],
    ['Container stock and LOLO tariff', 'Contact the Depot team for current stock and tariff information.'],
    ['Feedback and complaints', <>Send your report to <a href={`mailto:${site.contacts.complaint}`}>{site.contacts.complaint}</a>.</>]
  ];
  return <SiteShell lang={lang}>
    <PageHero index="04" kicker={id ? 'DUKUNGAN' : 'SUPPORT'} title={id ? 'Akses operasional tanpa harus mencari terlalu jauh.' : 'Operational access without unnecessary searching.'} intro={id ? 'Support link existing dipusatkan menjadi quick access: E-Faktur, tracking, FAQ, dan contact channel.' : 'Existing support links are centralized into quick access for E-Faktur, tracking, FAQ, and contact channels.'}/>
    <section className="section"><div className="container quickGrid"><a href={site.external.efaktur} target="_blank" rel="noreferrer"><Icon name="link"/><span>E-Faktur</span><strong>{id ? 'Portal invoice depot' : 'Depot invoice portal'}</strong><Icon name="arrow"/></a><a href={site.external.shipmentLink} target="_blank" rel="noreferrer"><Icon name="link"/><span>ShipmentLink</span><strong>{id ? 'Tracking Evergreen' : 'Evergreen tracking'}</strong><Icon name="arrow"/></a><a href={`mailto:${site.contacts.complaint}`}><Icon name="mail"/><span>{id ? 'Keluhan dan Saran' : 'Feedback & Complaints'}</span><strong>{site.contacts.complaint}</strong><Icon name="arrow"/></a></div></section>
    <section className="section faqBand"><div className="container"><div className="sectionHead compact"><div><span className="sectionIndex">04A</span><span className="kicker">FAQ</span></div><h2>{id ? 'Pertanyaan operasional yang sering muncul.' : 'Common operational questions.'}</h2></div><div className="faqList">{faqs.map(([q,a],i)=><article key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></article>)}</div></div></section>
  </SiteShell>;
}
