export default function Icon({ name, size = 24 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    depot: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 10h18M8 5v14M16 5v14"/></>,
    repair: <><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-3-3z"/></>,
    warehouse: <><path d="M3 10l9-6 9 6v10H3z"/><path d="M7 13h10v7H7zM9 16h2M13 16h2"/></>,
    trucking: <><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    shield: <><path d="M12 3l7 3v5c0 4.8-2.9 8.1-7 10-4.1-1.9-7-5.2-7-10V6z"/><path d="M9 12l2 2 4-4"/></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/></>,
    chevron: <path d="M9 18l6-6-6-6"/>,
    blocks: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M14 17.5h7M17.5 14v7"/></>,
    system: <><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></>,
    edi: <><path d="M4 8h13M14 5l3 3-3 3M20 16H7M10 13l-3 3 3 3"/></>,
    cctv: <><path d="M4 7l13-3 2 7-13 3z"/><path d="M8 13l-2 5M4 18h7M18 11l3 2"/></>,
    port: <><path d="M12 3v13M8 7h8"/><path d="M5 13c0 4 3.1 7 7 7s7-3 7-7M3 13h4M17 13h4"/></>,
    route: <><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h8"/></>
  };
  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}
