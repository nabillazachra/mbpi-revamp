import Link from 'next/link';
import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

function MetricCard({ title, fields, values }) {
  const verified = Array.isArray(values) && values.length > 0;
  return <article className="facilityMetricCard">
    <span className={`metricStatus ${verified ? 'isVerified' : ''}`}>{verified ? 'VERIFIED FROM LEGACY FACILITY SCREENSHOT' : 'SOURCE VALUE TO VERIFY'}</span>
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
  return <div className="publishedFacts">
    {facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
  </div>;
}

function FeatureList({ items }) {
  return <div className="facilityFeatureList">
    {items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}
  </div>;
}

function JakartaFacility({ lang }) {
  const id = lang === 'id';
  return <section className="facilityDetail">
    <div className="facilityDetailHeader">
      <div><span className="sectionIndex">01</span><span className="kicker">JAKARTA FACILITY</span></div>
      <div>
        <h2>{id ? 'Fasilitas Jakarta' : 'Jakarta Facility'}</h2>
        <p>{id ? 'Berlokasi di timur laut Kota Jakarta, sekitar 11 km dari Pelabuhan Tanjung Priok.' : 'Located in north-east Jakarta, approximately 11 km from Tanjung Priok Port.'}</p>
        <PublishedFacts facts={[
          ['100,000+ m²', id ? 'Area depot yang dipublikasikan pada halaman Services' : 'Depot area published on Services'],
          ['11 km', id ? 'Jarak ke Pelabuhan Tanjung Priok' : 'Distance to Tanjung Priok Port'],
          ['4 m', id ? 'Lebar loading dock' : 'Loading dock width'],
          ['12', id ? 'Truk/trailer sekaligus per gudang' : 'Trucks/trailers simultaneously per warehouse'],
          ['100', id ? 'Kontainer kosong pada area stuffing' : 'Empty containers in stuffing area']
        ]}/>
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>AREA</span><h3>Container Yard</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title={id ? 'Luas Total Container Yard' : 'Total Container Yard Area'} fields={['m²']} values={['±129,691']} />
        <MetricCard title={id ? 'Kapasitas Penyimpanan' : 'Storage Capacity'} fields={['TEUs']} values={['8,156']} />
      </div>
    </div>

    <div className="facilityDetailSection">
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

    <div className="facilityDetailSection splitSections">
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

    <div className="facilityEquipmentHeader">
      <span className="sectionIndex">EQUIPMENT</span>
      <h2>{id ? 'Peralatan Jakarta' : 'Jakarta Equipment'}</h2>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>EMPTY</span><h3>Empty Container Equipment</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title="Side Loader / 7 High" fields={[id ? 'High / Tier' : 'High / Tier', id ? 'Unit' : 'Units']} values={['7','3']} />
        <MetricCard title="Side Loader / 8 High" fields={[id ? 'High / Tier' : 'High / Tier', id ? 'Unit' : 'Units']} values={['8','3']} />
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>FULL</span><h3>Full Container Equipment</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title="Reach Stacker" fields={['Ton', id ? 'Unit' : 'Units']} values={['45','1']} />
        <MetricCard title="Top Loader" fields={['Ton', id ? 'Unit' : 'Units']} values={['36','1']} />
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>LIFTING</span><h3>Forklift</h3></div>
      <div className="facilityMetricGrid four">
        <MetricCard title={id ? 'Forklift Elektrik' : 'Electric Forklift'} fields={['Ton', id ? 'Unit' : 'Units']} values={['3','4']} />
        <MetricCard title={id ? 'Forklift Diesel / 2.5 Ton' : 'Diesel Forklift / 2.5 Ton'} fields={['Ton', id ? 'Unit' : 'Units']} values={['2.5','5']} />
        <MetricCard title={id ? 'Forklift Diesel / 3 Ton' : 'Diesel Forklift / 3 Ton'} fields={['Ton', id ? 'Unit' : 'Units']} values={['3','5']} />
        <MetricCard title={id ? 'Forklift Diesel / 10 Ton' : 'Diesel Forklift / 10 Ton'} fields={['Ton', id ? 'Unit' : 'Units']} values={['10','1']} />
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>REEFER</span><h3>Reefer Container Plug</h3></div>
      <div className="facilityMetricGrid">
        <MetricCard title="Socket" fields={['A / (380–400V)', id ? 'Unit' : 'Units']} values={['32','32']} />
      </div>
    </div>

    <div className="facilityDetailSection">
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
    <div className="facilityDetailHeader">
      <div><span className="sectionIndex">02</span><span className="kicker">SEMARANG FACILITY</span></div>
      <div>
        <h2>{id ? 'Fasilitas Semarang' : 'Semarang Facility'}</h2>
        <p>{id ? 'Berlokasi di sisi utara Semarang, sekitar 4 km dari Pelabuhan Tanjung Emas.' : 'Located on the north side of Semarang, approximately 4 km from Tanjung Emas Port.'}</p>
        <PublishedFacts facts={[
          ['4 km', id ? 'Jarak ke Pelabuhan Tanjung Emas' : 'Distance to Tanjung Emas Port']
        ]}/>
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>AREA</span><h3>Container Yard</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title={id ? 'Luas Total Container Yard' : 'Total Container Yard Area'} fields={['㎡']} />
        <MetricCard title={id ? 'Kapasitas Penyimpanan' : 'Storage Capacity'} fields={['TEUs']} />
      </div>
    </div>

    <div className="facilityEquipmentHeader">
      <span className="sectionIndex">EQUIPMENT</span>
      <h2>{id ? 'Peralatan Semarang' : 'Semarang Equipment'}</h2>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>EMPTY</span><h3>Empty Container Equipment</h3></div>
      <div className="facilityMetricGrid">
        <MetricCard title="Side Loader" fields={['Tier', id ? 'Unit' : 'Units']} />
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>LIFTING</span><h3>Forklift & Reefer</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title={id ? 'Forklift Diesel' : 'Diesel Forklift'} fields={['Ton', id ? 'Unit' : 'Units']} />
        <MetricCard title="Socket" fields={['A / (380–400V)', id ? 'Unit' : 'Units']} />
      </div>
    </div>

    <div className="facilityLocationBar"><Icon name="location" size={18}/><span>{site.offices.semarang.address}</span></div>
  </section>;
}

export default function FacilitiesPage({ lang='id' }) {
  const id = lang === 'id';
  const prefix = id ? '/id' : '';
  return <SiteShell lang={lang}>
    <PageHero index="04" kicker={id ? 'FASILITAS' : 'FACILITIES'} title={id ? 'Fasilitas operasional, ditampilkan selengkap struktur existing.' : 'Operational facilities, preserving the full legacy structure.'} intro={id ? 'Data Jakarta Facility sudah direstore dari screenshot website existing, termasuk yard, CFS, equipment, reefer, dan trailer. Data Semarang tetap menunggu source visual yang setara agar tidak ada angka yang ditebak.' : 'Jakarta Facility data has been restored from the legacy website screenshot, including yard, CFS, equipment, reefer, and trailer figures. Semarang figures remain pending an equally reliable visual source.'}/>
    <section className="facilityPageWrap"><div className="container">
      <JakartaFacility lang={lang}/>
      <SemarangFacility lang={lang}/>
    </div></section>
    <section className="facilityDataNotice">
      <div className="container facilityDataNoticeInner">
        <div><span className="kicker">{id ? 'VALIDASI DATA' : 'DATA VALIDATION'}</span><h2>{id ? 'Jakarta sudah lengkap. Semarang masih menunggu data visual.' : 'Jakarta is restored. Semarang still needs visual source data.'}</h2></div>
        <p>{id ? 'Seluruh angka Jakarta pada section di atas diambil dari screenshot halaman Jakarta Facility existing yang diberikan. Field Semarang yang masih bertuliskan “Belum terbaca” belum akan diisi sampai tersedia screenshot/source resmi yang memperlihatkan angkanya.' : 'All Jakarta figures above were restored from the supplied screenshot of the legacy Jakarta Facility page. Semarang fields that still show “Belum terbaca” will remain unfilled until an official screenshot or source exposes the values.'}</p>
      </div>
    </section>
    <section className="ctaBand"><div className="container ctaInner"><div><div className="kicker lightKicker">{id ? 'BUTUH DETAIL FASILITAS?' : 'NEED FACILITY DETAILS?'}</div><h2>{id ? 'Hubungi tim MBPI untuk data kapasitas terbaru.' : 'Contact MBPI for the latest verified capacity data.'}</h2></div><Link className="lightBtn" href={`${prefix}/contact/`}>{id ? 'Hubungi Kami' : 'Contact Us'} <Icon name="arrow" size={18}/></Link></div></section>
  </SiteShell>;
}
