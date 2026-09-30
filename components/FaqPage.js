import SiteShell from './SiteShell';
import PageHero from './PageHero';
import { site } from '../content/site';

export default function FaqPage({ lang='id' }) {
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
    <PageHero index="05" kicker="FAQ" title={id ? 'Pertanyaan operasional yang sering muncul.' : 'Frequently asked operational questions.'} intro={id ? 'Standalone FAQ ini mempertahankan destination existing, sementara halaman Support tetap menjadi pusat quick access.' : 'This standalone FAQ preserves the existing destination while Support remains the quick-access hub.'}/>
    <section className="section faqBand"><div className="container"><div className="faqList">{faqs.map(([q,a],i)=><article key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></article>)}</div></div></section>
  </SiteShell>;
}
