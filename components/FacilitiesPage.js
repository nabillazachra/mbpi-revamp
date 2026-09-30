import Link from 'next/link';
import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

function MetricCard({ title, fields, values }) {
  return <article className="facilityMetricCard">
    <span className="metricStatus">SOURCE VALUE TO VERIFY</span>
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
        <MetricCard title={id ? 'Luas Total Container Yard' : 'Total Container Yard Area'} fields={['㎡']} />
        <MetricCard title={id ? 'Kapasitas Penyimpanan' : 'Storage Capacity'} fields={['TEUs']} />
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
          <MetricCard title={id ? 'Area Dalam Gudang' : 'Indoor Warehouse Area'} fields={['㎡']} />
          <MetricCard title="Loading Dock" fields={['㎡']} />
        </div>
      </div>
      <div>
        <div className="facilitySectionTitle"><span>CFS III</span><h3>CFS III</h3></div>
        <div className="facilityMetricGrid">
          <MetricCard title={id ? 'Area Dalam Gudang' : 'Indoor Warehouse Area'} fields={['㎡']} />
          <MetricCard title="Loading Dock" fields={['㎡']} />
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
        <MetricCard title="Side Loader / Class 01" fields={[id ? 'High / Tier' : 'High / Tier', id ? 'Unit' : 'Units']} />
        <MetricCard title="Side Loader / Class 02" fields={[id ? 'High / Tier' : 'High / Tier', id ? 'Unit' : 'Units']} />
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>FULL</span><h3>Full Container Equipment</h3></div>
      <div className="facilityMetricGrid two">
        <MetricCard title="Reach Stacker" fields={['Ton', id ? 'Unit' : 'Units']} />
        <MetricCard title="Top Loader" fields={['Ton', id ? 'Unit' : 'Units']} />
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>LIFTING</span><h3>Forklift</h3></div>
      <div className="facilityMetricGrid four">
        <MetricCard title={id ? 'Forklift Elektrik' : 'Electric Forklift'} fields={['Ton', id ? 'Unit' : 'Units']} />
        <MetricCard title={id ? 'Forklift Diesel / Class 01' : 'Diesel Forklift / Class 01'} fields={['Ton', id ? 'Unit' : 'Units']} />
        <MetricCard title={id ? 'Forklift Diesel / Class 02' : 'Diesel Forklift / Class 02'} fields={['Ton', id ? 'Unit' : 'Units']} />
        <MetricCard title={id ? 'Forklift Diesel / Class 03' : 'Diesel Forklift / Class 03'} fields={['Ton', id ? 'Unit' : 'Units']} />
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>REEFER</span><h3>Reefer Container Plug</h3></div>
      <div className="facilityMetricGrid">
        <MetricCard title="Socket" fields={['A / (380–400V)', id ? 'Unit' : 'Units']} />
      </div>
    </div>

    <div className="facilityDetailSection">
      <div className="facilitySectionTitle"><span>TRAILER</span><h3>Trailer Truck</h3></div>
      <div className="facilityMetricGrid four">
        <MetricCard title="Head Truck / Class 01" fields={['Ton', id ? 'Unit' : 'Units']} />
        <MetricCard title="Head Truck / Class 02" fields={['Ton', id ? 'Unit' : 'Units']} />
        <MetricCard title="Head Truck / Class 03" fields={['Ton', id ? 'Unit' : 'Units']} />
        <MetricCard title="Head Truck / Class 04" fields={['Ton', id ? 'Unit' : 'Units']} />
        <MetricCard title="Container Chassis / Class 01" fields={['Feet', id ? 'Unit' : 'Units']} />
        <MetricCard title="Container Chassis / Class 02" fields={['Feet', id ? 'Unit' : 'Units']} />
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
    <PageHero index="04" kicker={id ? 'FASILITAS' : 'FACILITIES'} title={id ? 'Fasilitas operasional, ditampilkan selengkap struktur existing.' : 'Operational facilities, preserving the full legacy structure.'} intro={id ? 'Setiap blok Area, Container Yard, Warehouse, CFS, equipment, reefer, dan trailer dipertahankan. Nilai counter yang belum bisa diverifikasi tetap ditampilkan sebagai field, tetapi tidak diisi angka yang berpotensi salah.' : 'Every Area, Container Yard, Warehouse, CFS, equipment, reefer, and trailer block is retained. Counter fields remain visible, but unverified values are not presented as factual numbers.'}/>
    <section className="facilityPageWrap"><div className="container">
      <JakartaFacility lang={lang}/>
      <SemarangFacility lang={lang}/>
    </div></section>
    <section className="facilityDataNotice">
      <div className="container facilityDataNoticeInner">
        <div><span className="kicker">{id ? 'VALIDASI DATA' : 'DATA VALIDATION'}</span><h2>{id ? 'Kenapa beberapa angka belum tampil?' : 'Why are some figures not shown yet?'}</h2></div>
        <p>{id ? 'Halaman existing menggunakan counter visual. Hasil crawl publik saat ini mengembalikan nilai 0 untuk luas, kapasitas, tonase, tier, ampere, feet, dan jumlah unit. Karena itu, struktur informasinya kami pertahankan 1:1 tetapi angka produksinya menunggu sumber resmi yang bisa diverifikasi.' : 'The legacy facility pages use animated counters. Current public crawl results return 0 for area, capacity, tonnage, tier, amperage, feet, and unit counts. The information structure is therefore retained 1:1 while production figures await a verifiable official source.'}</p>
      </div>
    </section>
    <section className="ctaBand"><div className="container ctaInner"><div><div className="kicker lightKicker">{id ? 'BUTUH DETAIL FASILITAS?' : 'NEED FACILITY DETAILS?'}</div><h2>{id ? 'Hubungi tim MBPI untuk data kapasitas terbaru.' : 'Contact MBPI for the latest verified capacity data.'}</h2></div><Link className="lightBtn" href={`${prefix}/contact/`}>{id ? 'Hubungi Kami' : 'Contact Us'} <Icon name="arrow" size={18}/></Link></div></section>
  </SiteShell>;
}
