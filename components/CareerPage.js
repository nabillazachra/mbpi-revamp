import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

const roles = [
  {
    no:'01',
    status:'CURRENT SITE LISTING - VERIFY OPENING',
    title:'Reeferman',
    id:'D3 Teknik Mesin/Elektro/Pendingin atau jurusan terkait. Fokus pada inspeksi, preventive maintenance, troubleshooting, dan repair reefer container; memahami Carrier, Daikin, dan Star Cool menjadi nilai penting.',
    en:'D3 in Mechanical, Electrical, Refrigeration, or related fields. Focus on inspection, preventive maintenance, troubleshooting, and reefer-container repair; familiarity with Carrier, Daikin, and Star Cool is valuable.',
    tags:['D3','Refrigeration','Shift Work','SIM A & C']
  },
  {
    no:'02',
    status:'CURRENT SITE LISTING - VERIFY OPENING',
    title:'Finance (Fund) Section Head',
    id:'Posisi supervisi pengelolaan dana, cash operations, bank balance, receivable/payable, internal control, dan financial process improvement.',
    en:'Supervisory role covering fund management, cash operations, bank balances, receivables/payables, internal control, and financial-process improvement.',
    tags:['S1 Finance/Accounting','5+ Years','English','Leadership']
  },
  {
    no:'03',
    status:'LEGACY LISTING',
    title:'Surveyor',
    id:'Inspeksi kondisi container saat gate in/out, input data depot, dokumentasi damage, dan pelayanan pelanggan.',
    en:'Inspect container condition at gate in/out, maintain depot data, document damage, and support customer service.',
    tags:['D3','Fresh Graduate Welcome','Computer Literate','North/East Jakarta or Bekasi']
  },
  {
    no:'04',
    status:'LEGACY LISTING',
    title:'Container Repair',
    id:'Listing ini masih muncul di halaman News website lama. Detail requirement dan status aktif perlu dikonfirmasi HR sebelum dipublikasikan sebagai opening aktif.',
    en:'This listing still appears on the legacy News page. Requirements and active-opening status should be confirmed with HR before publishing it as an active role.',
    tags:['Container Repair','HR Verification Required']
  }
];

export default function CareerPage({ lang='id' }) {
  const id = lang === 'id';
  return <SiteShell lang={lang}>
    <PageHero index="06" kicker={id ? 'KARIER' : 'CAREER'} title={id ? 'Lowongan punya tempatnya sendiri.' : 'Recruitment deserves its own place.'} intro={id ? 'Konten rekrutmen yang sebelumnya bercampur di News dipindahkan ke halaman khusus. Listing dari website existing dipertahankan, tetapi status opening harus tetap dikonfirmasi HR.' : 'Recruitment content previously mixed into News is moved into a dedicated area. Existing-site listings are preserved, while active-opening status should still be confirmed by HR.'}/>
    <section className="section">
      <div className="container jobsList">
        {roles.map((role) => <article key={role.no}>
          <span>{role.no}</span>
          <div>
            <small>{role.status}</small>
            <h2>{role.title}</h2>
            <p>{id ? role.id : role.en}</p>
            <div className="tagRow">{role.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>
          <a href={`mailto:${site.contacts.career}?subject=${encodeURIComponent('Application / Inquiry - ' + role.title)}`}>
            {id ? 'Hubungi HR' : 'Contact HR'} <Icon name="arrow" size={17}/>
          </a>
        </article>)}
      </div>
    </section>
  </SiteShell>;
}
