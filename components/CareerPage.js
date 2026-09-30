import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

export default function CareerPage({ lang='id' }) {
  const id = lang === 'id';
  return <SiteShell lang={lang}>
    <PageHero index="06" kicker={id ? 'KARIER' : 'CAREER'} title={id ? 'Lowongan punya tempatnya sendiri.' : 'Recruitment deserves its own place.'} intro={id ? 'Konten rekrutmen yang sebelumnya bercampur di News dipindahkan ke halaman khusus, tanpa menghapus informasi posisi yang sudah ada.' : 'Recruitment content previously mixed into News is moved into a dedicated area without removing the existing vacancy context.'}/>
    <section className="section"><div className="container jobsList"><article><span>01</span><div><small>OPEN ROLE</small><h2>Surveyor</h2><p>{id ? 'Inspeksi kondisi container saat gate in/out, input data depot, dokumentasi damage, dan pelayanan pelanggan.' : 'Inspect container condition at gate in/out, maintain depot data, document damage, and support customer service.'}</p><div className="tagRow"><span>D3</span><span>Fresh Graduate Welcome</span><span>Computer Literate</span><span>North/East Jakarta or Bekasi</span></div></div><a href={`mailto:${site.contacts.career}?subject=Application%20-%20Surveyor`}>{id ? 'Lamar via Email' : 'Apply by Email'} <Icon name="arrow" size={17}/></a></article><article><span>02</span><div><small>LEGACY LISTING</small><h2>Container Repair</h2><p>{id ? 'Posisi ini tercantum pada News website existing. Detail requirement perlu divalidasi kembali sebelum ditandai sebagai lowongan aktif.' : 'This role is listed on the legacy News page. Requirements should be revalidated before marking it as an active vacancy.'}</p></div><a href={`mailto:${site.contacts.career}?subject=Inquiry%20-%20Container%20Repair`}>{id ? 'Tanya HR' : 'Ask HR'} <Icon name="arrow" size={17}/></a></article></div></section>
  </SiteShell>;
}
