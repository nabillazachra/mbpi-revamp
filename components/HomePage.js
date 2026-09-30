import Link from 'next/link';
import SiteShell from './SiteShell';
import Icon from './Icon';
import { services } from '../content/site';

function HeroVisual(){
  return <div className="premiumHeroVisual photoLed" aria-label="MBPI container terminal operations">
    <img src="https://mbpi.co.id/wp-content/uploads/elementor/thumbs/IMG-7956412017-1-ox4l1zsaqwt0ca1q5wzebbahjfr181vlen8y5jbvog.jpeg" alt="MBPI Jakarta container terminal"/>
    <div className="heroPhotoOverlay"></div>
    <div className="heroPhotoMeta">
      <span>JAKARTA OPERATIONS</span>
      <strong>Container yard • CFS • Repair • Trucking</strong>
    </div>
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

    <section className="premiumCustomers">
      <div className="container">
        <div className="customerIntro">
          <span className="premiumEyebrow">{id ? 'OUR CUSTOMERS' : 'OUR CUSTOMERS'}</span>
          <p>{id ? 'Customer dan partner yang ditampilkan pada website existing MBPI.' : 'Customers and partners presented on the existing MBPI website.'}</p>
        </div>
        <div className="customerLogoGrid">
          <div><img src="https://mbpi.co.id/wp-content/uploads/elementor/thumbs/1030px-Evergreen_Line_Logo.svg-oyapn3igt9n8773iulnftlevhxp9q6h0qnzbm4a4p6.png" alt="Evergreen Line"/></div>
          <div><img src="https://mbpi.co.id/wp-content/uploads/elementor/thumbs/triton-international-limited-logo-vector33-oyauh3exx7u1cmcutt99doqm5o3al589zvf1q2akwa.png" alt="Triton International"/></div>
          <div><img src="https://mbpi.co.id/wp-content/uploads/elementor/thumbs/sea-cube-oyaul9t4apjwy8aefm9kgmsd7bi0sptbwjsqic3l8q.png" alt="SeaCube"/></div>
          <div><img src="https://mbpi.co.id/wp-content/uploads/elementor/thumbs/logo-oyau36eyqis7ggkl3ap3yp5xjaonmgzcezp8xkxf0q.png" alt="Econship"/></div>
          <div><img src="https://mbpi.co.id/wp-content/uploads/elementor/thumbs/logoawdawd-oyauo57d6hhgfc47nuyj2wp2jpcebf7syrk5arua8a.png" alt="Maxicon"/></div>
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
          <p>{id ? 'Jakarta telah mendukung container depot, warehousing, container repair, dan transportation sejak 1993 melalui PT Multi Bina Pura International dan PT Multi Binatransport. Sejak 2016, MBPI memperluas bisnis dengan branch office dan depot di Semarang.' : 'Jakarta has supported container depot, warehousing, container repair, and transportation since 1993 through PT Multi Bina Pura International and PT Multi Binatransport. Since 2016, MBPI has expanded with a branch office and depot in Semarang.'}</p>
          <Link href={`${prefix}/branches/`} className="premiumTextLink lightLink">{id ? 'Lihat cabang' : 'Explore branches'} <Icon name="arrow" size={16}/></Link>
        </div>
        <div className="premiumLocationList">
          <Link href={`${prefix}/branches/jakarta/`} className="premiumLocation">
            <div className="locationArt jakartaArt"><span>JKT</span></div>
            <div><small>01 / JAKARTA</small><h3>Tanjung Priok Area</h3><p>Depot • Repair • Warehouse • Trucking</p></div>
            <Icon name="arrow" size={19}/>
          </Link>
          <Link href={`${prefix}/branches/semarang/`} className="premiumLocation">
            <div className="locationArt semarangArt"><span>SMG</span></div>
            <div><small>02 / SEMARANG</small><h3>Tanjung Emas Area</h3><p>Container Yard • Reefer • Handling</p></div>
            <Icon name="arrow" size={19}/>
          </Link>
        </div>
      </div>
    </section>

    <section className="premiumGallery">
      <div className="container">
        <div className="premiumSectionHead">
          <div><span className="premiumSectionNo">04</span><span className="premiumEyebrow">GALLERY</span></div>
          <h2>{id ? 'Aktivitas dan fasilitas MBPI.' : 'MBPI activities and facilities.'}</h2>
        </div>
        <div className="galleryGrid">
          <figure className="galleryLarge">
            <img loading="lazy" src="https://mbpi.co.id/wp-content/uploads/elementor/thumbs/IMG-7956412017-1-ox4l1zsaqwt0ca1q5wzebbahjfr181vlen8y5jbvog.jpeg" alt="MBPI Jakarta facility"/>
            <figcaption><span>JAKARTA</span><strong>{id ? 'Operasi Cakung–Cilincing' : 'Cakung–Cilincing operations'}</strong></figcaption>
          </figure>
          <figure>
            <img loading="lazy" src="https://mbpi.co.id/wp-content/uploads/elementor/thumbs/DSCN0168-oxkdcyfuzdkzya9h6wyas2d4xu4m8xjh93x9jemecg.jpg" alt="MBPI Semarang facility"/>
            <figcaption><span>SEMARANG</span><strong>{id ? 'Branch office & depot' : 'Branch office & depot'}</strong></figcaption>
          </figure>
          <div className="galleryStatement">
            <span className="premiumEyebrow">{id ? 'OUR COMPANY ACTIVITIES & FACILITIES' : 'OUR COMPANY ACTIVITIES & FACILITIES'}</span>
            <p>{id ? 'Gallery pada website existing dipertahankan sebagai elemen visual utama, bukan sekadar dekorasi.' : 'The legacy gallery is retained as a primary visual element rather than decoration.'}</p>
            <Link href={`${prefix}/facilities/`} className="premiumTextLink">{id ? 'Lihat fasilitas lengkap' : 'Explore facilities'} <Icon name="arrow" size={16}/></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="premiumOperations">
      <div className="container">
        <div className="premiumSectionHead">
          <div><span className="premiumSectionNo">05</span><span className="premiumEyebrow">{id ? 'OPERASI' : 'OPERATIONS'}</span></div>
          <h2>{id ? 'Infrastruktur dan kontrol yang bekerja di balik setiap layanan.' : 'Infrastructure and control behind every service.'}</h2>
        </div>
        <div className="operationCapabilityGrid">
          {[
            {no:'01',label:id?'MODEL LAYANAN':'SERVICE MODEL',title:'One-stop services',desc:id?'Depot, warehousing, repair, dan trucking terhubung dalam satu ekosistem operasi.':'Depot, warehousing, repair, and trucking connected in one operating ecosystem.',icon:'blocks'},
            {no:'02',label:id?'SISTEM DIGITAL':'DIGITAL SYSTEM',title:'Integrated Own Build System',desc:id?'Sistem internal mendukung kontrol proses, visibility, dan koordinasi operasional.':'In-house systems support process control, visibility, and operational coordination.',icon:'system'},
            {no:'03',label:id?'PERTUKARAN DATA':'DATA EXCHANGE',title:'Electronic Data Interchange (EDI)',desc:id?'Pertukaran data digital membantu mempercepat koordinasi dengan customer dan partner.':'Digital data exchange helps accelerate coordination with customers and partners.',icon:'edi'},
            {no:'04',label:id?'KEAMANAN':'SECURITY',title:'24 hours CCTV and Security',desc:id?'Monitoring berkelanjutan dan kontrol akses mendukung keamanan fasilitas dan cargo.':'Continuous monitoring and access control support facility and cargo security.',icon:'cctv'},
            {no:'05',label:id?'LOKASI':'LOCATION',title:'Location near Port',desc:id?'Lokasi strategis mendukung mobilitas kontainer dan turnaround operasional yang lebih efisien.':'Strategic proximity supports container movement and more efficient operational turnaround.',icon:'port'},
            {no:'06',label:id?'KONTROL ARMADA':'FLEET CONTROL',title:'GPS on Trucks',desc:id?'Tracking armada meningkatkan visibility rute, koordinasi, dan kontrol pengiriman.':'Fleet tracking improves route visibility, coordination, and delivery control.',icon:'route'}
          ].map((item)=><article className="operationCapabilityCard" key={item.no}>
            <div className="operationCardTop">
              <span className="operationNo">{item.no}</span>
              <div className="operationIcon"><Icon name={item.icon} size={25}/></div>
            </div>
            <div className="operationCardBody">
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <div className="operationCardFoot"><Icon name="arrow" size={17}/></div>
          </article>)}
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
