import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { services, strengths } from '../content/site';

export default function ServicesPage({ lang='id' }) {
  const id = lang === 'id';
  return <SiteShell lang={lang}>
    <PageHero index="02" kicker={id ? 'LAYANAN' : 'SERVICES'} title={id ? 'Empat layanan utama. Satu alur logistik.' : 'Four core services. One logistics flow.'} intro={id ? 'Struktur layanan existing MBPI dipertahankan: depot, repair, warehousing, dan trucking, dengan penjelasan yang lebih terstruktur.' : 'MBPI existing service structure is retained: depot, repair, warehousing, and trucking, with clearer information architecture.'}/>
    <section className="section"><div className="container serviceRows">{services.map((s)=><article id={s.id} key={s.id}><span className="serviceNo">{s.no}</span><Icon name={s.id === 'warehouse' ? 'warehouse' : s.id === 'trucking' ? 'trucking' : s.id === 'repair' ? 'repair' : 'depot'} size={28}/><div><h2>{id ? s.titleId : s.titleEn}</h2><p>{id ? s.summaryId : s.summaryEn}</p></div><ul>{(id ? s.bulletsId : s.bulletsEn).map(b=><li key={b}>{b}</li>)}</ul></article>)}</div></section>
    <section className="section operationsBand"><div className="container"><div className="sectionHead compact"><div><span className="sectionIndex">02A</span><span className="kicker">{id ? 'CARA KAMI BEROPERASI' : 'HOW WE OPERATE'}</span></div><h2>{id ? 'Service layer yang didukung kontrol operasional.' : 'Service delivery backed by operational control.'}</h2></div><div className="valueGrid">{strengths.map(([n,t])=><article key={n}><span>{n}</span><h3>{t}</h3></article>)}</div></div></section>
  </SiteShell>;
}
