import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { PERSONAL_DATA } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-400">
              Prince William Muchogo
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Software Engineer & AI Specialist creating innovative solutions at the intersection of artificial intelligence and internet of things.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Link href={PERSONAL_DATA.socials.github} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={PERSONAL_DATA.socials.linkedin} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={PERSONAL_DATA.socials.twitter} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href={`mailto:${PERSONAL_DATA.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-muted-foreground">
              {PERSONAL_DATA.email}<br />
              {PERSONAL_DATA.phone}
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Prince William Muchogo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}