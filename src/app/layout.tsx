// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import AnimatedBackground from './components/AnimatedBackground';

export const metadata: Metadata = {
  title: 'Khushie Pal - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="cursor-none md:cursor-auto"> {/* Changed this line */}
        <PageLoader />
        <AnimatedBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}