export const site = {
  company: 'PT Multi Bina Pura International',
  short: 'MBPI',
  established: '1993',
  offices: {
    jakarta: {
      address: 'Jl. Raya Cakung Cilincing Km. 4 RT002/RW05, Rorotan, Cilincing, Jakarta Utara 14140, Indonesia',
      phones: ['+62 21 4406406', '+62 21 4406407']
    },
    semarang: {
      address: 'Kawasan Industri Cipta Blok 2, Bandarharjo, Semarang Utara, Semarang 50175, Indonesia',
      phones: ['+62 24 8657 0001', '+62 24 8657 0002'],
      email: 'allcy.srg@mbpi.co.id'
    }
  },
  contacts: {
    depot: 'mbpidepot@mbpi.co.id',
    warehouse: 'allcfs@mbpi.co.id',
    trucking: 'alltrkbiz@mbpi.co.id',
    complaint: 'laporan@mbpi.co.id',
    career: 'employment-mbpt@mbpi.co.id'
  },
  external: {
    efaktur: 'https://efaktur.mbpi.co.id/admin/login',
    existingSite: 'https://mbpi.co.id',
    shipmentLink: 'https://www.shipmentlink.com/servlet/TDB1_CargoTracking.do'
  }
};

export const services = [
  {
    id: 'depot',
    no: '01',
    titleId: 'Depot Kontainer',
    titleEn: 'Container Depot',
    summaryId: 'Layanan penyimpanan dan penanganan kontainer dry maupun reefer, termasuk inspeksi dan PTI.',
    summaryEn: 'Storage and handling for dry and reefer containers, including inspection and PTI.',
    bulletsId: ['Penyimpanan empty dan full container', 'Container handling', 'Container inspection', 'Reefer container PTI'],
    bulletsEn: ['Empty and full container storage', 'Container handling', 'Container inspection', 'Reefer container PTI']
  },
  {
    id: 'repair',
    no: '02',
    titleId: 'Perbaikan Kontainer',
    titleEn: 'Container Repair',
    summaryId: 'Perbaikan kontainer dengan standar Cargoworthy dan IICL serta layanan washing dan instalasi GOH.',
    summaryEn: 'Container repair aligned with Cargoworthy and IICL standards plus washing and GOH installation.',
    bulletsId: ['Perbaikan standar IICL dan Cargoworthy', 'Container washing', 'Garment on Hanger (GOH) installation'],
    bulletsEn: ['IICL and Cargoworthy repair', 'Container washing', 'Garment on Hanger (GOH) installation']
  },
  {
    id: 'warehouse',
    no: '03',
    titleId: 'Pergudangan',
    titleEn: 'Warehousing',
    summaryId: 'Layanan gudang dedicated dan shared yang mendukung kegiatan ekspor, domestik, serta special project.',
    summaryEn: 'Dedicated and shared warehousing supporting export, domestic handling, and special projects.',
    bulletsId: ['Export consolidation (LCL)', 'Export full container (FCL)', 'Cargo stripping / stuffing', 'Warehouse storage and space rental', 'Domestic handling', 'Special project'],
    bulletsEn: ['Export consolidation (LCL)', 'Export full container (FCL)', 'Cargo stripping / stuffing', 'Warehouse storage and space rental', 'Domestic handling', 'Special project']
  },
  {
    id: 'trucking',
    no: '04',
    titleId: 'Angkutan Truk',
    titleEn: 'Trucking Services',
    summaryId: 'Transportasi kontainer dengan armada dan chassis sendiri, dukungan mekanik, dan pemantauan GPS.',
    summaryEn: 'Container transportation with owned fleet and chassis, dedicated mechanics, and GPS monitoring.',
    bulletsId: ['Container shuttle transport', 'CY haulage', 'Long distance container haulage', 'Customs clearance services'],
    bulletsEn: ['Container shuttle transport', 'CY haulage', 'Long distance container haulage', 'Customs clearance services']
  }
];

export const strengths = [
  ['01', 'One-stop logistics'],
  ['02', 'Integrated operating system'],
  ['03', 'Electronic Data Interchange'],
  ['04', '24-hour CCTV and security'],
  ['05', 'Locations near major ports'],
  ['06', 'GPS-enabled truck fleet']
];

export const values = ['Integrity', 'Quality', 'Value Creation', 'Trustworthy', 'Accountability', 'Improvement'];
