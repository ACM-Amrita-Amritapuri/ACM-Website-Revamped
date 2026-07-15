import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen, FiCpu, FiGlobe, FiUsers } from "react-icons/fi";

const events = [
  {
    id: "01",
    year: "2024",
    title: "EvoLUMIN",
    type: "National Tech Hackathon",
    date: "26-27 October 2024",
    format: "36-hour grand finale",
    audience: "Students across India",
    text: "A national innovation challenge built around meaningful real-world problems. More than 250 teams registered, 65 ideas were submitted, and 25 finalist teams came together at Amritapuri for an intense offline build.",
    tags: ["Healthcare", "Agriculture", "Sustainable Development"],
    href: "https://evo-lumin.vercel.app/",
    Icon: FiCpu,
    featured: true,
  },
  {
    id: "02",
    year: "2025",
    title: "ACM Summer School",
    type: "Technology Outreach Program",
    date: "Summer 2025",
    format: "Immersive hands-on program",
    audience: "Young technology learners",
    text: "A beginner-friendly technology adventure designed around learning by doing, connecting with experts, and building alongside other curious students.",
    tags: ["AI & ML", "Cybersecurity", "Web & App", "Game Development", "Robotics & Aerospace"],
    href: "https://aseam.acm.org/summerschool/",
    Icon: FiGlobe,
  },
  {
    id: "03",
    year: "2025",
    title: "OLabs Hackathon",
    type: "National Education Hackathon",
    date: "28 February-1 March 2025",
    format: "36-hour offline finale",
    audience: "Students & industry professionals",
    text: "A national hackathon focused on reimagining virtual education through creative, practical, and scalable technology for the OLabs learning platform.",
    tags: ["AI", "Cybersecurity", "VR / AR", "Data Science", "IoT", "LLMs"],
    href: "https://www.amrita.edu/events/olabs-hackathon/",
    Icon: FiUsers,
  },
  {
    id: "04",
    year: "2024",
    title: "Bridge Course",
    type: "First-Year Foundation Program",
    date: "Two-month program",
    format: "Theory + practical sessions",
    audience: "First-year engineering students",
    text: "A guided transition from school to college that helps new students explore technical fields, build foundational skills, and discover the direction they want to pursue.",
    tags: ["Artificial Intelligence", "Cybersecurity", "Competitive Programming", "Web Development"],
    href: "/bridge_course",
    Icon: FiBookOpen,
  },
];

export default function Events() {
  return <div className="subpage events-page">
    <section className="subpage-hero compact section-shell">
      <div><p className="section-kicker">[ Past events / field log ]</p><h1>Ideas became<br/><span>experiences.</span></h1></div>
      <div className="subpage-intro"><b>CHAPTER EVENT ARCHIVE</b><p>Hackathons, outreach programs, and learning experiences designed to turn curiosity into confident action.</p></div>
    </section>

    <section className="events-archive section-shell">
      {events.map(({ Icon, ...event }, index) => <motion.article className={event.featured ? "event-archive-card featured" : "event-archive-card"} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .08 }} key={event.title}>
        <div className="event-card-head"><span>{event.id} / {event.year}</span><Icon/></div>
        <div className="event-card-title"><small>{event.type}</small><h2>{event.title}</h2></div>
        <p>{event.text}</p>
        <dl><div><dt>Date</dt><dd>{event.date}</dd></div><div><dt>Format</dt><dd>{event.format}</dd></div><div><dt>For</dt><dd>{event.audience}</dd></div></dl>
        <ul>{event.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <Link href={event.href} target={event.href.startsWith("http") ? "_blank" : undefined} rel={event.href.startsWith("http") ? "noreferrer" : undefined}>Explore event <FiArrowUpRight/></Link>
      </motion.article>)}
      <article className="event-archive-card event-placeholder"><span>EVENT SLOT / 05</span><h2>More chapter stories incoming.</h2><p>Photos, dates, outcomes, speakers, and links can be added here when you send the next event details.</p></article>
    </section>
  </div>;
}
