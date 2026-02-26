
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Numaira Nawaz | Software Engineer Portfolio',
  description: 'Professional portfolio of Numaira Nawaz, a Software Engineer specialized in NestJS, React, and Fintech solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-secondary selection:text-white">
        {children}
      </body>
    </html>
  );
}
