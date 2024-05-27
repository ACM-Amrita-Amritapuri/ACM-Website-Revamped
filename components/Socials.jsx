import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiInstagramFill,
  RiFacebookFill,
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/acm.amrita/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookCircleFill,
  },
  {
    name: "Github",
    link: "https://github.com/ACM-Amrita-Amritapuri",
    Icon: RiGithubFill,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/acm-student-chapter-amrita-amritapuri/",
    Icon: RiLinkedinBoxFill,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full p-[5px] hover:bg-accent
           hover:text-white transition-all duration-300"
        >
          <social.Icon size={22} aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
