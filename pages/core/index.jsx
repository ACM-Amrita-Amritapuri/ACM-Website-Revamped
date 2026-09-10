import { motion } from "framer-motion";
import PersonCard from "../../components/PersonCard";

const core = [
  { name: "Anaswara A", role: "Chair", area: "Core Committee", image: "/anashwara.jpeg" },
  { name: "Sanjay", role: "Vice Chair", area: "SIG AI", image: "/sanjay.png" },
  { name: "Nishanth", role: "Vice Chair", area: "SIG AI", image: "/nishanth.png" },
  { name: "Sreelaya", role: "Secretary", area: "Core Committee", image: "/sreelaya.png" },
  { name: "Punit", role: "Treasurer & SIG AI Lead", area: "SIG AI", image: "/punit.png" },
  { name: "Sai Anand", role: "Web Master", area: "SIG Web & App", image: "/sai-anand.png" },
  { name: "Semin", role: "Cyber SIG Lead", area: "SIG Cyber", image: "/semin.png" },
  { name: "Mounish", role: "SIG Glitch Lead", area: "SIG Glitch", image: "/mounish.png" },
  { name: "Sreejith", role: "Web & App Development Lead", area: "SIG Web & App", image: "/sreejith.png" },
  { name: "Mohith", role: "AI Co-Lead", area: "SIG AI", image: "/mohith.png" },
  { name: "Poonguzhaly", role: "Cyber Co-Lead", area: "SIG Cyber", image: "/poonguzhaly.png" },
  { name: "Meera", role: "Web & App Co-Lead", area: "SIG Web & App", image: "/meera.png" },
  { name: "Anirudh", role: "Web & App Core Member", area: "SIG Web & App", image: "/anirudh.png" },
  { name: "Rajmohith", role: "Cyber Core Member", area: "SIG Cyber", image: "/rajmohith.png" },
  { name: "Tenisha", role: "Cyber Core Member", area: "SIG Cyber", image: "/tenisha.png" },
];

export default function Core() {
  return <div className="subpage people-clean-page core-page">
    <section className="people-hero section-shell">
      <p className="section-kicker">[ Current command / active team ]</p>
      <h1>The people behind<br/><span>the momentum.</span></h1>
      <div><p>Student leaders coordinating every SIG, event, project, and slightly chaotic late-night build session.</p><b>{String(core.length).padStart(2, "0")} CORE MEMBERS</b></div>
    </section>
    <motion.section className="people-grid section-shell" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: .05 } } }}>
      {core.map((person, i) => <motion.div key={person.name} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}><PersonCard person={person} index={i}/></motion.div>)}
    </motion.section>
  </div>;
}
