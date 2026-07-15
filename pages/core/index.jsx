import { motion } from "framer-motion";
import PersonCard from "../../components/PersonCard";

const core = [
  { name: "Anaswara A", role: "Cyber Co-Lead", area: "Cybersecurity", image: "/anashwara.jpeg" },
  { name: "Govardhan Satya", role: "AI Co-Lead", area: "Artificial intelligence", image: "/govardhan.jpeg" },
];

export default function Core() {
  return <div className="subpage people-clean-page">
    <section className="people-hero section-shell">
      <p className="section-kicker">[ Current command / active team ]</p>
      <h1>The people behind<br/><span>the momentum.</span></h1>
      <div><p>Student leaders coordinating every SIG, event, project, and slightly chaotic late-night build session.</p><b>{String(core.length).padStart(2, "0")} CORE MEMBERS</b></div>
    </section>
    <motion.section className="people-grid section-shell people-grid-current" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: .05 } } }}>
      {core.map((person, i) => <motion.div key={person.name} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}><PersonCard person={person} index={i}/></motion.div>)}
    </motion.section>
  </div>;
}
