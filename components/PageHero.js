export default function PageHero({ index = '01', kicker, title, intro, dark = false }) {
  return <section className={`pageHero ${dark ? 'pageHeroDark' : ''}`}><div className="container pageHeroGrid"><div><div className="metaLine"><span>{index}</span><span>{kicker}</span></div><h1>{title}</h1></div><p>{intro}</p></div></section>;
}
