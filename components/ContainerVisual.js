export default function ContainerVisual() {
  return (
    <div className="yardVisual" aria-label="Abstract container yard illustration">
      <div className="yardTop"><span>JKT DEPOT</span><span>LIVE OPERATIONS</span></div>
      <div className="yardScene">
        <div className="crane"><i></i></div>
        <div className="stack stackA"><b>MBPI</b><b>DEPOT</b><b>1993</b></div>
        <div className="stack stackB"><b>CFS</b><b>REEFER</b></div>
        <div className="truck"><span></span></div>
        <div className="lane lane1"></div><div className="lane lane2"></div>
      </div>
      <div className="yardFoot"><span>Container Depot</span><span>Warehousing</span><span>Trucking</span></div>
    </div>
  );
}
