import Link from 'next/link';
import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import FacilityMotion from './FacilityMotion';
import { site } from '../content/site';

function MetricCard({ title, fields, values }) {
  return <article className="facilityMetricCard" data-reveal="metric">
    <h4>{title}</h4>
    <div className="metricFields">
      {fields.map((field, index) => <div key={field + index}>
        <strong>{values?.[index] ?? 'Belum terbaca'}</strong>
        <span>{field}</span>
      </div>)}
    </div>
  </article>;
}

function PublishedFacts({ facts }) {
  return <div className="publishedFacts" data-reveal="facts">
    {facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
  </div>;
}

function FacilityPhoto({ city }) {
  const isJakarta = city === 'Jakarta';
  return <figure className="facilityPhoto" data-reveal="photo">
    <img src={isJakarta
      ? 'https://mbpi.co.id/wp-content/uploads/elementor/thumbs/IMG-7956412017-1-ox4l1zsaqwt0ca1q5wzebbahjfr181vlen8y5jbvog.jpeg'
      : 'https://mbpi.co.id/wp-content/uploads/elementor/thumbs/DSCN0168-oxkdcyfuzdkzya9h6wyas2d4xu4m8xjh93x9jemecg.jpg'} alt={`MBPI ${city} facility`} />
    <div className="facilityPhotoShade"></div>
    <figcaption><span>{city.toUpperCase()}</span><strong>MBPI Facility</strong></figcaption>
  </figure>;
}

function FeatureList({ items }) {
  return <div className="facilityFeatureList" data-reveal="features">
    {items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}
  </div>;
}

function JakartaFacility({ lang }) {
  const id = lang === 'id';
  return <section className="facilityDetail">
    <FacilityPhoto city="Jakarta"/>
    <div className="facilityDetailHeader" data-reveal="header">
      <div><span className="sectionIndex">01</span><span className="kicker">JAKARTA FACILITY</span></div>
      <div>
        <h2>{id ? 'Fasilitas Jakarta' : 'Jakarta Facility'}</h2>
        <p>{id ? 'Berlokasi di timur laut Kota Jakarta, sekitar 11 km dari Pelabuhan Tanjung Priok.' : 'Located in north-east Jakarta, approximately 11 km from Tanjung Priok Port.'}</p>
        <PublishedFacts facts={[
          ['100,000+ m²', id ? 'Area depot' : 'Depot area'],
          ['11 km', id ? 'Jarak ke Pelabuhan Tanjung Priok' : 'Distance to Tanjung Priok Port'],
          ['4 m', id ? 'Lebar loading dock' : 'Loading dock width'],
          ['12', id ? 'Truk/trailer sekaligus per gudang' : 'Trucks/trailers simultaneously per warehouse'],
          ['100', id ? 'Kontainer kosong pada area stuffing' : 'Empty containers in stuffing area']
        ]}/>
      </div>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>AREA</span><h3>Container Yard</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title={id ? 'Luas Total Container Yard' : 'Total Container Yard Area'} fields={['m²']} values={['±129,691']} />
        <MetricCard title={id ? 'Kapasitas Penyimpanan' : 'Storage Capacity'} fields={['TEUs']} values={['8,156']} />
      </div>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>WAREHOUSE</span><h3>{id ? 'Gudang' : 'Warehouse'}</h3></div>
      <FeatureList items={id ? [
        'Loading Dock dengan lebar 4 meter.',
        'Loading Dock mampu mengakomodasi 12 truk/trailer sekaligus pada masing-masing gudang.',
        'Area Stuffing tersedia untuk 100 kontainer kosong.'
      ] : [
        '4-metre-wide Loading Dock.',
        'Loading Dock accommodates up to 12 trucks/trailers simultaneously at each warehouse.',
        'Stuffing Area is available for 100 empty containers.'
      ]}/>
    </div>

    <div className="facilityDetailSection splitSections" data-reveal="section">
      <div>
        <div className="facilitySectionTitle"><span>CFS I</span><h3>CFS I</h3></div>
        <div className="facilityMetricGrid">
          <MetricCard title={id ? 'Area Dalam Gudang' : 'Indoor Warehouse Area'} fields={['m²']} values={['3,966']} />
          <MetricCard title="Loading Dock" fields={['m²']} values={['864']} />
        </div>
      </div>
      <div>
        <div className="facilitySectionTitle"><span>CFS III</span><h3>CFS III</h3></div>
        <div className="facilityMetricGrid">
          <MetricCard title={id ? 'Area Dalam Gudang' : 'Indoor Warehouse Area'} fields={['m²']} values={['4,218']} />
          <MetricCard title="Loading Dock" fields={['m²']} values={['912']} />
        </div>
      </div>
    </div>

    <div className="facilityEquipmentHeader" data-reveal="equipment">
      <span className="sectionIndex">EQUIPMENT</span>
      <h2>{id ? 'Peralatan Jakarta' : 'Jakarta Equipment'}</h2>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>EMPTY</span><h3>Empty Container Equipment</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title="Side Loader / 7 High" fields={[id ? 'High / Tier' : 'High / Tier', id ? 'Unit' : 'Units']} values={['7','3']} />
        <MetricCard title="Side Loader / 8 High" fields={[id ? 'High / Tier' : 'High / Tier', id ? 'Unit' : 'Units']} values={['8','3']} />
      </div>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>FULL</span><h3>Full Container Equipment</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title="Reach Stacker" fields={['Ton', id ? 'Unit' : 'Units']} values={['45','1']} />
        <MetricCard title="Top Loader" fields={['Ton', id ? 'Unit' : 'Units']} values={['36','1']} />
      </div>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>LIFTING</span><h3>Forklift</h3></div>
      <div className="facilityMetricGrid four">
        <MetricCard title={id ? 'Forklift Elektrik' : 'Electric Forklift'} fields={['Ton', id ? 'Unit' : 'Units']} values={['3','4']} />
        <MetricCard title={id ? 'Forklift Diesel / 2.5 Ton' : 'Diesel Forklift / 2.5 Ton'} fields={['Ton', id ? 'Unit' : 'Units']} values={['2.5','5']} />
        <MetricCard title={id ? 'Forklift Diesel / 3 Ton' : 'Diesel Forklift / 3 Ton'} fields={['Ton', id ? 'Unit' : 'Units']} values={['3','5']} />
        <MetricCard title={id ? 'Forklift Diesel / 10 Ton' : 'Diesel Forklift / 10 Ton'} fields={['Ton', id ? 'Unit' : 'Units']} values={['10','1']} />
      </div>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>REEFER</span><h3>Reefer Container Plug</h3></div>
      <div className="facilityMetricGrid">
        <MetricCard title="Socket" fields={['A / (380–400V)', id ? 'Unit' : 'Units']} values={['32','32']} />
      </div>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>TRAILER</span><h3>Trailer Truck</h3></div>
      <div className="facilityMetricGrid four">
        <MetricCard title="Head Truck / 60 Ton" fields={['Ton', id ? 'Unit' : 'Units']} values={['60','5']} />
        <MetricCard title="Head Truck / 50 Ton" fields={['Ton', id ? 'Unit' : 'Units']} values={['50','4']} />
        <MetricCard title="Head Truck / 42 Ton" fields={['Ton', id ? 'Unit' : 'Units']} values={['42','20']} />
        <MetricCard title="Head Truck / 30 Ton" fields={['Ton', id ? 'Unit' : 'Units']} values={['30','10']} />
        <MetricCard title="Container Chassis / 40 Feet" fields={['Feet', id ? 'Unit' : 'Units']} values={['40','55']} />
        <MetricCard title="Container Chassis / 20 Feet" fields={['Feet', id ? 'Unit' : 'Units']} values={['20','24']} />
      </div>
    </div>

    <div className="facilityLocationBar"><Icon name="location" size={18}/><span>{site.offices.jakarta.address}</span></div>
  </section>;
}

function SemarangFacility({ lang }) {
  const id = lang === 'id';
  return <section className="facilityDetail facilitySemarang">
    <FacilityPhoto city="Semarang"/>
    <div className="facilityDetailHeader" data-reveal="header">
      <div><span className="sectionIndex">02</span><span className="kicker">SEMARANG FACILITY</span></div>
      <div>
        <h2>{id ? 'Fasilitas Semarang' : 'Semarang Facility'}</h2>
        <p>{id ? 'Berlokasi di sisi utara Semarang, sekitar 4 km dari Pelabuhan Tanjung Emas.' : 'Located on the north side of Semarang, approximately 4 km from Tanjung Emas Port.'}</p>
        <PublishedFacts facts={[
          ['±16,400 m²', id ? 'Total Container Yard Area' : 'Total Container Yard Area'],
          ['4,140 TEUs', id ? 'Kapasitas penyimpanan' : 'Storage capacity'],
          ['4 km', id ? 'Jarak ke Pelabuhan Tanjung Emas' : 'Distance to Tanjung Emas Port']
        ]}/>
      </div>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>AREA</span><h3>Container Yard</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title={id ? 'Luas Total Container Yard' : 'Total Container Yard Area'} fields={['m²']} values={['±16,400']} />
        <MetricCard title={id ? 'Kapasitas Penyimpanan' : 'Storage Capacity'} fields={['TEUs']} values={['4,140']} />
      </div>
    </div>

    <div className="facilityEquipmentHeader" data-reveal="equipment">
      <span className="sectionIndex">EQUIPMENT</span>
      <h2>{id ? 'Peralatan Semarang' : 'Semarang Equipment'}</h2>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>EMPTY</span><h3>Empty Container Equipment</h3></div>
      <div className="facilityMetricGrid">
        <MetricCard title="Side Loader" fields={['Tier', id ? 'Unit' : 'Units']} values={['8','2']} />
      </div>
    </div>

    <div className="facilityDetailSection" data-reveal="section">
      <div className="facilitySectionTitle"><span>LIFTING</span><h3>Forklift & Reefer</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title={id ? 'Forklift Diesel' : 'Diesel Forklift'} fields={['Ton', id ? 'Unit' : 'Units']} values={['2.5','1']} />
        <MetricCard title="Socket" fields={['A / (380–400V)', id ? 'Unit' : 'Units']} values={['32','10']} />
      </div>
    </div>

    <div className="facilityLocationBar"><Icon name="location" size={18}/><span>{site.offices.semarang.address}</span></div>
  </section>;
}

export default function FacilitiesPage({ lang='id', focus=null }) {
  const id = lang === 'id';
  const prefix = id ? '/id' : '';
  return <SiteShell lang={lang}>
    <FacilityMotion/>
    <PageHero index="04" kicker={id ? 'FASILITAS' : 'FACILITIES'}
      title={focus === 'jakarta' ? (id ? 'Infrastruktur operasional Jakarta.' : 'Jakarta operational infrastructure.') : focus === 'semarang' ? (id ? 'Infrastruktur operasional Semarang.' : 'Semarang operational infrastructure.') : (id ? 'Infrastruktur untuk operasional kontainer end-to-end.' : 'Infrastructure for end-to-end container operations.')}
      intro={focus === 'jakarta' ? (id ? 'Container yard, CFS, warehouse, reefer support, dan equipment yang mendukung operasi MBPI di Jakarta.' : 'Container yard, CFS, warehouse, reefer support, and equipment supporting MBPI operations in Jakarta.') : focus === 'semarang' ? (id ? 'Container yard, side loader, forklift, dan reefer support untuk mendukung operasi MBPI di Semarang.' : 'Container yard, side loader, forklift, and reefer support for MBPI operations in Semarang.') : (id ? 'Fasilitas Jakarta dan Semarang mendukung container handling, warehousing, repair, reefer, dan transportasi dalam satu jaringan operasi.' : 'Jakarta and Semarang facilities support container handling, warehousing, repair, reefer, and transportation across one operating network.')}/>
    <section className="facilityPageWrap"><div className="container">
      {(!focus || focus === 'jakarta') && <JakartaFacility lang={lang}/>}
      {(!focus || focus === 'semarang') && <SemarangFacility lang={lang}/>}
    </div></section>
    <section className="ctaBand"><div className="container ctaInner"><div><div className="kicker lightKicker">{id ? 'BUTUH DETAIL FASILITAS?' : 'NEED FACILITY DETAILS?'}</div><h2>{id ? 'Hubungi tim MBPI untuk informasi fasilitas dan kapasitas operasional.' : 'Contact MBPI for facility and operational capacity information.'}</h2></div><Link className="lightBtn" href={`${prefix}/contact/`}>{id ? 'Hubungi Kami' : 'Contact Us'} <Icon name="arrow" size={18}/></Link></div></section>
  </SiteShell>;
}
