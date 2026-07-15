import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiCpu, FiLayers, FiLock } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
import HeroScene from "../components/HeroScene";

const achievements = [
  { value: "08", label: "Hackathon awards" },
  { value: "100+", label: "Projects shipped" },
  { value: "26", label: "Events hosted" },
  { value: "08", label: "Research papers" },
];

const groups = [
  { number: "01", title: "Artificial Intelligence", short: "AI / ML", text: "Intelligent systems, research, and ambitious experiments turned into real products.", Icon: FiCpu },
  { number: "02", title: "Cybersecurity", short: "CYBER", text: "Offensive and defensive security through CTFs, workshops, and hands-on challenges.", Icon: FiLock },
  { number: "03", title: "Web & App", short: "DEV", text: "Useful digital experiences built with modern tools and a product-first mindset.", Icon: FiCode },
  { number: "04", title: "Game Development", short: "GAME", text: "Stories and mechanics brought to life through game jams and creative code.", Icon: FiLayers },
];

const highlights = [
  { tag: "National stage", title: "Adversary CTF winners at c0c0n", meta: "SIG Cyber · 2023", accent: "01" },
  { tag: "Competitive coding", title: "ICPC Asia-West regional finalists", meta: "Team ACM Amritapuri", accent: "02" },
  { tag: "Innovation", title: "Two teams awarded at Smart India Hackathon", meta: "Student Projects · 2022", accent: "03" },
];

const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

export default function Home() {
  return (
    <>
      <Head>
        <title>ACM Amritapuri — Fueling curiosity</title>
        <meta name="description" content="ACM Amritapuri is where curious students build, research, compete, and shape what comes next." />
      </Head>

      <section className="hero section-shell">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <motion.div initial="hidden" animate="show" variants={reveal}>
            <span className="eyebrow"><i /> ACM Student Chapter · Amritapuri <b>EST. 2021</b></span>
            <h1>Fueling<br /><span>curiosity.</span><br />Igniting ideas.</h1>
            <p>We’re the campus community for people who want to build the future, break things intelligently, and learn alongside a seriously talented crew.</p>
            <div className="hero-actions">
              <Link href="https://aseam.acm.org/join" target="_blank" className="button button-primary">Enter the community <HiArrowRight /></Link>
              <Link href="/achievements" className="text-link">See our impact <FiArrowUpRight /></Link>
            </div>
          </motion.div>
          <motion.div className="hero-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
            <span><i /> CHAPTER ONLINE</span><span>KERALA / INDIA</span><span>08°59′N 76°29′E</span>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15 }}><HeroScene /></motion.div>
      </section>

      <div className="ticker" aria-hidden="true"><div>LEARN BY BUILDING <i>✦</i> CODE WITH PURPOSE <i>✦</i> COMPETE TO GROW <i>✦</i> CREATE WHAT’S NEXT <i>✦</i> LEARN BY BUILDING <i>✦</i> CODE WITH PURPOSE <i>✦</i></div></div>

      <section className="manifesto section-shell">
        <div className="manifesto-number">[ 001 — MISSION ]</div>
        <div><h2>Not another club.<br />A <span>launchpad</span> for<br />the relentlessly curious.</h2></div>
        <div className="manifesto-copy"><p>From a first line of code to a nationally recognized build, we give students the people, tools, and room to explore computer science on their own terms.</p><div className="signal-line"><span /><i /><i /><i /></div></div>
      </section>

      <section className="stats-band" aria-label="Chapter highlights">
        <div className="stats-grid section-shell">{achievements.map((item, index) => <div className="stat" key={item.label}><small>0{index + 1}</small><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
      </section>

      <section className="programs section-shell" id="what-we-do">
        <div className="section-heading"><div><p className="section-kicker">[ Choose your frequency ]</p><h2>Four labs.<br />Infinite directions.</h2></div><p>Focused groups for learning by doing—open to beginners, builders, researchers, and everyone in between.</p></div>
          <div className="program-grid">{groups.map(({ Icon, ...group }) => <article className="program-card" key={group.title}><div className="program-scan" /><div className="program-top"><span>{group.number} / {group.short}</span><Icon /></div><h3>{group.title}</h3><p>{group.text}</p><Link href="/sigs" aria-label={`Learn about ${group.title}`}><FiArrowUpRight /></Link></article>)}</div>
      </section>

      <section className="achievements" id="achievements">
        <div className="achievement-orb" aria-hidden="true" />
        <div className="section-shell">
          <div className="section-heading light"><div><p className="section-kicker">[ Signals of impact ]</p><h2>We don’t just<br />participate. <span>We show up.</span></h2></div><p>Our members compete, publish, ship, and represent the chapter on stages far beyond campus.</p></div>
          <div className="highlight-list">{highlights.map((item) => <article key={item.title}><span className="highlight-index">{item.accent}</span><div><span className="tag">{item.tag}</span><h3>{item.title}</h3><p>{item.meta}</p></div><FiArrowUpRight /></article>)}</div>
          <div className="data-note"><span>YOUR NEXT WIN →</span><p>This space is ready for winner photos, project links, publication details, and everything the chapter achieves next.</p><b>DATA SLOT / 04</b></div>
        </div>
      </section>

      <section className="event-feature section-shell" id="events">
        <div className="event-image"><Image src="/openHouse.jpeg" alt="ACM Amritapuri open house" fill sizes="(max-width: 900px) 100vw, 50vw" /><span>LIVE / COLLABORATIVE / HANDS-ON</span></div>
        <div className="event-copy"><p className="section-kicker">[ Experiences over lectures ]</p><h2>Show up curious.<br /><span>Leave electric.</span></h2><p>Workshops, open houses, hackathons, tech talks, and community nights—built to turn passive interest into hands-on experience.</p><Link href="/events" className="text-link">Explore our events <HiArrowRight /></Link></div>
      </section>

      <section className="join-wrap"><div className="join-section section-shell" id="join"><div className="join-grid" /><div><p className="section-kicker">[ The door is open ]</p><h2>Your next big idea<br />starts <span>here.</span></h2></div><div><p>You don’t need to be an expert. Bring your curiosity, your weird idea, and the will to make something real.</p><Link href="https://aseam.acm.org/join" target="_blank" className="button button-light">Join ACM Amritapuri <HiArrowRight /></Link></div></div></section>
    </>
  );
}
