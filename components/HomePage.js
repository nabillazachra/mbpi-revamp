import Link from 'next/link';
import SiteShell from './SiteShell';
import Icon from './Icon';
import { services } from '../content/site';

export default function HomePage({ lang = 'id' }) {
  const id = lang === 'id';
  const prefix = id ? '/id' : '';
  return (
    <SiteShell lang={lang}>
      <section className="mbpiHero">
        <div className="mbpiHeroGrid"></div>
        <div className="container mbpiHeroInner">
          <div className="mbpiHeroCopy">
            <div className="mbpiHeroLabel">
              <span className="statusDot"></span>
              {id ? 'INLAND CONTAINER TERMINAL • JAKARTA / SEMARANG' : 'INLAND CONTAINER TERMINAL • JAKARTA / SEMARANG'}
            </div>
            <h1>{id ? <>Pergerakan kontainer.<br/><span>Dibuat lebih sederhana.</span></> : <>Container movement.<br/><span>Made simpler.</span></>}</h1>
            <p>{id ? 'Depot, repair, warehousing, dan trucking dalam satu jaringan operasi yang dekat dengan pelabuhan utama Indonesia.' : 'Depot, repair, warehousing, and trucking in one operating network positioned close to Indonesia’s major ports.'}</p>
            <div className="mbpiHeroActions">
              <Link className="dispatchBtn" href={`${prefix}/contact/`}>{id ? 'Hubungi Operasional' : 'Contact Operations'} <Icon name="arrow" size={17}/></Link>
              <Link className="ghostBtn" href={`${prefix}/services/`}>{id ? 'Lihat Layanan' : 'View Services'}</Link>
            </div>
          </div>

          <aside className="opsBoard" aria-label="MBPI operational overview">
            <div className="opsBoardHead"><span>{id ? 'OPERATION BOARD' : 'OPERATION BOARD'}</span><b>MBPI / 1993</b></div>
            <div className="opsBoardRows">
              {services.map((s) => (
                <Link key={s.id} href={`${prefix}/services/#${s.id}`} className="opsRow">
                  <span className="opsCode">{s.no}</span>
                  <Icon name={s.id === 'warehouse' ? 'warehouse' : s.id === 'trucking' ? 'trucking' : s.id === 'repair' ? 'repair' : 'depot'} size={20}/>
                  <strong>{id ? s.titleId : s.titleEn}</strong>
                  <Icon name="arrow" size={16}/>
                </Link>
              ))}
            </div>
            <div className="opsBoardFoot">
              <span><i className="greenDot"></i>{id ? 'JAKARTA ACTIVE' : 'JAKARTA ACTIVE'}</span>
              <span><i className="greenDot"></i>{id ? 'SEMARANG ACTIVE' : 'SEMARANG ACTIVE'}</span>
            </div>
          </aside>
        </div>

        <div className="container heroStats">
          <div><small>{id ? 'BERDIRI' : 'ESTABLISHED'}</small><strong>1993</strong></div>
          <div><small>{id ? 'AREA DEPOT' : 'DEPOT AREA'}</small><strong>100,000+ m²</strong></div>
          <div><small>{id ? 'LOKASI OPERASI' : 'OPERATING LOCATIONS'}</small><strong>02</strong></div>
          <div><small>{id ? 'MODEL LAYANAN' : 'SERVICE MODEL'}</small><strong>ONE-STOP</strong></div>
        </div>
      </section>

      <section className="mbpiManifesto">
        <div className="container manifestoGrid">
          <div className="manifestoMark">MBPI</div>
          <div>
            <span className="miniLabel">{id ? 'APA YANG KAMI LAKUKAN' : 'WHAT WE DO'}</span>
            <h2>{id ? 'Menjaga container flow tetap bergerak dari yard ke tujuan.' : 'Keeping container flow moving from yard to destination.'}</h2>
          </div>
          <p>{id ? 'Sebagai inland container terminal, MBPI menangani storage, transit, repair, warehousing, dan transportasi dalam alur yang saling terhubung.' : 'As an inland container terminal, MBPI supports storage, transit, repair, warehousing, and transportation through one connected operating flow.'}</p>
        </div>
      </section>

      <section className="serviceLanes">
        <div className="container">
          <div className="laneHeader">
            <div><span className="miniLabel">{id ? 'SERVICE LANES' : 'SERVICE LANES'}</span><h2>{id ? 'Empat fungsi. Satu operasi.' : 'Four functions. One operation.'}</h2></div>
            <p>{id ? 'Bukan layanan yang berdiri sendiri—setiap fungsi dirancang untuk saling menyambung.' : 'Not isolated services—each function is designed to connect with the next.'}</p>
          </div>
          <div className="laneList">
            {services.map((s, index) => (
              <Link href={`${prefix}/services/#${s.id}`} className={`laneItem laneTone${index % 2}`} key={s.id}>
                <span className="laneNo">{s.no}</span>
                <span className="laneIcon"><Icon name={s.id === 'warehouse' ? 'warehouse' : s.id === 'trucking' ? 'trucking' : s.id === 'repair' ? 'repair' : 'depot'} size={26}/></span>
                <h3>{id ? s.titleId : s.titleEn}</h3>
                <p>{id ? s.summaryId : s.summaryEn}</p>
                <span className="laneArrow"><Icon name="arrow" size={20}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="networkSection">
        <div className="container networkGrid">
          <div className="networkIntro">
            <span className="miniLabel lightMini">{id ? 'PORT NETWORK' : 'PORT NETWORK'}</span>
            <h2>{id ? 'Dua titik operasi dekat pelabuhan utama.' : 'Two operating points near major ports.'}</h2>
            <p>{id ? 'Jakarta dan Semarang menjadi basis operasi untuk container handling, warehousing, repair, dan transportasi.' : 'Jakarta and Semarang form the operating base for container handling, warehousing, repair, and transportation.'}</p>
            <Link href={`${prefix}/facilities/`} className="networkLink">{id ? 'Jelajahi fasilitas' : 'Explore facilities'} <Icon name="arrow" size={17}/></Link>
          </div>

          <div className="routeMap" aria-label="Jakarta and Semarang operational network">
            <div className="routeLine"></div>
            <div className="routeNode nodeJakarta">
              <span className="routePulse"></span>
              <div><small>JAKARTA</small><strong>Tanjung Priok Area</strong><p>Depot • CFS • Repair • Trucking</p></div>
            </div>
            <div className="routeNode nodeSemarang">
              <span className="routePulse"></span>
              <div><small>SEMARANG</small><strong>Tanjung Emas Area</strong><p>Depot • Supporting Operations</p></div>
            </div>
            <div className="routeMeta">
              <span>{id ? 'NETWORK STATUS' : 'NETWORK STATUS'}</span><b>CONNECTED</b>
            </div>
          </div>
        </div>
      </section>

      <section className="opsStrip">
        <div className="container opsStripInner">
          <span>EDI</span><i></i><span>24H CCTV</span><i></i><span>GPS FLEET</span><i></i><span>REEFER SUPPORT</span><i></i><span>NEAR PORT</span><i></i><span>ONE-STOP SERVICE</span>
        </div>
      </section>

      <section className="dispatchSection">
        <div className="container dispatchGrid">
          <div className="dispatchCopy">
            <span className="miniLabel">{id ? 'DISPATCH DESK' : 'DISPATCH DESK'}</span>
            <h2>{id ? 'Mulai dari kebutuhan operasional Anda.' : 'Start with your operational requirement.'}</h2>
            <p>{id ? 'Pilih kebutuhan Anda, lalu hubungi tim yang relevan tanpa harus mencari kontak satu per satu.' : 'Start with your requirement and reach the relevant team without searching through multiple contacts.'}</p>
          </div>
          <div className="dispatchPanel">
            <Link href={`${prefix}/contact/`}><span>{id ? 'Depot / Repair' : 'Depot / Repair'}</span><Icon name="arrow" size={18}/></Link>
            <Link href={`${prefix}/contact/`}><span>{id ? 'Warehouse / CFS' : 'Warehouse / CFS'}</span><Icon name="arrow" size={18}/></Link>
            <Link href={`${prefix}/contact/`}><span>{id ? 'Trucking' : 'Trucking'}</span><Icon name="arrow" size={18}/></Link>
            <Link className="dispatchPrimary" href={`${prefix}/contact/`}><span>{id ? 'Minta Penawaran' : 'Request a Quote'}</span><Icon name="arrow" size={18}/></Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
