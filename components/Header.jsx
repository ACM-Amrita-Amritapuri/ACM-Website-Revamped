import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const links=[{label:"About",href:"/about"},{label:"SIGs",href:"/sigs"},{label:"Events",href:"/events"},{label:"Achievements",href:"/achievements"},{label:"Core",href:"/core"},{label:"Alumni",href:"/alumni"},{label:"Faculty",href:"/faculty"},{label:"Contact",href:"/contact"}];
export default function Header(){const [open,setOpen]=useState(false);const router=useRouter();return <header className="site-header"><div className="section-shell header-inner"><Link href="/" className="brand" aria-label="ACM Amritapuri home"><Image src="/Logo.png" alt="" width={174} height={38} priority/></Link><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span/><span/></button><nav className={open?"open":""} aria-label="Main navigation">{links.map(link=><Link className={router.pathname===link.href?"active":""} href={link.href} key={link.label} onClick={()=>setOpen(false)}>{link.label}</Link>)}<Link href="https://aseam.acm.org/join" target="_blank" className="nav-cta">Join <span>↗</span></Link></nav></div></header>}
