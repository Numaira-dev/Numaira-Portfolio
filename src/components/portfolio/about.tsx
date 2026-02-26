
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  "3+ Years of Professional Experience",
  "Expertise in NestJS & TypeScript",
  "Specialized in Fintech & Payments (Stripe)",
  "Proficient in Microservices Architecture",
  "Modern Frontend with React.js",
  "Docker & Containerization Expert"
];

export function About() {
  return (
    <section id="about" className="py-24 container mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-primary font-headline font-bold tracking-wider uppercase text-sm">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
              Crafting Digital Solutions with <span className="text-secondary">Precision</span>
            </h3>
          </div>
          
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am a dedicated Software Engineer based in Lahore, Pakistan, with a passion for building scalable, high-quality backends. My journey in tech started with a Computer Science degree from GIFT University and has evolved into a robust career building microservices for diverse industries.
            </p>
            <p>
              I specialize in the MERN stack with a heavy focus on NestJS and TypeScript for backend systems. My core expertise lies in financial integrations, real-time communication systems, and optimizing database performance for high-load applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl rounded-3xl"></div>
          <Card className="glass-card border-none overflow-hidden relative z-10">
            <CardContent className="p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>NestJS / TypeScript</span>
                  <span className="text-secondary">95%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>Stripe / Payments</span>
                  <span className="text-secondary">90%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>PostgreSQL / MongoDB</span>
                  <span className="text-secondary">88%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>React.js Frontend</span>
                  <span className="text-secondary">85%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>Docker / Microservices</span>
                  <span className="text-secondary">80%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
