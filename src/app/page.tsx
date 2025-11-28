// app/page.tsx
import Header from './components/Header';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import StaggerAnimation from './components/StaggerAnimation';
import HoverGlow from './components/HoverGlow';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { GoArrowUpRight } from 'react-icons/go';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 p-16">
        {/* Sidebar */}
        <StaggerAnimation delay={200}>
          <Header />
        </StaggerAnimation>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
        <div className="sticky top-4 z-10 mb-8 flex justify-end">
    <Link 
      href="/contact"
      className="bg-gradient-to-r from-[#4a7aff] to-[#4a9eff] text-white rounded-2xl px-6 py-3 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-300 group text-sm font-medium"
    >
      <Mail className="w-4 h-4" />
      Contact Me
      <GoArrowUpRight className="group-hover:translate-x-0 group-hover:-translate-x-1 transition-transform" />
    </Link>
  </div>

          <StaggerAnimation delay={600}>
              <ExperienceSection />
          </StaggerAnimation>
          
          <StaggerAnimation delay={800}>
              <Projects />
          </StaggerAnimation>
          
          <StaggerAnimation delay={1000}>
              <Education />
          </StaggerAnimation>
          
          <StaggerAnimation delay={1200}>
              <Skills />
          </StaggerAnimation>
        </div>
      </div>
    </div>
  );
}