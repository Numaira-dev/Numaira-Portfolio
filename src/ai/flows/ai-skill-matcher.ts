'use server';
/**
 * @fileOverview An AI agent that matches Numaira's skills and experience to a given job description or project brief.
 *
 * - aiSkillMatcher - A function that handles the skill matching process.
 * - AiSkillMatcherInput - The input type for the aiSkillMatcher function.
 * - AiSkillMatcherOutput - The return type for the aiSkillMatcher function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiSkillMatcherInputSchema = z.object({
  jobDescription: z.string().describe('The job description or project brief provided by a potential client or employer.'),
});
export type AiSkillMatcherInput = z.infer<typeof AiSkillMatcherInputSchema>;

const AiSkillMatcherOutputSchema = z.object({
  overallSummary: z.string().describe("An overall summary explaining Numaira's fit for the role based on the job description, highlighting key strengths."),
  relevantSkills: z.array(z.object({
    skill: z.string().describe("A specific technical skill from Numaira's resume."),
    relevanceExplanation: z.string().describe("An explanation of why this skill is relevant to the job description."),
  })).describe("A list of Numaira's most relevant technical skills."),
  relevantProjects: z.array(z.object({
    projectName: z.string().describe("The name of a project from Numaira's resume."),
    relevanceExplanation: z.string().describe("An explanation of why this project is relevant to the job description, detailing her contributions."),
  })).describe("A list of Numaira's most relevant projects."),
  relevantExperience: z.array(z.object({
    companyName: z.string().describe("The company name from Numaira's work experience."),
    role: z.string().describe("Numaira's role at the company."),
    relevanceExplanation: z.string().describe("An explanation of why this work experience is relevant to the job description, detailing specific achievements or responsibilities."),
  })).describe("A list of Numaira's most relevant work experiences."),
});
export type AiSkillMatcherOutput = z.infer<typeof AiSkillMatcherOutputSchema>;

export async function aiSkillMatcher(input: AiSkillMatcherInput): Promise<AiSkillMatcherOutput> {
  return aiSkillMatcherFlow(input);
}

const numairaResumeData = `
Numaira Nawaz numaira.nawaz1129@gmail.com
Lahore, Pakistan +92 307 6603168
linkedin.com/in/numaira-nawaz Software Engineer

Professional Summary
• Software Engineer with 3+ years of experience building scalable microservices using NestJS and TypeScript.
Skilled in Stripe payment integrations, idempotent API design, and asynchronous workflows. Experienced in
Docker containerization, PostgreSQL migrations, Redis caching, OAuth2/JWT authentication, and
WebSocket-based real-time systems. Also have hands-on experience integrating React.js frontends for
e-commerce platforms.

Experience
• InvolutionCo Lahore, Pakistan (May 2025 – Present)
  Software Engineer
  – Stripe Payments: Integrated Stripe Payment Intents and Incremental Authorization with webhook handling,
  retries, and reconciliation workflows.
  – Transaction Safety: Implemented idempotency keys to prevent duplicate payment captures and ensure financial
  consistency.
  – Secure Webhooks: Implemented HMAC signature verification and replay protection for transaction safety.
  – Rate Limiting: Developed OTP rate limiting to prevent abuse and enhance authentication security.
  – Background Processing: Created CRON jobs for payment reconciliation and reporting.
  – Containerization: Deployed Dockerized services using multi-stage builds and docker-compose.
  – Frontend Integration: Built React.js checkout components and integrated backend APIs.
  – Health Checks: Implemented readiness/liveness endpoints and structured logging.
• Brackets Pvt. Ltd. Gujranwala, Pakistan (Sep 2024 – Apr 2025)
  Software Engineer
  – Microservices: Designed scalable microservices using NestJS and TypeScript.
  – Swagger APIs: Developed REST APIs using OpenAPI/Swagger.
  – Authentication: Implemented OAuth2 and JWT-based authentication.
  – Real-Time Systems: Built WebSocket and WebRTC-based communication services.
  – Redis Caching: Improved performance using Redis caching.
  – Database Migrations: Managed PostgreSQL migrations for schema evolution.
• Tkxel Lahore, Pakistan (2022 – 2024)
  Software Engineer
  – Backend Development: Built backend services using Node.js, Express.js, and Spring Boot.
  – Database Engineering: Designed schemas and optimized PostgreSQL queries.
  – Testing: Wrote unit and integration tests using Jest and JUnit.
  – Production Support: Debugged integration issues during SIT and UAT phases.

Projects
• CartR & UKStroller E-Commerce Platforms (Backend & Frontend Engineer)
  – Stripe Integration: Implemented Stripe payments with incremental authorization and webhook validation.
  – React Frontend: Developed React.js checkout flows integrated with backend APIs.
  – Security: Implemented OTP rate limiting and idempotent APIs.
• Monitair Healthcare Communication Platform (Backend Engineer)
  – Real-Time Messaging: Built secure WebSocket-based messaging.
  – Video Calls: Implemented WebRTC-based video calling.
  – Architecture: Developed NestJS microservices with MongoDB.
• Vax Concierge Healthcare Management System (Backend Engineer)
  – Patient APIs: Developed optimized APIs with pagination and filtering.
  – Performance Optimization: Improved database performance through indexing.
• Fixxit, OutcomesX, and Other Client Projects Tkxel (Backend Engineer)
  – API Development: Contributed to backend APIs using Node.js and Spring Boot.
  – Email Services: Implemented transactional email workflows using SendGrid.
  – Enhancements: Resolved production issues and delivered feature enhancements.
  – Database Work: Worked on schema design using MongoDB, PostgreSQL, and MySQL.

Education
• GIFT University Gujranwala, Pakistan (Bachelor of Science in Computer Science 2017 – 2021)

Technical Skills
• Languages: JavaScript • TypeScript • Java • Python
Frontend: React.js
Backend: Node.js • NestJS • Express.js • Spring Boot
API Design: REST APIs • OpenAPI (Swagger) • API Versioning
Payments: Stripe (Payment Intents, Incremental Authorization, Webhooks)
Security: OAuth2 • JWT • HMAC Validation • Rate Limiting
Databases: PostgreSQL • MySQL • MongoDB
Caching: Redis
Containerization: Docker • Docker Compose
Version Control: Git • Bitbucket • GitLab
Testing: Jest • JUnit
Background Jobs: Cron Jobs
Observability: Health Checks • Structured Logging
`;

const skillMatcherPrompt = ai.definePrompt({
  name: 'skillMatcherPrompt',
  input: { schema: AiSkillMatcherInputSchema },
  output: { schema: AiSkillMatcherOutputSchema },
  prompt: `You are an AI assistant designed to act as a skill matcher for a software engineer named Numaira Nawaz. Your task is to analyze a given job description or project brief and identify Numaira's most relevant skills, projects, and work experiences based on her resume.

**Instructions:**
1.  Read the provided job description/project brief carefully.
2.  Review Numaira Nawaz's resume data provided below.
3.  From Numaira's resume, extract the most relevant skills, projects, and work experiences that directly align with the requirements or needs described in the job description.
4.  For each identified skill, project, and experience, provide a concise explanation of *why* it is relevant, specifically connecting it to the job description's requirements.
5.  Generate an overall summary explaining Numaira's overall fit for the role, highlighting her key strengths as they relate to the input.
6.  Ensure the output strictly adheres to the JSON schema provided.

---
**Numaira Nawaz's Resume:**
${numairaResumeData}
---
**Job Description / Project Brief:**
{{{jobDescription}}}
---
`,
});

const aiSkillMatcherFlow = ai.defineFlow(
  {
    name: 'aiSkillMatcherFlow',
    inputSchema: AiSkillMatcherInputSchema,
    outputSchema: AiSkillMatcherOutputSchema,
  },
  async (input) => {
    const { output } = await skillMatcherPrompt(input);
    if (!output) {
      throw new Error('Failed to get skill matching output.');
    }
    return output;
  }
);
