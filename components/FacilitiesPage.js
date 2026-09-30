import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site, facilities } from '../content/site';

function FacilityBlock({ title, code, office, data, lang }) {
  const id = lang === 'id';
  return <article className="facilityExpanded">
    <div className="facilityTop"><Icon name="location"/><span>{code}</span></div>
    <h2>{title}</h2>
    <p>{id ? data.distanceId : data.distanceEn}</p>
    {data.warehouseId && <><h3>Warehouse & CFS</h3><div className="facilityFacts">{(id ? data.warehouseId : data.warehouseEn).map(x=><span key={x}>{x}</span>)}</div></>}
    <h3>Equipment & Capability</h3>
    <div className="facilityFacts">{data.equipment.map(x=><span key={x}>{x}</span>)}</div>
    <div className="facilityNote">{id ? data.noteId : data.noteEn}</div>
    <small>{office.address}</small>
  </article>;
}

export default function FacilitiesPage({ lang='id' }) {
  const id = lang === 'id';
  return <SiteShell lang={lang}>
    <PageHero index="03" kicker={id ? 'FASILITAS' : 'FACILITIES'} title={id ? 'Detail fasilitas Jakarta dan Semarang.' : 'Jakarta and Semarang facility details.'} intro={id ? 'Informasi fasilitas existing dipertahankan, termasuk warehouse/CFS dan jenis equipment. Angka counter yang terbaca 0 dari website lama tidak ditampilkan sebagai data produksi.' : 'Legacy facility information is preserved, including warehouse/CFS and equipment types. Numeric counters exposed as 0 on the old site are not presented as production data.'}/>
    <section className="section"><div className="container facilityGrid">
      <FacilityBlock title="Jakarta Facility" code="01 / JAKARTA" office={site.offices.jakarta} data={facilities.jakarta} lang={lang}/>
      <FacilityBlock title="Semarang Facility" code="02 / SEMARANG" office={site.offices.semarang} data={facilities.semarang} lang={lang}/>
    </div></section>
    <section className="section cautionBand"><div className="container cautionInner"><span className="sectionIndex">DATA</span><div><h2>{id ? 'Konten lengkap, angka hanya jika terverifikasi.' : 'Complete content, verified numbers only.'}</h2><p>{id ? 'Pendekatan ini menjaga konteks website existing tanpa mempublikasikan angka kapasitas atau jumlah equipment yang tidak bisa diverifikasi dari source yang tersedia.' : 'This approach preserves legacy-site context without publishing capacity or equipment figures that cannot be verified from the available source.'}</p></div></div></section>
  </SiteShell>;
}
