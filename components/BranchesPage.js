import Link from 'next/link';
import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

export default function BranchesPage({ lang='id' }) {
  const id = lang === 'id';
  const prefix = id ? '/id' : '';
  return <SiteShell lang={lang}>
    <PageHero index="03" kicker={id ? 'CABANG' : 'BRANCHES'} title={id ? 'Jakarta 1993. Semarang 2016.' : 'Jakarta 1993. Semarang 2016.'} intro={id ? 'Jaringan MBPI berkembang dari basis operasi Jakarta menjadi dua titik operasi utama yang mendukung kebutuhan container logistics.' : 'MBPI network expanded from its Jakarta operating base into two core locations supporting container logistics requirements.'}/>
    <section className="section">
      <div className="container branchTimeline">
        <article>
          <div className="branchYear">1993</div>
          <div className="branchContent">
            <span className="kicker">JAKARTA</span>
            <h2>{id ? 'Basis operasi utama MBPI.' : 'MBPI primary operating base.'}</h2>
            <p>{id ? 'PT Multi Bina Pura International dan PT Multi Binatransport menjalankan layanan container depot, warehousing, container repair, dan transportation dari Jakarta sejak 1993.' : 'PT Multi Bina Pura International and PT Multi Binatransport have operated container depot, warehousing, container repair, and transportation services from Jakarta since 1993.'}</p>
            <div className="facilityFacts"><span>Container Depot</span><span>Container Repair</span><span>Warehousing / CFS</span><span>Trucking</span></div>
            <small>{site.offices.jakarta.address}</small>
            <div className="actions"><Link className="primaryBtn" href={`${prefix}/facilities/`}>{id ? 'Lihat Fasilitas Jakarta' : 'View Jakarta Facility'} <Icon name="arrow" size={16}/></Link><Link className="textBtn" href={`${prefix}/contact/`}>{id ? 'Kontak Jakarta' : 'Jakarta Contact'}</Link></div>
          </div>
        </article>
        <article>
          <div className="branchYear">2016</div>
          <div className="branchContent">
            <span className="kicker">SEMARANG</span>
            <h2>{id ? 'Ekspansi jaringan ke Semarang.' : 'Network expansion to Semarang.'}</h2>
            <p>{id ? 'Sejak 2016, MBPI memperluas bisnis dengan membuka branch office dan depot di Semarang untuk mendukung container handling dan kebutuhan logistik di sekitar Pelabuhan Tanjung Emas.' : 'Since 2016, MBPI has expanded its business by establishing a branch office and depot in Semarang to support container handling and logistics around Tanjung Emas Port.'}</p>
            <div className="facilityFacts"><span>Container Yard</span><span>Side Loader</span><span>Forklift</span><span>Reefer Support</span></div>
            <small>{site.offices.semarang.address}</small>
            <div className="actions"><Link className="primaryBtn" href={`${prefix}/facilities/`}>{id ? 'Lihat Fasilitas Semarang' : 'View Semarang Facility'} <Icon name="arrow" size={16}/></Link><Link className="textBtn" href={`${prefix}/contact/`}>{id ? 'Kontak Semarang' : 'Semarang Contact'}</Link></div>
          </div>
        </article>
      </div>
    </section>
  </SiteShell>;
}
