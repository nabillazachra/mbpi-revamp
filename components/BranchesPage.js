import Link from 'next/link';
import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

export default function BranchesPage({ lang='id' }) {
  const id = lang === 'id';
  const prefix = id ? '/id' : '';
  return <SiteShell lang={lang}>
    <PageHero index="03" kicker={id ? 'CABANG' : 'BRANCHES'} title={id ? 'Jakarta dan Semarang sebagai dua titik operasi utama.' : 'Jakarta and Semarang as two core operating locations.'} intro={id ? 'Menu Branches dari website existing dikembalikan sebagai halaman tersendiri agar informasi lokasi tidak tercampur dengan detail fasilitas.' : 'The legacy Branches section is restored as a dedicated page so location information stays distinct from facility specifications.'}/>
    <section className="section"><div className="container facilityGrid">
      <article className="facilityExpanded"><div className="facilityTop"><Icon name="location"/><span>01 / JAKARTA</span></div><h2>Jakarta Branch</h2><p>{id ? 'Cabang Jakarta menjadi pusat operasi MBPI di area Cakung-Cilincing dan mendukung depot, repair, warehousing, serta trucking.' : 'The Jakarta branch serves as MBPI core operating base in the Cakung-Cilincing area, supporting depot, repair, warehousing, and trucking.'}</p><div className="facilityFacts"><span>Container Depot</span><span>Container Repair</span><span>Warehousing / CFS</span><span>Trucking</span></div><small>{site.offices.jakarta.address}</small><div className="actions"><Link className="primaryBtn" href={`${prefix}/facilities/`}>{id ? 'Lihat Fasilitas' : 'View Facilities'} <Icon name="arrow" size={16}/></Link><Link className="textBtn" href={`${prefix}/contact/`}>{id ? 'Kontak Jakarta' : 'Jakarta Contact'}</Link></div></article>
      <article className="facilityExpanded"><div className="facilityTop"><Icon name="location"/><span>02 / SEMARANG</span></div><h2>Semarang Branch</h2><p>{id ? 'Cabang Semarang memperluas jaringan operasional MBPI di sisi utara Semarang dan mendukung kegiatan container handling di sekitar Pelabuhan Tanjung Emas.' : 'The Semarang branch extends MBPI operating network in north Semarang and supports container handling around Tanjung Emas Port.'}</p><div className="facilityFacts"><span>Container Yard</span><span>Side Loader</span><span>Forklift</span><span>Reefer Support</span></div><small>{site.offices.semarang.address}</small><div className="actions"><Link className="primaryBtn" href={`${prefix}/facilities/`}>{id ? 'Lihat Fasilitas' : 'View Facilities'} <Icon name="arrow" size={16}/></Link><Link className="textBtn" href={`${prefix}/contact/`}>{id ? 'Kontak Semarang' : 'Semarang Contact'}</Link></div></article>
    </div></section>
  </SiteShell>;
}
