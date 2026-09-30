import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

const roles = [
  {
    no:'01', title:'Reeferman', status:'CURRENT SITE LISTING - VERIFY OPENING',
    summaryId:'Inspeksi, preventive maintenance, troubleshooting, dan repair reefer container.',
    summaryEn:'Inspection, preventive maintenance, troubleshooting, and reefer-container repair.',
    requirements:['D3 Teknik Mesin/Elektro/Pendingin atau terkait','Memahami Carrier, Daikin, dan Star Cool','Memahami electrical system, temperature control, dan refrigerant','Mampu menggunakan alat ukur terkait refrigeration','Bersedia bekerja shift dan lembur','Memiliki SIM A dan C','Sertifikasi refrigerasi/K3 menjadi nilai tambah'],
    responsibilities:['Inspection & preventive maintenance','Troubleshooting reefer unit','Repair reefer container','Monitoring temperature-control system','Operational reporting']
  },
  {
    no:'02', title:'Finance (Fund) Section Head', status:'CURRENT SITE LISTING - VERIFY OPENING',
    summaryId:'Memimpin pengelolaan dana, cash operations, bank balance, receivable/payable, dan internal control.',
    summaryEn:'Lead fund management, cash operations, bank balances, receivables/payables, and internal control.',
    requirements:['Minimal S1 Finance/Accounting atau setara','Minimal 5 tahun pengalaman relevan','English mandatory; Mandarin preferred','Memahami SAP/Oracle atau ERP sejenis','Leadership dan analytical skill','CPA menjadi nilai tambah','Brevet A/B menjadi nilai tambah'],
    responsibilities:['Fund & cash management','Bank balance monitoring','Receivable & payable control','Internal financial control','Financial process improvement']
  },
  {
    no:'03', title:'Surveyor', status:'LEGACY LISTING',
    summaryId:'Inspeksi kondisi container pada proses gate in/out serta dokumentasi damage dan data depot.',
    summaryEn:'Inspect container condition during gate in/out and maintain damage documentation and depot data.',
    requirements:['Maksimal 30 tahun','Minimal D3','Fresh graduate dipersilakan','Computer literate','English menjadi nilai tambah','Pengalaman container surveying menjadi nilai tambah','Kondisi fisik baik','Domisili Jakarta Utara/Timur/Bekasi'],
    responsibilities:['Inspection saat gate in/out','Input data depot','Upload foto damage container','Membuat laporan survey','Mendukung customer service']
  },
  {
    no:'04', title:'Container Repair', status:'LEGACY LISTING',
    summaryId:'Lowongan legacy yang masih muncul pada News existing. Detail aktif perlu dikonfirmasi HR.',
    summaryEn:'Legacy vacancy still present on the existing News page. Active-opening details should be confirmed with HR.',
    requirements:['Status opening perlu verifikasi HR'],
    responsibilities:['Container repair']
  }
];

export default function CareerPage({ lang='id' }) {
  const id = lang === 'id';
  return <SiteShell lang={lang}>
    <PageHero index="06" kicker={id ? 'KARIER' : 'CAREER'} title={id ? 'Detail lowongan dipertahankan, bukan hanya judulnya.' : 'Vacancy details are preserved, not just the titles.'} intro={id ? 'Qualification dan job description dari website existing dirangkum kembali di halaman Karier agar konteks rekrutmen tidak hilang saat dipisahkan dari News.' : 'Qualifications and job descriptions from the existing website are restored here so recruitment context is preserved after moving it out of News.'}/>
    <section className="section"><div className="container careerDetailedList">
      {roles.map((role)=><article key={role.no} className="careerDetailedCard">
        <div className="careerTitle"><span>{role.no}</span><div><small>{role.status}</small><h2>{role.title}</h2><p>{id ? role.summaryId : role.summaryEn}</p></div></div>
        <div className="careerColumns">
          <div><h3>{id ? 'Kualifikasi' : 'Qualifications'}</h3><ul>{role.requirements.map(x=><li key={x}>{x}</li>)}</ul></div>
          <div><h3>{id ? 'Tanggung Jawab' : 'Responsibilities'}</h3><ul>{role.responsibilities.map(x=><li key={x}>{x}</li>)}</ul></div>
        </div>
        <div className="careerApply"><span>{id ? 'Aplikasi melalui email HR. Cantumkan expected salary dan recent photograph bila diminta pada listing existing.' : 'Applications are handled via HR email. Include expected salary and a recent photograph where requested by the existing listing.'}</span><a href={`mailto:${site.contacts.career}?subject=${encodeURIComponent('Application / Inquiry - ' + role.title)}`}>{id ? 'Hubungi HR' : 'Contact HR'} <Icon name="arrow" size={16}/></a></div>
      </article>)}
    </div></section>
  </SiteShell>;
}
