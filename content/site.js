export const site = {
  company: 'PT Multi Bina Pura International',
  short: 'MBPI',
  established: '1993',
  profile: {
    id: 'Kami adalah inland container terminal yang menangani penyimpanan, transit, pergudangan, dan bounded cargo selama lebih dari 30 tahun. Operasi didukung tenaga profesional dan teknis berkualifikasi yang berpengalaman dalam pengelolaan kontainer terkomputerisasi pada terminal peti kemas dan stacking yard.',
    en: 'We are an inland container terminal dealing with container storage, transit, warehousing, and bounded cargo for more than 30 years. Operations are supported by qualified professionals and technical personnel experienced in computerized container management at container terminals and stacking yards.'
  },
  offices: {
    jakarta: {
      address: 'Jl. Raya Cakung Cilincing Km. 4 RT002/RW05, Rorotan, Cilincing, Jakarta Utara 14140, Indonesia',
      phones: ['+62 21 4406406', '+62 21 4406407'],
      gatePhones: ['+62 21 4406411'],
      depotPhones: ['+62 21 4406287', '+62 21 4406288'],
      warehousePhones: ['+62 21 4418401', '+62 21 4418402'],
      truckingPhones: ['+62 21 4406403', '+62 21 4406404']
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
    career: 'employment-mbpt@mbpi.co.id',
    efakturLogin: 'act3@mbpi.co.id',
    containerJakarta: 'allcy@mbpi.co.id',
    containerSemarang: 'allcy.srg@mbpi.co.id'
  },
  external: {
    efaktur: 'https://efaktur.mbpi.co.id/admin/login',
    existingSite: 'https://mbpi.co.id',
    shipmentLink: 'https://www.shipmentlink.com/servlet/TDB1_CargoTracking.do',
    damagePhotos: 'https://img.mbpi.co.id/',
    cfsConsol: 'https://bizp.mbpi.biz.id/'
  }
};

export const services = [
  {
    id: 'depot',
    no: '01',
    titleId: 'Depot Kontainer',
    titleEn: 'Container Depot',
    summaryId: 'Didirikan pada 1993, MBPI merupakan salah satu pionir inland container terminal di Jakarta dan menyediakan layanan export/import, penyimpanan kontainer, handling, inspection, serta reefer PTI.',
    summaryEn: 'Established in 1993, MBPI is one of Jakarta inland container terminal pioneers, providing export/import container services, storage, handling, inspection, and reefer PTI.',
    detailId: 'Fasilitas depot dibangun pada area lebih dari 100.000 m² dan melayani penyimpanan kontainer dry maupun reefer. Model layanan dirancang untuk mendukung kebutuhan carrier, leasing company, serta partner logistik yang membutuhkan storage dan handling dalam satu lokasi operasi.',
    detailEn: 'The depot is built on an area of more than 100,000 m² and supports both dry and reefer container storage. Its operating model serves carriers, leasing companies, and logistics partners requiring storage and handling within one operating location.',
    bulletsId: ['Penyimpanan empty dan full container', 'Container handling', 'Container inspection', 'Reefer container PTI'],
    bulletsEn: ['Empty and full container storage', 'Container handling', 'Container inspection', 'Reefer container PTI']
  },
  {
    id: 'repair',
    no: '02',
    titleId: 'Perbaikan Kontainer',
    titleEn: 'Container Repair',
    summaryId: 'Divisi repair didukung teknisi berpengalaman dan peralatan kerja untuk menghasilkan perbaikan sesuai standar internasional Cargoworthy dan IICL.',
    summaryEn: 'The repair division is supported by experienced technicians and equipment to deliver repairs aligned with international Cargoworthy and IICL standards.',
    detailId: 'Selain repair dan washing, MBPI menyediakan pemasangan GOH (Garment on Hanger) menggunakan material berkualitas untuk membantu menjaga kondisi produk garmen selama proses logistik.',
    detailEn: 'In addition to repair and washing, MBPI provides GOH (Garment on Hanger) installation using quality materials to help protect garment products throughout the logistics process.',
    bulletsId: ['Perbaikan kontainer berstandar IICL dan Cargoworthy', 'Cuci kontainer', 'Pemasangan GOH (Garment on Hanger)'],
    bulletsEn: ['Cargoworthy and IICL standard container repair', 'Container washing', 'Garment on Hanger (GOH) installation']
  },
  {
    id: 'warehouse',
    no: '03',
    titleId: 'Pergudangan',
    titleEn: 'Warehousing',
    summaryId: 'Layanan pergudangan dedicated dan shared berada di area strategis dekat pelabuhan dan mendukung beragam kebutuhan supply chain pelanggan.',
    summaryEn: 'Dedicated and shared warehousing is located in a strategic area near the port and supports a broad range of customer supply-chain requirements.',
    detailId: 'Layanan mencakup aktivitas konsolidasi ekspor, FCL, stripping/stuffing, penyimpanan dan penyewaan ruang gudang, domestic handling, serta special project.',
    detailEn: 'Services cover export consolidation, FCL, stripping/stuffing, warehouse storage and space rental, domestic handling, and special projects.',
    bulletsId: ['Export Consolidation (LCL)', 'Export Full Container (FCL)', 'Cargo Stripping / Stuffing', 'Warehouse Storage & Space Rental', 'Domestic Handling', 'Special Project'],
    bulletsEn: ['Export Consolidation (LCL)', 'Export Full Container (FCL)', 'Cargo Stripping / Stuffing', 'Warehouse Storage & Space Rental', 'Domestic Handling', 'Special Project']
  },
  {
    id: 'trucking',
    no: '04',
    titleId: 'Angkutan Truk',
    titleEn: 'Trucking Services',
    summaryId: 'MBPI mengoperasikan armada truk dan container chassis sendiri, didukung tim mekanik yang melakukan pemeliharaan armada.',
    summaryEn: 'MBPI operates its own truck fleet and container chassis, supported by a dedicated mechanic team responsible for fleet maintenance.',
    detailId: 'Setiap pengiriman dipantau dengan GPS dan operasi trucking dikembangkan bersama tim serta sistem IT terintegrasi untuk menjaga visibilitas pergerakan.',
    detailEn: 'Shipments are monitored through GPS, while trucking operations are supported by integrated teams and IT systems to maintain movement visibility.',
    bulletsId: ['Container Shuttle Transport', 'CY Haulage', 'Long Distance Container Haulage', 'Customs Clearance Services'],
    bulletsEn: ['Container Shuttle Transport', 'CY Haulage', 'Long Distance Container Haulage', 'Customs Clearance Services']
  }
];

export const strengths = [
  ['01', 'One-stop services'],
  ['02', 'Integrated Own Build System'],
  ['03', 'Electronic Data Interchange (EDI)'],
  ['04', '24-hour CCTV and Security'],
  ['05', 'Location near Port'],
  ['06', 'GPS on Trucks']
];

export const facilities = {
  jakarta: {
    distanceId: 'Berlokasi di timur laut Jakarta, sekitar 11 km dari Pelabuhan Tanjung Priok.',
    distanceEn: 'Located in north-east Jakarta, approximately 11 km from Tanjung Priok Port.',
    warehouseId: ['Loading dock selebar 4 meter', 'Kapasitas loading dock hingga 12 truk/trailer sekaligus pada masing-masing gudang', 'Area stuffing untuk 100 empty containers', 'CFS I', 'CFS III'],
    warehouseEn: ['4-metre-wide loading dock', 'Loading dock accommodates up to 12 trucks/trailers at the same time per warehouse', 'Stuffing area for 100 empty containers', 'CFS I', 'CFS III'],
    equipment: ['Side Loader', 'Reach Stacker', 'Top Loader', 'Electric Forklift', 'Diesel Forklift', 'Reefer Container Plug', 'Head Truck', 'Container Chassis'],
    noteId: 'Website existing menampilkan angka counter kapasitas dan jumlah equipment sebagai 0 pada hasil crawl. Jenis fasilitas tetap dipertahankan, sedangkan angka unit/kapasitas ditahan sampai sumber resmi terverifikasi.',
    noteEn: 'The legacy site exposes facility capacity and equipment counters as 0 in crawl results. Facility types are retained while unit/capacity figures are withheld until verified source data is available.'
  },
  semarang: {
    distanceId: 'Berlokasi di sisi utara Semarang, sekitar 4 km dari Pelabuhan Tanjung Emas.',
    distanceEn: 'Located in north Semarang, approximately 4 km from Tanjung Emas Port.',
    equipment: ['Container Yard', 'Side Loader', 'Diesel Forklift', 'Reefer Socket'],
    noteId: 'Angka luas yard, storage capacity, tier, tonase, dan jumlah unit pada website existing terbaca 0 pada hasil crawl sehingga belum ditampilkan sebagai angka produksi.',
    noteEn: 'Yard area, storage capacity, tier, tonnage, and unit counts are exposed as 0 in crawl results, so production figures are intentionally withheld.'
  }
};

export const values = ['Integrity', 'Quality', 'Value Creation', 'Trustworthy', 'Accountability', 'Improvement'];
