
import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const experiences = [
  {
    company: "InvolutionCo",
    role: "Software Engineer",
    period: "May 2025 – Present",
    location: "Lahore, Pakistan",
    description: "Focusing on advanced fintech integrations and high-load payment systems.",
    achievements: [
      "Stripe Payments: Integrated Payment Intents with complex webhook handling.",
      "Transaction Safety: Implemented idempotency keys for financial consistency.",
      "Secure Webhooks: HMAC signature verification and replay protection.",
      "Rate Limiting: Developed OTP rate limiting for enhanced security.",
      "Containerization: Deployed Dockerized services with multi-stage builds."
    ]
  },
  {
    company: "Brackets Pvt. Ltd.",
    role: "Software Engineer",
    period: "Sep 2024 – Apr 2025",
    location: "Gujranwala, Pakistan",
    description: "Architected microservices and real-time communication tools.",
    achievements: [
      "Microservices: Designed scalable microservices using NestJS.",
      "Real-Time Systems: Built WebSocket and WebRTC communication services.",
      "Swagger APIs: Developed REST APIs with full OpenAPI documentation.",
      "Database Migrations: Managed PostgreSQL migrations for evolving schemas.",
      "Performance: Improved systems using Redis caching."
    ]
  },
  {
    company: "Tkxel",
    role: "Software Engineer",
    period: "2022 – 2024",
    location: "Lahore, Pakistan",
    description: "Contributed to major client projects and established core backend foundations.",
    achievements: [
      "Backend Dev: Built services using Node.js, Express.js, and Spring Boot.",
      "Database Engineering: Optimized complex PostgreSQL queries and schemas.",
      "Testing: Achieved high coverage with Jest and JUnit testing.",
      "Production Support: Led debugging during SIT and UAT phases."
    ]
  }
];

const education = [
  {
    school: "GIFT University",
    degree: "Bachelor of Science in Computer Science",
    period: "2017 – 2021",
    location: "Gujranwala, Pakistan",
    details: "Foundational computer science education with focus on algorithms and systems."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-primary font-headline font-bold tracking-wider uppercase text-sm">Professional Journey</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold">Experience & <span className="text-secondary">Education</span></h3>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A track record of delivering high-quality software solutions across diverse engineering environments.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 -translate-x-1/2"></div>
              
              <div className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'} relative`}>
                    {/* Timeline Dot */}
                    <div className="absolute top-2 left-[-36px] md:left-auto md:right-[-9px] md:top-2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-10"></div>
                    {idx % 2 === 0 && <div className="hidden md:block absolute top-2 left-[-9px] w-4 h-4 rounded-full bg-secondary border-4 border-background z-10"></div>}

                    <div className="flex items-center gap-2 text-secondary font-medium mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <h4 className="text-2xl font-bold font-headline">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground font-medium text-lg">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <Card className="glass-card border-none">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <p className="text-foreground mb-4 font-medium">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex gap-2 text-muted-foreground text-sm">
                            <span className="text-secondary font-bold">•</span>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}

          {/* Education Section */}
          <div className="pt-12">
            <h4 className="text-center text-2xl font-bold font-headline mb-12 flex items-center justify-center gap-3">
              <GraduationCap className="text-secondary w-8 h-8" />
              Academic Background
            </h4>
            <div className="max-w-2xl mx-auto">
              {education.map((edu, idx) => (
                <Card key={idx} className="glass-card border-none">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 text-secondary font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <h5 className="text-2xl font-bold font-headline">{edu.school}</h5>
                    <p className="text-xl font-medium text-foreground">{edu.degree}</p>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-muted-foreground pt-2 italic">
                      "{edu.details}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
