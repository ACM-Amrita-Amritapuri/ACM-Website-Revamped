import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import PersonCard from "../../components/PersonCard";

const alumni = {
  "2025-26": [
    { name: "Vasu", role: "Chair / Cyber Lead", image: "/vasu.png", linkedin: "https://www.linkedin.com/in/vasudevb25/", github: "https://github.com/vasudevb25" },
    { name: "Johan Rajesh", role: "Vice Chair / App & Web Head", image: "/johan.png" },
    { name: "Abinav Manoj", role: "Vice Chair", image: "/abhinav2.png" },
    { name: "Ananthakrishnan S", role: "Webmaster / Treasurer", image: "/ananthan.png" },
    { name: "Keerthana", role: "Secretary", image: "/keerthana.png" },
    { name: "Advyth", role: "AI Lead", image: "/advyth1.png" },
    { name: "Vaishnav", role: "App Development Lead", image: "/vasihnav2.png" },
    { name: "Ghanasyam", role: "Web Development Lead", image: "/shyam.png" },
    { name: "Abhinav G Nair", role: "Glitch Lead", image: "/abhinavglitch.jpeg" },
    { name: "Aditi S", role: "Media Lead", image: "/aditi.png" },
  ],
  "2024-25": [
    { name: "Akhil Menon M", role: "Alumni Advisor", image: "/akhil.jpg", linkedin: "https://www.linkedin.com/in/akhil-m3non/", github: "https://github.com/muuduuu" },
    { name: "Hari G Narayan", role: "Alumni Advisor", image: "/hari blow.jpg" },
    { name: "Gowri P Shenoy", role: "Alumni Advisor", image: "/gps 2.jpg" },
    { name: "Ajan S", role: "Alumni Advisor", image: "/ajan.jpg" },
    { name: "Lokesh Yarramallu", role: "Alumni Advisor", image: "/lokesh.jpg" },
    { name: "Surya Kiran", role: "Alumni Advisor", image: "/surya.jpeg" },
    { name: "Navneeth N", role: "Alumni Advisor", image: "/Navneeth.jpeg" },
  ],
  "2023-24": [
    { name: "Adithya S Nair", role: "Chair", image: "/adithya.png" },
    { name: "Akarsh S Nair", role: "Vice Chair", image: "/akarsh2.png" },
    { name: "Aadithyan Raju", role: "Secretary", image: "/Aadithyanraju.jpeg" },
    { name: "Dhruv R Krishnan", role: "SIG AI Lead", image: "/dhruvrk.jpg" },
    { name: "A P Krishna", role: "SIG AI Co-Lead", image: "/krishna.jpeg" },
    { name: "Maanav Thalapilly", role: "SIG CP Lead", image: "/maanav.png" },
    { name: "Kisor G", role: "SIG Glitch Lead", image: "/kisore.jpg" },
    { name: "Athul Gireesh", role: "Social Media Manager", image: "/athul.png" },
    { name: "Gautham Krishna", role: "Design Lead", image: "/gautham.png" },
    { name: "Ashwin Sabu", role: "Design Co-Lead", image: "/ashwinsabu.png" },
  ],
  "2022-23": [
    { name: "R Neeraja Anand", role: "AI Lead", image: "/neeraja.jpg" },
    { name: "Aby Stalin", role: "Creative Head", image: "/aby.jpg" },
    { name: "Sudhin S", role: "Competitive Programming Lead", image: "/sudhin.jpg" },
    { name: "Akhil S Kumar", role: "Web Lead", image: "/me.jpg" },
    { name: "Vipin Venu", role: "Cybersecurity Lead", image: "/vipin.jpg" },
  ],
};

export default function Alumni() {
  const years = Object.keys(alumni);
  const [year, setYear] = useState(years[0]);
  return <div className="subpage people-clean-page">
    <section className="people-hero section-shell">
      <p className="section-kicker">[ Chapter archive / alumni ]</p>
      <h1>Once ACM.<br/><span>Always ACM.</span></h1>
      <div><p>The builders and leaders who shaped each chapter era and carried that energy into what came next.</p><b>ARCHIVE / {years.length} COHORTS</b></div>
    </section>
    <section className="alumni-destinations section-shell">
      <div className="alumni-destinations-copy">
        <p className="section-kicker">[ Alumni destinations ]</p>
        <h2>From our chapter<br/>to teams that <span>shape industries.</span></h2>
        <p>Our alumni carry the chapter's curiosity, craft, and collaborative spirit into leading technology, consulting, automotive, and research organizations.</p>
        <b>GLOBAL IMPACT / GROWING EVERY YEAR</b>
      </div>
      <div className="alumni-company-wall">
        <Image src="/alumni-companies.png" alt="Companies where ACM Amritapuri alumni work" width={443} height={231} sizes="(max-width: 900px) 100vw, 520px" priority />
      </div>
    </section>
    <div className="year-switcher section-shell" role="tablist" aria-label="Alumni year">
      {years.map(y => <button role="tab" aria-selected={year === y} className={year === y ? "active" : ""} onClick={() => setYear(y)} key={y}><small>COHORT</small>{y}<span>{String(alumni[y].length).padStart(2, "0")}</span></button>)}
    </div>
    <AnimatePresence mode="wait"><motion.section key={year} className="people-grid section-shell" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
      {alumni[year].map((person, i) => <PersonCard person={person} index={i} key={person.name}/>)}
    </motion.section></AnimatePresence>
  </div>;
}
