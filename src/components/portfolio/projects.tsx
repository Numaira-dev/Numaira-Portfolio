
import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Code, Server, CreditCard, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    title: "CartR & UKStroller",
    subtitle: "E-Commerce Platforms",
    image: PlaceHolderImages.find(img => img.id === 'project-cartr')?.imageUrl,
    hint: "ecommerce checkout",
    icon: CreditCard,
    role: "Backend & Frontend Engineer",
    description: "Built end-to-end checkout experiences with complex payment requirements.",
    tags: ["NestJS", "React.js", "Stripe", "PostgreSQL", "Docker"],
    points: [
      "Stripe Integration with incremental authorization",
      "React checkout flow with real-time validation",
      "Security: OTP rate limiting and idempotent APIs"
    ]
  },
  {
    title: "Monitair",
    subtitle: "Healthcare Communication",
    image: PlaceHolderImages.find(img => img.id === 'project-monitair')?.imageUrl,
    hint: "healthcare app",
    icon: MessageSquare,
    role: "Backend Engineer",
    description: "High-security platform for real-time messaging and video consultations.",
    tags: ["NestJS", "WebRTC", "WebSocket", "MongoDB", "Redis"],
    points: [
      "Secure WebSocket-based messaging",
      "WebRTC-based video calling implementation",
      "Microservices architecture for scalability"
    ]
  },
  {
    title: "Vax Concierge",
    subtitle: "Healthcare Management",
    image: PlaceHolderImages.find(img => img.id === 'project-vax')?.imageUrl,
    hint: "medical dashboard",
    icon: Server,
    role: "Backend Engineer",
    description: "Optimized patient management system with focus on performance.",
    tags: ["Node.js", "Express.js", "MySQL", "SendGrid"],
    points: [
      "Optimized APIs with advanced pagination/filtering",
      "Transactional email workflows via SendGrid",
      "DB performance tuning through indexing"
    ]
  },
  {
    title: "Fixxit & OutcomesX",
    subtitle: "Enterprise Client Projects",
    image: PlaceHolderImages.find(img => img.id === 'project-backend')?.imageUrl,
    hint: "server architecture",
    icon: Code,
    role: "Backend Engineer",
    description: "Delivering critical backend features for various industrial clients.",
    tags: ["Node.js", "Spring Boot", "PostgreSQL", "Jest"],
    points: [
      "Contributed to core API development",
      "Resolved complex production issues",
      "Delivered feature enhancements for legacy systems"
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-primary font-headline font-bold tracking-wider uppercase text-sm">My Work</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold">Featured <span className="text-secondary">Projects</span></h3>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A selection of complex engineering challenges solved with modern technology stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card key={idx} className="glass-card border-none overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.image || 'https://picsum.photos/seed/placeholder/800/600'} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <Badge className="absolute top-4 right-4 bg-primary text-white border-none">{project.subtitle}</Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-secondary mb-1">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">{project.role}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold font-headline">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <ul className="space-y-1.5">
                    {project.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex gap-2 text-sm text-foreground/80">
                        <span className="text-secondary font-bold">•</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <Badge key={tIdx} variant="outline" className="bg-white/5 border-white/10 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-4 border-t border-white/5 pt-6 mt-2">
                  <Button variant="link" className="text-secondary hover:text-white p-0 h-auto font-semibold flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button variant="link" className="text-muted-foreground hover:text-white p-0 h-auto font-semibold flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Source Code
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
