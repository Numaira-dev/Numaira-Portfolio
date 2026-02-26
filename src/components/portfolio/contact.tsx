
"use client";

import React from 'react';
import { Mail, Smartphone, Linkedin, MapPin, Send, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    label: "Email Me",
    value: "numaira.nawaz1129@gmail.com",
    href: "mailto:numaira.nawaz1129@gmail.com"
  },
  {
    icon: Smartphone,
    label: "Call Me",
    value: "+92 307 6603168",
    href: "tel:+923076603168"
  },
  {
    icon: Linkedin,
    label: "Connect",
    value: "linkedin.com/in/numaira-nawaz",
    href: "https://linkedin.com/in/numaira-nawaz"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "#"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 container mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-primary font-headline font-bold tracking-wider uppercase text-sm">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold">Let's <span className="text-secondary">Connect</span> and Build Together</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a specific question or just want to say hi, feel free to reach out.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <Link key={idx} href={info.href} className="group">
                  <Card className="glass-card border-none h-full group-hover:bg-white/10 transition-colors">
                    <CardContent className="p-6 space-y-3">
                      <div className="p-2 w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{info.label}</p>
                        <p className="text-sm font-medium text-foreground truncate">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="flex gap-4">
             <Link href="https://github.com" className="p-3 glass-card rounded-full text-muted-foreground hover:text-secondary hover:scale-110 transition-all">
                <Github className="w-6 h-6" />
             </Link>
             <Link href="https://linkedin.com/in/numaira-nawaz" className="p-3 glass-card rounded-full text-muted-foreground hover:text-secondary hover:scale-110 transition-all">
                <Linkedin className="w-6 h-6" />
             </Link>
          </div>
        </div>

        <Card className="glass-card border-none shadow-xl">
          <CardContent className="p-8 space-y-6">
            <h4 className="text-2xl font-bold font-headline mb-4">Send a Message</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <Input placeholder="John Doe" className="bg-white/5 border-white/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <Input placeholder="john@example.com" type="email" className="bg-white/5 border-white/10" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Subject</label>
              <Input placeholder="Project Inquiry" className="bg-white/5 border-white/10" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Message</label>
              <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-white/5 border-white/10" />
            </div>
            <Button className="w-full bg-primary hover:bg-secondary text-white h-12 text-lg font-bold group">
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
