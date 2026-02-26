
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          Available for New Projects
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          Building <span className="text-secondary">Robust</span> Backend Systems with Scalable Architecture
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          Hi, I'm <span className="text-foreground font-semibold">Numaira Nawaz</span>. A Software Engineer with 3+ years of experience specializing in NestJS, React, and Stripe integrations for high-performance applications.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-primary hover:bg-secondary text-white h-14 px-8 text-lg font-semibold group rounded-full" asChild>
            <Link href="#projects">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full border-white/10 hover:bg-white/5" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <Link href="https://linkedin.com/in/numaira-nawaz" target="_blank" className="text-muted-foreground hover:text-secondary transition-colors p-2 glass-card rounded-full">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:numaira.nawaz1129@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors p-2 glass-card rounded-full">
            <Mail className="w-6 h-6" />
          </Link>
          <Link href="tel:+923076603168" className="text-muted-foreground hover:text-secondary transition-colors p-2 glass-card rounded-full">
            <Smartphone className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[120px] rounded-full -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full -z-0"></div>
    </section>
  );
}
