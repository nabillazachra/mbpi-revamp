import SiteShell from './SiteShell';
import PageHero from './PageHero';
import { values } from '../content/site';

export default function AboutPage({ lang='id' }) {
  const id = lang === 'id';
  return <SiteShell lang={lang}>
    <PageHero index="01" kicker={id ? 'TENTANG MBPI' : 'ABOUT MBPI'} title={id ? 'Lebih dari 30 tahun dalam pengelolaan logistik kontainer.' : 'More than 30 years in container logistics management.'} intro={id ? 'MBPI merupakan inland container terminal yang menangani penyimpanan kontainer, transit, pergudangan, dan bounded cargo dengan tenaga profesional serta sistem pengelolaan kontainer terkomputerisasi.' : 'MBPI is an inland container terminal handling container storage, transit, warehousing, and bounded cargo with qualified professionals and computerized container management.'}/>
    <section className="section">
      <div className="container aboutStatement">
        <div><span className="sectionIndex">01A</span><h2>{id ? 'Profil perusahaan' : 'Company profile'}</h2></div>
        <div>
          <p>{id ? 'Selama lebih dari 30 tahun, MBPI didukung tenaga profesional dan personel teknis berkualifikasi yang berpengalaman dalam pengelolaan kontainer terkomputerisasi pada container terminal dan stacking yard.' : 'For more than 30 years, MBPI has been supported by qualified professional and technical personnel experienced in computerized container management at container terminals and stacking yards.'}</p>
          <p>{id ? 'MBPI melayani main carriers, container leasing companies, dan partner logistik lainnya, sekaligus berperan sebagai common operator dengan layanan one-stop yang mencakup depot, repair, warehousing, dan trucking.' : 'MBPI serves major carriers, container leasing companies, and logistics partners, while also acting as a common operator through one-stop depot, repair, warehousing, and trucking services.'}</p>
          <div className="tagRow">
            <span>{id ? 'Main Carriers' : 'Main Carriers'}</span>
            <span>{id ? 'Container Leasing Companies' : 'Container Leasing Companies'}</span>
            <span>{id ? 'Common Operator' : 'Common Operator'}</span>
            <span>{id ? 'Computerized Container Management' : 'Computerized Container Management'}</span>
          </div>
        </div>
      </div>
    </section>
    <section className="section valuesBand"><div className="container"><div className="sectionHead compact"><div><span className="sectionIndex">02</span><span className="kicker">{id ? 'NILAI INTI' : 'CORE VALUES'}</span></div><h2>{id ? 'Prinsip yang menjaga kualitas operasi.' : 'Principles that protect operational quality.'}</h2></div><div className="valueGrid">{values.map((v,i)=><article key={v}><span>0{i+1}</span><h3>{v}</h3></article>)}</div></div></section>
    <section className="section darkBand"><div className="container missionGrid"><div><div className="kicker lightKicker">{id ? 'VISI' : 'VISION'}</div><h2>{id ? 'Menjadi partner bernilai melalui layanan logistik satu atap.' : 'To be a valuable partner through one-stop logistics services.'}</h2></div><div><div className="kicker lightKicker">{id ? 'MISI' : 'MISSION'}</div><p>{id ? 'Memberikan kemudahan bagi mitra melalui layanan terintegrasi, personel berkualifikasi, dan fasilitas berstandar tinggi.' : 'Bring convenience to partners through integrated services, qualified personnel, and high-standard facilities.'}</p></div></div></section>
  </SiteShell>;
}
