// app/page.tsx
import Header from './components/Header';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import StaggerAnimation from './components/StaggerAnimation';
import HoverGlow from './components/HoverGlow';

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