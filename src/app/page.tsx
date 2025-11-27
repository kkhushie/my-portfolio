import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <About />
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </div>
      </div>
    </main>
  );
}