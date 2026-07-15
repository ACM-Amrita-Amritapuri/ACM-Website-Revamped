import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUpRight } from "react-icons/fi";

export default function PersonCard({ person, index = 0 }) {
  const socials = [
    [person.linkedin, FiLinkedin, "LinkedIn"],
    [person.github, FiGithub, "GitHub"],
    [person.instagram, FiInstagram, "Instagram"],
  ].filter(([href]) => href);
  return <article className="person-card">
    <div className="person-image"><Image src={person.image} alt={person.name} fill sizes="(max-width: 600px) 90vw, 280px" /><span>MEMBER / {String(index + 1).padStart(2,"0")}</span></div>
    <div className="person-info"><small>{person.role}</small><h3>{person.name}</h3>{person.area && <p>{person.area}</p>}<div className="person-socials">{socials.map(([href,Icon,label])=><Link href={href} target="_blank" rel="noreferrer" aria-label={`${person.name} on ${label}`} key={label}><Icon/></Link>)}{socials.length===0&&<span>PROFILE PENDING</span>}<FiArrowUpRight className="person-arrow"/></div></div>
  </article>;
}
