
"use client";

import React from 'react';
import { 
  Code2, Layout, Database, ShieldCheck, 
  Layers, TestTube, Terminal, Zap, Globe, Cpu, RefreshCw, BarChart3
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Java", "Python"]
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "NestJS", "Express.js", "Spring Boot"]
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "API Design",
    icon: Globe,
    skills: ["REST APIs", "OpenAPI (Swagger)", "API Versioning", "WebSocket"]
  },
  {
    title: "Payments",
    icon: Zap,
    skills: ["Stripe Intents", "Incremental Auth", "Webhooks", "Reconciliation"]
  },
  {
    title: "Databases & Caching",
    icon: Layers,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "Infrastructure",
    icon: Cpu,
    skills: ["Docker", "Docker Compose", "Multi-stage Builds"]
  },
  {
    title: "Security",
    icon: ShieldCheck,
    skills: ["OAuth2", "JWT", "HMAC Validation", "Rate Limiting"]
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: ["Git", "Bitbucket", "GitLab", "CI/CD"]
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["Jest", "JUnit", "Unit Testing", "Integration Testing"]
  },
  {
    title: "Background Processing",
    icon: RefreshCw,
    skills: ["Cron Jobs", "Message Queues", "Async Workflows"]
  },
  {
    title: "Observability",
    icon: BarChart3,
    skills: ["Health Checks", "Structured Logging", "UAT Support"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 container mx-auto px-4 md:px-8">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-primary font-headline font-bold tracking-wider uppercase text-sm">Tech Stack</h2>
        <h3 className="text-4xl md:text-5xl font-headline font-bold">Technical <span className="text-secondary">Skills</span> Matrix</h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A comprehensive overview of my specialized technical capabilities and the tools I use daily.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <Card key={idx} className="glass-card border-none hover:bg-white/[0.06] transition-all group overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline font-bold text-lg">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <Badge 
                      key={sIdx} 
                      variant="secondary" 
                      className="bg-white/5 text-muted-foreground hover:bg-secondary hover:text-white border-none transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
