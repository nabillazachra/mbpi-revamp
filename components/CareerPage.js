import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

const roles = [
  {
    no:'01', title:'Reeferman', status:'AVAILABILITY • CONFIRM WITH HR',
    summaryId:'Inspeksi, preventive maintenance, troubleshooting, dan repair reefer container.',
    summaryEn:'Inspection, preventive maintenance, troubleshooting, and reefer-container repair.',
    requirements:['D3 Teknik Mesin/Elektro/Pendingin atau terkait','Memahami Carrier, Daikin, dan Star Cool','Memahami electrical system, temperature control, dan refrigerant','Mampu menggunakan alat ukur terkait refrigeration','Bersedia bekerja shift dan lembur','Memiliki SIM A dan C','Sertifikasi refrigerasi/K3 menjadi nilai tambah'],
    responsibilities:['Inspection & preventive maintenance','Troubleshooting reefer unit','Repair reefer container','Monitoring temperature-control system','Operational reporting']
  },
  {
    no:'02', title:'Finance (Fund) Section Head', status:'AVAILABILITY • CONFIRM WITH HR',
    summaryId:'Memimpin pengelolaan dana, cash operations, bank balance, receivable/payable, dan internal control.',
    summaryEn:'Lead fund management, cash operations, bank balances, receivables/payables, and internal control.',
    requirements:['Minimal S1 Finance/Accounting atau setara','Minimal 5 tahun pengalaman relevan','English mandatory; Mandarin preferred','Memahami SAP/Oracle atau ERP sejenis','Leadership dan analytical skill','CPA menjadi nilai tambah','Brevet A/B menjadi nilai tambah'],
    responsibilities:['Fund & cash management','Bank balance monitoring','Receivable & payable control','Internal financial control','Financial process improvement']
  },
  {
    no:'03', title:'Surveyor', status:'ARCHIVED POSITION',
    summaryId:'Inspeksi kondisi container pada proses gate in/out serta dokumentasi damage dan data depot.',
    summaryEn:'Inspect container condition during gate in/out and maintain damage documentation and depot data.',
    requirements:['Maksimal 30 tahun','Minimal D3','Fresh graduate dipersilakan','Computer literate','English menjadi nilai tambah','Pengalaman container surveying menjadi nilai tambah','Kondisi fisik baik','Domisili Jakarta Utara/Timur/Bekasi'],
    responsibilities:['Inspection saat gate in/out','Input data depot','Upload foto damage container','Membuat laporan survey','Mendukung customer service']
  },
  {
    no:'04', title:'Container Repair', status:'ARCHIVED POSITION',
    summaryId:'Posisi arsip. Ketersediaan lowongan terbaru perlu dikonfirmasi kepada tim HR.',
    summaryEn:'Archived position. Current availability should be confirmed with the HR team.',
    requirements:['Status opening perlu verifikasi HR'],
    responsibilities:['Container repair']
  }
];

export default function CareerPage({ lang='id' }) {
  const id = lang === 'id';
  return <SiteShell lang={lang}>
    <PageHero index="06" kicker={id ? 'KARIER' : 'CAREER'} title={id ? 'Peluang karier dengan informasi yang jelas dan terstruktur.' : 'Career opportunities with clear and structured information.'} intro={id ? 'Setiap posisi menampilkan ringkasan peran, kualifikasi, dan tanggung jawab agar kandidat dapat memahami kebutuhan pekerjaan dengan cepat.' : 'Each role presents a concise summary, qualifications, and responsibilities so candidates can quickly understand the position.'}/>
    <section className="section"><div className="container careerDetailedList">
      {roles.map((role)=><article key={role.no} className="careerDetailedCard">
        <div className="careerTitle"><span>{role.no}</span><div><small>{role.status}</small><h2>{role.title}</h2><p>{id ? role.summaryId : role.summaryEn}</p></div></div>
        <div className="careerColumns">
          <div><h3>{id ? 'Kualifikasi' : 'Qualifications'}</h3><ul>{role.requirements.map(x=><li key={x}>{x}</li>)}</ul></div>
          <div><h3>{id ? 'Tanggung Jawab' : 'Responsibilities'}</h3><ul>{role.responsibilities.map(x=><li key={x}>{x}</li>)}</ul></div>
        </div>
        <div className="careerApply"><span>{id ? 'Aplikasi dikirim melalui email HR. Siapkan CV dan informasi pendukung sesuai kebutuhan posisi.' : 'Applications are handled via HR email. Prepare your CV and supporting information as required for the role.'}</span><a href={`mailto:${site.contacts.career}?subject=${encodeURIComponent('Application / Inquiry - ' + role.title)}`}>{id ? 'Hubungi HR' : 'Contact HR'} <Icon name="arrow" size={16}/></a></div>
      </article>)}
    </div></section>
  </SiteShell>;
}
