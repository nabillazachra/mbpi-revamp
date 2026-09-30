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
    <PageHero index="05" kicker={id ? 'BERITA' : 'NEWS'} title={id ? 'Informasi perusahaan dan arsip rekrutmen.' : 'Company updates and recruitment archive.'} intro={id ? 'Posting rekrutmen terdahulu dipertahankan sebagai arsip dan diarahkan ke halaman Career.' : 'Previous recruitment posts are preserved as archive entries and routed to Career.'}/>
    <section className="section"><div className="container newsArchive">
      {archive.map(([no,title,type])=><article key={title}><span>{no}</span><div><small>{type}</small><h2>{title}</h2><p>{id ? 'Posting rekrutmen ini tersedia sebagai arsip dan diarahkan ke halaman Career untuk informasi posisi.' : 'This recruitment post is retained as an archive entry and routed to Career for role information.'}</p></div><Link href={`${prefix}/career/`}>{id ? 'Lihat di Career' : 'View in Career'} <Icon name="arrow" size={16}/></Link></article>)}
    </div></section>
  </SiteShell>;
}
