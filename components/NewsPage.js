import Link from 'next/link';
import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';

const archive = [
  ['01','Surveyor','Recruitment Archive'],
  ['02','Container Repair','Recruitment Archive']
];

export default function NewsPage({ lang='id' }) {
  const id = lang === 'id';
  const prefix = id ? '/id' : '';
  return <SiteShell lang={lang}>
    <PageHero index="05" kicker={id ? 'BERITA' : 'NEWS'} title={id ? 'Berita perusahaan dan arsip rekrutmen legacy.' : 'Company updates and legacy recruitment archive.'} intro={id ? 'Konten lowongan pada News existing tidak dihapus; konteksnya dipertahankan sebagai arsip dan diarahkan ke halaman Career.' : 'Recruitment posts from the existing News page are not removed; they are preserved as archive entries and routed to Career.'}/>
    <section className="section"><div className="container newsArchive">
      {archive.map(([no,title,type])=><article key={title}><span>{no}</span><div><small>{type}</small><h2>{title}</h2><p>{id ? 'Posting ini berasal dari struktur News website existing dan sekarang dipindahkan ke Career agar kategori konten lebih jelas.' : 'This post originated from the existing News structure and is now routed to Career for clearer content categorization.'}</p></div><Link href={`${prefix}/career/`}>{id ? 'Lihat di Career' : 'View in Career'} <Icon name="arrow" size={16}/></Link></article>)}
    </div></section>
  </SiteShell>;
}
