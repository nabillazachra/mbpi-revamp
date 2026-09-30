import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';

export default function NewsPage({ lang='id' }) {
  const id = lang === 'id';
  return <SiteShell lang={lang}>
    <PageHero index="05" kicker={id ? 'BERITA' : 'NEWS'} title={id ? 'Informasi perusahaan, dipisahkan dari rekrutmen.' : 'Company updates, separated from recruitment.'} intro={id ? 'Pada website lama, halaman News juga memuat lowongan. Di struktur baru, konten rekrutmen diarahkan ke halaman Karier agar intent pengguna lebih jelas.' : 'On the legacy site, News also carries recruitment posts. The new structure routes recruitment to Career for clearer user intent.'}/>
    <section className="section"><div className="container emptyState"><span className="sectionIndex">CURRENT STATE</span><h2>{id ? 'Belum ada corporate news yang terverifikasi untuk dimigrasikan.' : 'No verified corporate news is currently available for migration.'}</h2><p>{id ? 'Saat data berita resmi tersedia, card di halaman ini dapat diisi melalui data file statis atau CMS tanpa mengubah layout.' : 'When verified corporate updates are available, this page can be populated from static data or a CMS without changing the layout.'}</p><Icon name="arrow" size={32}/></div></section>
  </SiteShell>;
}
