
"use client";

import React, { useState } from 'react';
import { aiSkillMatcher, AiSkillMatcherOutput } from '@/ai/flows/ai-skill-matcher';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Sparkles, CheckCircle, Briefcase, Code, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function SkillMatcher() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<AiSkillMatcherOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMatch = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const output = await aiSkillMatcher({ jobDescription: input });
      setResult(output);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-24 container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> AI-Powered Assistant
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Skill <span className="text-secondary">Matcher</span> Tool</h2>
          <p className="text-muted-foreground text-lg">
            Paste a job description or project brief below to see how my specific skills and projects align with your requirements.
          </p>
        </div>

        <Card className="glass-card border-none shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Sparkles className="w-32 h-32 text-secondary" />
          </div>
          <CardContent className="p-8 space-y-6">
            <Textarea 
              placeholder="Example: We are looking for a Senior NestJS Engineer to integrate Stripe payments and manage a PostgreSQL database..."
              className="min-h-[150px] bg-white/5 border-white/10 text-lg placeholder:text-muted-foreground focus:ring-secondary"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg font-bold rounded-xl"
              onClick={handleMatch}
              disabled={loading || !input.trim()}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing Resume Data...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Analyze My Fit
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {error && (
          <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {result && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-headline flex items-center gap-2">
                  <CheckCircle className="text-secondary w-6 h-6" />
                  Overall Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">{result.overallSummary}</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-headline flex items-center gap-2 border-b border-white/10 pb-2">
                  <Terminal className="text-secondary w-5 h-5" />
                  Relevant Technical Skills
                </h3>
                {result.relevantSkills.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <Badge variant="secondary" className="bg-primary text-white text-sm px-3">{s.skill}</Badge>
                    <p className="text-muted-foreground text-sm pt-1">{s.relevanceExplanation}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold font-headline flex items-center gap-2 border-b border-white/10 pb-2">
                  <Code className="text-secondary w-5 h-5" />
                  Relevant Projects
                </h3>
                {result.relevantProjects.map((p, idx) => (
                  <div key={idx} className="space-y-1 p-3 rounded-lg bg-white/5 border border-white/5">
                    <h4 className="font-bold text-foreground">{p.projectName}</h4>
                    <p className="text-muted-foreground text-sm">{p.relevanceExplanation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-2 border-b border-white/10 pb-2">
                <Briefcase className="text-secondary w-5 h-5" />
                Matching Experience
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {result.relevantExperience.map((e, idx) => (
                  <Card key={idx} className="glass-card border-none">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-foreground">{e.companyName}</h4>
                        <Badge variant="outline" className="text-xs text-secondary border-secondary/30">{e.role}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{e.relevanceExplanation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
