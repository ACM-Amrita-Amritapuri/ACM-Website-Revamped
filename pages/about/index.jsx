import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sigs = [
  { id: "AI / 01", title: "SIG AI", desc: "Research, machine learning, intelligent products, and experiments that move beyond notebooks.", wins: ["Hack the Plan winners", "Commercially deployed software"] },
  { id: "CYBER / 02", title: "SIG Cyber", desc: "A home for security researchers, CTF players, and people curious about how systems break.", wins: ["Adversary CTF winner at c0c0n", "Dome CTF runner-up"] },
  { id: "GAME / 03", title: "Glitch", desc: "Games, interactive worlds, creative tooling, and the strange ideas that make play memorable.", wins: ["GameJam winners", "Multiple research internships"] },
  { id: "DEV / 04", title: "Web & App", desc: "Product-minded developers shipping experiences that solve real problems on campus and beyond.", wins: ["ICPC Asia-West finalists", "Two Smart India Hackathon awards"] },
];

export default function About() {
  const [active, setActive] = useState(0);
  return <div className="subpage about-page">
    <section className="subpage-hero section-shell">
      <div><p className="section-kicker">[ Identity / chapter 001 ]</p><motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}}>Built by the<br /><span>terminally curious.</span></motion.h1></div>
      <div className="subpage-intro"><b>ACM · AMRITAPURI</b><p>We are a student-led computing community built around self-education, shared ambition, and making ideas real together.</p></div>
    </section>
    <section className="about-visual section-shell"><div className="about-photo"><Image src="/group.png" alt="The ACM Amritapuri community" fill sizes="100vw" priority /><div className="photo-code">COMMUNITY_FRAME / 2024</div></div></section>
    <section className="about-metrics section-shell">{[["03+","Years building"],["89+","Active members"],["100+","Projects"],["26","Events hosted"],["08","Papers published"]].map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <section className="sig-console section-shell"><div className="console-tabs">{sigs.map((sig,i)=><button className={active===i?"active":""} onClick={()=>setActive(i)} key={sig.title}><small>{sig.id}</small>{sig.title}</button>)}</div><AnimatePresence mode="wait"><motion.div key={active} className="console-panel" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}><p className="section-kicker">[ Active frequency ]</p><h2>{sigs[active].title}</h2><p>{sigs[active].desc}</p><div>{sigs[active].wins.map((win,i)=><span key={win}><i>0{i+1}</i>{win}</span>)}</div></motion.div></AnimatePresence></section>
  </div>;
}
