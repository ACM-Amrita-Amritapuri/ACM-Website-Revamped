import { Inter, Space_Grotesk } from "next/font/google";
import Header from "./Header";
import Socials from "./Socials";
import TechBackdrop from "./TechBackdrop";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export default function Layout({ children }) {
  return (
    <div className={`${inter.variable} ${space.variable} site-root`}>
      <TechBackdrop />
      <Header />
      <main>{children}</main>
      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <div><strong>ACM</strong><span>Amritapuri Student Chapter</span></div>
          <p>Built by students, for students.</p>
          <Socials />
        </div>
      </footer>
    </div>
  );
}
