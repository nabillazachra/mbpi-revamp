import Link from 'next/link';
import SiteShell from './SiteShell';
import Icon from './Icon';
import { site } from '../content/site';

const branchData = {
  jakarta: {
    year:'1993',
    city:'Jakarta',
    company:['PT Multi Bina Pura International','PT Multi Binatransport'],
    image:'https://mbpi.co.id/wp-content/uploads/elementor/thumbs/IMG-7956412017-1-ox4l1zsaqwt0ca1q5wzebbahjfr181vlen8y5jbvog.jpeg',
    services:['Container Depot','Container Repair','Warehousing / CFS','Trucking'],
    id:'Sejak 1993, kantor Jakarta menjalankan layanan container depot, warehousing, container repair, dan transportation yang saling mendukung dari kawasan Cakung-Cilincing, Jakarta Utara.',
    en:'Since 1993, the Jakarta office has operated mutually supporting container depot, warehousing, container repair, and transportation services from Cakung-Cilincing, North Jakarta.'
  },
  semarang: {
    year:'2016',
    city:'Semarang',
    company:['PT Multi Bina Pura International (Semarang)'],
    image:'https://mbpi.co.id/wp-content/uploads/elementor/thumbs/DSCN0168-oxkdcyfuzdkzya9h6wyas2d4xu4m8xjh93x9jemecg.jpg',
    services:['Container Yard','Side Loader','Forklift','Reefer Support'],
    id:'Sejak 2016, MBPI memperluas bisnis dengan membuka branch office dan depot di Semarang, Jawa Tengah, untuk mendukung operasi container handling dan kebutuhan logistik di sekitar Pelabuhan Tanjung Emas.',
    en:'Since 2016, MBPI has expanded its business by establishing a branch office and depot in Semarang, Central Java, supporting container handling and logistics around Tanjung Emas Port.'
  }
};

export default function BranchDetailPage({ lang='id', branch='jakarta' }) {
  const id = lang === 'id';
  const prefix = id ? '/id' : '';
  const data = branchData[branch];
  const office = site.offices[branch];

  return <SiteShell lang={lang}>
    <section className="branchHero">
      <img src={data.image} alt={`${data.city} branch`} />
      <div className="branchHeroShade"></div>
      <div className="container branchHeroContent">
        <span className="premiumEyebrow premiumEyebrowLight">{id ? 'CABANG' : 'BRANCH'} / {data.year}</span>
        <h1>{data.city}</h1>
        <p>{id ? 'Bagian dari jaringan operasi MBPI.' : 'Part of the MBPI operating network.'}</p>
      </div>
    </section>

    <section className="branchStory">
      <div className="container branchStoryGrid">
        <div>
          <span className="branchStoryYear">{data.year}</span>
          <span className="premiumEyebrow">{id ? 'MILESTONE' : 'MILESTONE'}</span>
        </div>
        <div>
          {data.company.map(name => <h2 key={name}>{name}</h2>)}
          <p>{id ? data.id : data.en}</p>
        </div>
      </div>
    </section>

    <section className="branchCapabilities">
      <div className="container">
        <div className="premiumSectionHead">
          <div><span className="premiumSectionNo">02</span><span className="premiumEyebrow">{id ? 'KAPABILITAS LOKASI' : 'LOCATION CAPABILITIES'}</span></div>
          <h2>{id ? 'Layanan yang tersedia dari lokasi ini.' : 'Services available from this location.'}</h2>
        </div>
        <div className="branchServiceStrip">
          {data.services.map((service,index)=><div key={service}><span>0{index+1}</span><strong>{service}</strong></div>)}
        </div>
      </div>
    </section>

    <section className="branchContactSection">
      <div className="container branchContactGrid">
        <div className="branchAddressCard">
          <Icon name="location" size={22}/>
          <span className="premiumEyebrow">{id ? 'ALAMAT' : 'ADDRESS'}</span>
          <h3>{data.city}</h3>
          <p>{office.address}</p>
          <div className="branchPhoneList">
            {(office.phones || []).map(phone => <a key={phone} href={`tel:${phone.replace(/\s/g,'')}`}>{phone}</a>)}
            {office.email && <a href={`mailto:${office.email}`}>{office.email}</a>}
          </div>
        </div>
        <div className="branchNextActions">
          <Link href={branch === 'jakarta' ? `${prefix}/jakarta-facility/` : `${prefix}/semarang-facility/`}>
            <span>{id ? 'DETAIL FASILITAS' : 'FACILITY DETAILS'}</span>
            <strong>{id ? `Lihat fasilitas ${data.city}` : `Explore ${data.city} facility`}</strong>
            <Icon name="arrow" size={20}/>
          </Link>
          <Link href={`${prefix}/contact/`}>
            <span>{id ? 'KONTAK' : 'CONTACT'}</span>
            <strong>{id ? 'Hubungi tim operasional' : 'Contact the operations team'}</strong>
            <Icon name="arrow" size={20}/>
          </Link>
        </div>
      </div>
    </section>
  </SiteShell>;
}
