import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { services, strengths } from '../content/site';

export default function ServicesPage({ lang='id' }) {
  const id = lang === 'id';
  return <SiteShell lang={lang}>
    <PageHero index="02" kicker={id ? 'LAYANAN' : 'SERVICES'} title={id ? 'Empat layanan utama. Satu alur logistik.' : 'Four core services. One logistics flow.'} intro={id ? 'Seluruh konteks layanan utama dari website existing dipertahankan, lalu disusun ulang agar lebih mudah dipindai tanpa mengurangi informasi penting.' : 'Core service information from the legacy website is retained and reorganized into a clearer, more scannable structure.'}/>
    <section className="section"><div className="container serviceRows">{services.map((svc)=><article id={svc.id} key={svc.id}>
      <span className="serviceNo">{svc.no}</span>
      <Icon name={svc.id === 'warehouse' ? 'warehouse' : svc.id === 'trucking' ? 'trucking' : svc.id === 'repair' ? 'repair' : 'depot'} size={28}/>
      <div><h2>{id ? svc.titleId : svc.titleEn}</h2><p>{id ? svc.summaryId : svc.summaryEn}</p><p className="serviceDetail">{id ? svc.detailId : svc.detailEn}</p></div>
      <ul>{(id ? svc.bulletsId : svc.bulletsEn).map(b=><li key={b}>{b}</li>)}</ul>
    </article>)}</div></section>
    <section className="section operationsBand"><div className="container"><div className="sectionHead compact"><div><span className="sectionIndex">02A</span><span className="kicker">{id ? 'CARA KAMI BEROPERASI' : 'HOW WE OPERATE'}</span></div><h2>{id ? 'Kapabilitas layanan yang didukung kontrol operasional.' : 'Service capabilities backed by operational control.'}</h2></div><div className="valueGrid">{strengths.map(([n,t])=><article key={n}><span>{n}</span><h3>{t}</h3></article>)}</div></div></section>
  </SiteShell>;
}
