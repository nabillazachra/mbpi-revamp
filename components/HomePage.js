import Link from 'next/link';
import SiteShell from './SiteShell';
import ContainerVisual from './ContainerVisual';
import Icon from './Icon';
import { services, strengths } from '../content/site';

export default function HomePage({ lang = 'id' }) {
  const id = lang === 'id';
  const prefix = id ? '/id' : '';
  return (
    <SiteShell lang={lang}>
      <section className="hero">
        <div className="heroAccent"></div>
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">{id ? 'INLAND CONTAINER TERMINAL - SEJAK 1993' : 'INLAND CONTAINER TERMINAL - SINCE 1993'}</div>
            <h1>{id ? <>Logistik kontainer yang <em>terhubung.</em></> : <>Container logistics, <em>connected.</em></>}</h1>
            <p>{id ? 'MBPI mengintegrasikan depot kontainer, repair, pergudangan, dan trucking untuk membantu alur logistik bergerak lebih sederhana dari satu jaringan layanan.' : 'MBPI integrates container depot, repair, warehousing, and trucking so logistics can move through one connected service network.'}</p>
            <div className="actions">
              <Link className="primaryBtn" href={`${prefix}/services/`}>{id ? 'Jelajahi Layanan' : 'Explore Services'} <Icon name="arrow" size={17}/></Link>
              <Link className="textBtn" href={`${prefix}/contact/`}>{id ? 'Hubungi Tim Kami' : 'Talk to Our Team'}</Link>
            </div>
          </div>
          <ContainerVisual />
        </div>
        <div className="container trustStrip">
          <div><span>{id ? 'Pengalaman' : 'Experience'}</span><strong>30+ {id ? 'tahun' : 'years'}</strong></div>
          <div><span>{id ? 'Lokasi' : 'Locations'}</span><strong>Jakarta + Semarang</strong></div>
          <div><span>{id ? 'Model layanan' : 'Service model'}</span><strong>One-stop logistics</strong></div>
          <div><span>{id ? 'Fokus operasional' : 'Operational focus'}</span><strong>Safety + Visibility</strong></div>
        </div>
      </section>

      <section className="section editorialIntro">
        <div className="container introGrid">
          <div className="sectionIndex">01</div>
          <div><div className="kicker">{id ? 'PERUSAHAAN' : 'COMPANY'}</div><h2>{id ? 'Satu jaringan untuk pergerakan kontainer yang lebih efisien.' : 'One network for more efficient container movement.'}</h2></div>
          <p>{id ? 'Berpengalaman sebagai inland container terminal, MBPI melayani storage, transit, warehousing, repair, dan transportasi dengan dukungan personel serta sistem operasional terintegrasi.' : 'As an experienced inland container terminal, MBPI supports storage, transit, warehousing, repair, and transportation through qualified personnel and integrated operations.'}</p>
        </div>
      </section>

      <section className="section servicesBand">
        <div className="container">
          <div className="sectionHead"><div><span className="sectionIndex">02</span><span className="kicker">{id ? 'LAYANAN INTI' : 'CORE SERVICES'}</span></div><h2>{id ? 'Dari yard sampai tujuan akhir.' : 'From yard to final destination.'}</h2><p>{id ? 'Empat kapabilitas utama yang dirancang bekerja sebagai satu rantai layanan.' : 'Four primary capabilities designed to work as one service chain.'}</p></div>
          <div className="serviceGrid">
            {services.map((s) => <article className="serviceCard" key={s.id}>
              <div className="serviceMeta"><span>{s.no}</span><Icon name={s.id === 'warehouse' ? 'warehouse' : s.id === 'trucking' ? 'trucking' : s.id === 'repair' ? 'repair' : 'depot'} /></div>
              <div><h3>{id ? s.titleId : s.titleEn}</h3><p>{id ? s.summaryId : s.summaryEn}</p></div>
              <Link href={`${prefix}/services/#${s.id}`} aria-label={`Open ${id ? s.titleId : s.titleEn}`}><Icon name="arrow"/></Link>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section darkBand">
        <div className="container">
          <div className="sectionHead light"><div><span className="sectionIndex">03</span><span className="kicker">{id ? 'OPERASIONAL' : 'OPERATIONS'}</span></div><h2>{id ? 'Infrastruktur fisik, data, dan keamanan dalam satu operasi.' : 'Physical infrastructure, data, and security in one operation.'}</h2><p>{id ? 'Value proposition existing MBPI dipertahankan, tetapi ditampilkan lebih ringkas dan mudah dipindai.' : 'MBPI existing value proposition is preserved in a more scannable and modern structure.'}</p></div>
          <div className="strengthRail">{strengths.map(([n,t]) => <article key={n}><span>{n}</span><h3>{t}</h3></article>)}</div>
        </div>
      </section>

      <section className="section locationBand">
        <div className="container locationGrid">
          <div><div className="kicker">{id ? 'JARINGAN FASILITAS' : 'FACILITY NETWORK'}</div><h2>Jakarta <span>+</span> Semarang</h2><p>{id ? 'Dua titik operasi yang dekat dengan pelabuhan utama dan mendukung kebutuhan container handling, warehouse, dan transportasi.' : 'Two operating locations positioned near major ports to support container handling, warehousing, and transport.'}</p><Link className="textArrow" href={`${prefix}/facilities/`}>{id ? 'Lihat fasilitas' : 'Explore facilities'} <Icon name="arrow" size={17}/></Link></div>
          <div className="locationCards">
            <article><Icon name="location"/><span>JAKARTA</span><strong>Near Tanjung Priok</strong><small>{id ? 'Depot, CFS, repair, trucking' : 'Depot, CFS, repair, trucking'}</small></article>
            <article><Icon name="location"/><span>SEMARANG</span><strong>Near Tanjung Emas</strong><small>{id ? 'Depot dan supporting operations' : 'Depot and supporting operations'}</small></article>
          </div>
        </div>
      </section>

      <section className="ctaBand">
        <div className="container ctaInner"><div><div className="kicker lightKicker">{id ? 'MULAI DARI KEBUTUHAN ANDA' : 'START WITH YOUR REQUIREMENT'}</div><h2>{id ? 'Butuh depot, gudang, repair, atau trucking?' : 'Need depot, warehousing, repair, or trucking?'}</h2></div><Link className="lightBtn" href={`${prefix}/contact/`}>{id ? 'Minta Penawaran' : 'Request a Quote'} <Icon name="arrow" size={18}/></Link></div>
      </section>
    </SiteShell>
  );
}
