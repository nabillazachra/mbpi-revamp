import Link from 'next/link';
import SiteShell from './SiteShell';
import Icon from './Icon';
import { services } from '../content/site';

function HeroVisual(){
  return <div className="premiumHeroVisual" aria-label="Abstract container logistics visual">
    <div className="visualWash"></div>
    <div className="visualCrane"></div>
    <div className="visualStacks visualStacksA"><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div className="visualStacks visualStacksB"><i></i><i></i><i></i><i></i></div>
    <div className="visualTruck"><span></span></div>
    <div className="visualCaption"><span>MBPI</span><small>INLAND CONTAINER TERMINAL</small></div>
  </div>
}

export default function HomePage({ lang = 'id' }) {
  const id = lang === 'id';
  const prefix = id ? '/id' : '';

  return <SiteShell lang={lang}>
    <section className="premiumHero">
      <div className="container premiumHeroGrid">
        <div className="premiumHeroCopy">
          <span className="premiumEyebrow">{id ? 'INLAND CONTAINER TERMINAL • EST. 1993' : 'INLAND CONTAINER TERMINAL • EST. 1993'}</span>
          <h1>{id ? <>Menghubungkan <em>depot, warehouse,</em> dan transportasi.</> : <>Connecting <em>depot, warehouse,</em> and transportation.</>}</h1>
          <p>{id ? 'Lebih dari 30 tahun mendukung pergerakan kontainer melalui layanan depot, repair, pergudangan, dan trucking dari Jakarta dan Semarang.' : 'More than 30 years supporting container movement through depot, repair, warehousing, and trucking services from Jakarta and Semarang.'}</p>
          <div className="premiumHeroActions">
            <Link className="premiumPrimary" href={`${prefix}/services/`}>{id ? 'Jelajahi Layanan' : 'Explore Services'} <Icon name="arrow" size={17}/></Link>
            <Link className="premiumSecondary" href={`${prefix}/contact/`}>{id ? 'Hubungi Kami' : 'Contact Us'}</Link>
          </div>
        </div>
        <HeroVisual/>
      </div>
      <div className="container premiumStats">
        <div><strong>1993</strong><span>{id ? 'Berdiri' : 'Established'}</span></div>
        <div><strong>100,000+ m²</strong><span>{id ? 'Area depot' : 'Depot area'}</span></div>
        <div><strong>Jakarta</strong><span>Tanjung Priok</span></div>
        <div><strong>Semarang</strong><span>Tanjung Emas</span></div>
      </div>
    </section>

    <section className="premiumIntro">
      <div className="container premiumIntroGrid">
        <div>
          <span className="premiumSectionNo">01</span>
          <span className="premiumEyebrow">{id ? 'TENTANG MBPI' : 'ABOUT MBPI'}</span>
        </div>
        <h2>{id ? 'Satu partner untuk kebutuhan logistik kontainer yang saling terhubung.' : 'One partner for connected container logistics.'}</h2>
        <div className="premiumIntroCopy">
          <p>{id ? 'MBPI adalah inland container terminal yang menangani penyimpanan, transit, warehousing, dan bounded cargo dengan dukungan tenaga profesional serta sistem pengelolaan kontainer terkomputerisasi.' : 'MBPI is an inland container terminal handling storage, transit, warehousing, and bounded cargo with qualified professionals and computerized container management.'}</p>
          <Link href={`${prefix}/about-us/`} className="premiumTextLink">{id ? 'Tentang perusahaan' : 'About the company'} <Icon name="arrow" size={16}/></Link>
        </div>
      </div>
    </section>

    <section className="premiumServices">
      <div className="container">
        <div className="premiumSectionHead">
          <div><span className="premiumSectionNo">02</span><span className="premiumEyebrow">{id ? 'LAYANAN' : 'SERVICES'}</span></div>
          <h2>{id ? 'Empat kapabilitas utama dalam satu jaringan operasi.' : 'Four core capabilities in one operating network.'}</h2>
        </div>
        <div className="premiumServiceGrid">
          {services.map((s,i)=><Link key={s.id} href={`${prefix}/services/#${s.id}`} className={`premiumServiceCard premiumServiceCard${i+1}`}>
            <div className="premiumServiceTop"><span>{s.no}</span><Icon name={s.id === 'warehouse' ? 'warehouse' : s.id === 'trucking' ? 'trucking' : s.id === 'repair' ? 'repair' : 'depot'} size={24}/></div>
            <div>
              <h3>{id ? s.titleId : s.titleEn}</h3>
              <p>{id ? s.summaryId : s.summaryEn}</p>
            </div>
            <Icon name="arrow" size={20}/>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="premiumNetwork">
      <div className="container premiumNetworkGrid">
        <div className="premiumNetworkCopy">
          <span className="premiumSectionNo light">03</span>
          <span className="premiumEyebrow premiumEyebrowLight">{id ? 'JARINGAN OPERASI' : 'OPERATING NETWORK'}</span>
          <h2>{id ? 'Dekat pelabuhan. Dekat dengan arus bisnis.' : 'Close to ports. Close to the flow of business.'}</h2>
          <p>{id ? 'Dua lokasi operasi MBPI mendukung container handling, repair, warehousing, dan transportasi di dua koridor pelabuhan utama.' : 'Two MBPI operating locations support container handling, repair, warehousing, and transportation across two major port corridors.'}</p>
          <Link href={`${prefix}/branches/`} className="premiumTextLink lightLink">{id ? 'Lihat cabang' : 'Explore branches'} <Icon name="arrow" size={16}/></Link>
        </div>
        <div className="premiumLocationList">
          <Link href={`${prefix}/facilities/`} className="premiumLocation">
            <div className="locationArt jakartaArt"><span>JKT</span></div>
            <div><small>01 / JAKARTA</small><h3>Tanjung Priok Area</h3><p>Depot • Repair • Warehouse • Trucking</p></div>
            <Icon name="arrow" size={19}/>
          </Link>
          <Link href={`${prefix}/facilities/`} className="premiumLocation">
            <div className="locationArt semarangArt"><span>SMG</span></div>
            <div><small>02 / SEMARANG</small><h3>Tanjung Emas Area</h3><p>Container Yard • Reefer • Handling</p></div>
            <Icon name="arrow" size={19}/>
          </Link>
        </div>
      </div>
    </section>

    <section className="premiumOperations">
      <div className="container">
        <div className="premiumSectionHead">
          <div><span className="premiumSectionNo">04</span><span className="premiumEyebrow">{id ? 'OPERASI' : 'OPERATIONS'}</span></div>
          <h2>{id ? 'Infrastruktur dan kontrol yang bekerja di balik setiap layanan.' : 'Infrastructure and control behind every service.'}</h2>
        </div>
        <div className="premiumOpsGrid">
          {['One-stop services','Integrated Own Build System','Electronic Data Interchange (EDI)','24 hours CCTV and Security','Location near Port','GPS on Trucks'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}
        </div>
      </div>
    </section>

    <section className="premiumCta">
      <div className="container premiumCtaInner">
        <div><span className="premiumEyebrow premiumEyebrowLight">{id ? 'MULAI DARI KEBUTUHAN ANDA' : 'START WITH YOUR REQUIREMENT'}</span><h2>{id ? 'Mari diskusikan kebutuhan logistik Anda.' : 'Let’s discuss your logistics requirement.'}</h2></div>
        <Link href={`${prefix}/contact/`} className="premiumCtaButton">{id ? 'Minta Penawaran' : 'Request a Quote'} <Icon name="arrow" size={18}/></Link>
      </div>
    </section>
  </SiteShell>;
}
