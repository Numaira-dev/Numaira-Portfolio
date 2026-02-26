
import { Navbar } from '@/components/portfolio/navbar';
import { Hero } from '@/components/portfolio/hero';
import { About } from '@/components/portfolio/about';
import { Experience } from '@/components/portfolio/experience';
import { Skills } from '@/components/portfolio/skills';
import { Projects } from '@/components/portfolio/projects';
import { SkillMatcher } from '@/components/portfolio/skill-matcher';
import { Contact } from '@/components/portfolio/contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <SkillMatcher />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Numaira Nawaz. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and Passion.</p>
        </div>
      </footer>
    </main>
  );
}
