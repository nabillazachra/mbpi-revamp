'use client';

import { useState } from 'react';
import SiteShell from './SiteShell';
import PageHero from './PageHero';
import Icon from './Icon';
import { site } from '../content/site';

export default function ContactPage({ lang='id' }) {
  const id = lang === 'id';
  const [form,setForm] = useState({name:'',company:'',email:'',phone:'',message:''});
  function submit(e){e.preventDefault();const subject=encodeURIComponent(`MBPI Website Inquiry - ${form.company || form.name}`);const body=encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);window.location.href=`mailto:${site.contacts.depot}?subject=${subject}&body=${body}`;}
  const hours = id ? [
    ['Jakarta - Kantor','Sen-Jum 08.30-17.00; Sab 08.30-13.00'],['Jakarta - Depot Export','Sen-Sab 24 jam; Minggu/libur 08.00-15.00'],['Jakarta - Depot Import','Sen-Sab 07.00-23.00'],['Jakarta - Leasing','Sen-Jum 07.00-17.00; Sab 07.00-12.00'],['Jakarta - Booking Release','Sen-Jum 07.00-19.00; Sab 07.00-13.00'],['Jakarta - Warehouse','Sen-Jum 08.30-17.00; Sab 08.30-12.15'],['Jakarta - Trucking','Sen-Sab 24 jam'],['Semarang - Kantor','Sen-Jum 08.30-16.45; Sab 08.30-12.15'],['Semarang - Gate In/Out','Sen-Jum 08.00-16.45; Sab 08.00-12.00'],['Semarang - Booking Release','Sen-Jum 08.00-16.45; Sab 08.00-12.00']
  ] : [
    ['Jakarta - Office','Mon-Fri 08:30-17:00; Sat 08:30-13:00'],['Jakarta - Export Depot','Mon-Sat 24 hours; Sunday/holiday 08:00-15:00'],['Jakarta - Import Depot','Mon-Sat 07:00-23:00'],['Jakarta - Leasing','Mon-Fri 07:00-17:00; Sat 07:00-12:00'],['Jakarta - Booking Release','Mon-Fri 07:00-19:00; Sat 07:00-13:00'],['Jakarta - Warehouse','Mon-Fri 08:30-17:00; Sat 08:30-12:15'],['Jakarta - Trucking','Mon-Sat 24 hours'],['Semarang - Office','Mon-Fri 08:30-16:45; Sat 08:30-12:15'],['Semarang - Gate In/Out','Mon-Fri 08:00-16:45; Sat 08:00-12:00'],['Semarang - Booking Release','Mon-Fri 08:00-17:00; Sat 08:00-11:30']
  ];
  const units=[['GATE OPERATION',site.offices.jakarta.gatePhones],['DEPOT',site.offices.jakarta.depotPhones],['WAREHOUSE',site.offices.jakarta.warehousePhones],['TRUCKING',site.offices.jakarta.truckingPhones],['OFFICE',site.offices.jakarta.phones]];
  return <SiteShell lang={lang}>
    <PageHero index="07" kicker={id ? 'KONTAK' : 'CONTACT'} title={id ? 'Kontak operasional lengkap per unit.' : 'Complete operating contacts by unit.'} intro={id ? 'Nomor telepon, email, alamat, dan jam operasional dikonsolidasikan agar pengguna lebih cepat mencapai unit yang tepat.' : 'Phone numbers, email, addresses, and operating hours are consolidated so users can reach the right team faster.'}/>
    <section className="section"><div className="container contactCards">
      <article><Icon name="location"/><small>JAKARTA OFFICE</small><h3>PT MBPI / PT MBT</h3><p>{site.offices.jakarta.address}</p><a href={`tel:${site.offices.jakarta.phones[0].replace(/\s/g,'')}`}>{site.offices.jakarta.phones.join(' / ')}</a></article>
      <article><Icon name="location"/><small>SEMARANG OFFICE</small><h3>Semarang Facility</h3><p>{site.offices.semarang.address}</p><a href={`mailto:${site.offices.semarang.email}`}>{site.offices.semarang.email}</a></article>
      <article><Icon name="mail"/><small>DEPOT</small><h3>{site.contacts.depot}</h3><a href={`mailto:${site.contacts.depot}`}>{id ? 'Kirim email' : 'Send email'} <Icon name="arrow" size={15}/></a></article>
      <article><Icon name="mail"/><small>WAREHOUSE / TRUCKING</small><h3>{site.contacts.warehouse}<br/>{site.contacts.trucking}</h3></article>
    </div></section>
    <section className="section"><div className="container"><div className="sectionHead compact"><div><span className="sectionIndex">07A</span><span className="kicker">{id ? 'TELEPON PER UNIT' : 'PHONE BY UNIT'}</span></div><h2>{id ? 'Kontak operasional Jakarta.' : 'Jakarta operating contacts.'}</h2></div><div className="hoursGrid">{units.map(([name,phones])=><article key={name}><Icon name="mail" size={19}/><div><strong>{name}</strong><span>{phones.join(' / ')}</span></div></article>)}</div></div></section>
    <section className="section hoursBand"><div className="container"><div className="sectionHead compact"><div><span className="sectionIndex">07B</span><span className="kicker">{id ? 'JAM OPERASIONAL' : 'OPERATING HOURS'}</span></div><h2>{id ? 'Waktu layanan berdasarkan unit.' : 'Service hours by operating unit.'}</h2></div><div className="hoursGrid">{hours.map(([name,time])=><article key={name}><Icon name="clock" size={19}/><div><strong>{name}</strong><span>{time}</span></div></article>)}</div></div></section>
    <section className="section inquiryBand"><div className="container inquiryGrid"><div><div className="kicker">INQUIRY</div><h2>{id ? 'Ceritakan kebutuhan logistik Anda.' : 'Tell us about your logistics requirement.'}</h2><p>{id ? 'Untuk versi GitHub Pages, form membuka email client dan tidak menyimpan data di server statis.' : 'For the GitHub Pages build, the form opens the email client and does not store form data on a static server.'}</p></div><form onSubmit={submit}><label>{id ? 'Nama' : 'Name'}<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>{id ? 'Perusahaan' : 'Company'}<input value={form.company} onChange={e=>setForm({...form,company:e.target.value})}/></label><label>Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>{id ? 'Telepon' : 'Phone'}<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></label><label className="full">{id ? 'Pesan' : 'Message'}<textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button className="primaryBtn" type="submit">{id ? 'Buat Email Inquiry' : 'Create Inquiry Email'} <Icon name="arrow" size={17}/></button></form></div></section>
  </SiteShell>;
}
