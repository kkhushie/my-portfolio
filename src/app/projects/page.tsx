import { ExternalLink, Github, Calendar } from 'lucide-react';
import StaggerAnimation from '../components/StaggerAnimation';
import Link from 'next/link';

const projectsData=[
    { id:1,
      name: 'PostMania – Social Media Platform', 
      icon: '💬', 
      desc: 'Created a social media app with post creation, editing, likes, and profile picture uploads.',
      period: 'Nov 2024',
      features: [
        'Integrated Cloudinary for secure image storage and retrieval',
        'Real-time post interactions and user engagement'
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Cloudinary API'],
      links: {
        github: 'https://github.com/kkhushie/PostMania',
        live: 'http://postmania.onrender.com/'
      }
    },
    { 
        id:2,
      name: 'ReelCraft – Media Sharing Platform', 
      icon: '🎬', 
      desc: 'Modern full-stack media sharing platform using Next.js 13 with App Router and TypeScript.',
      period: 'Oct 2025',
      features: [
        'Integrated ImageKit for optimized media storage, processing, and adaptive video streaming',
        'Developed secure authentication with NextAuth.js and protected routes using middleware'
      ],
      tech: ['Next.js 13', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'NextAuth.js', 'ImageKit SDK'],
      links: {
        github: 'https://github.com/kkhushie/ReelCraft-next-app',
        live: 'https://reel-craft-next-app.vercel.app/'
      }
    },
    { 
        id:3,
      name: 'Codexpress – Institute Management System', 
      icon: '🏫', 
      desc: 'Comprehensive institute management system with role-based access control and Stripe payments.',
      period: 'April 2025',
      features: [
        'Integrated Stripe payment gateway for course enrollments and fee processing',
        'Developed admin, faculty, and student portals with customized dashboards and analytics'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'Tailwind CSS', 'JWT'],
      links: {
        github: 'https://github.com/kkhushie/Codexpress',
        live: null
      }
    },
    { 
        id:4,
      name: 'Attendance Management System (QR-Based)', 
      icon: '📱', 
      desc: 'Automated attendance system generating unique QR codes with real-time tracking.',
      period: 'Feb 2025',
      features: [
        'Implemented real-time attendance tracking with instant reporting and analytics',
        'Designed responsive admin dashboard for monitoring attendance patterns and statistics'
      ],
      tech: ['MERN Stack', 'QR Code API', 'WebSockets', 'Tailwind CSS'],
      links: {
        github: 'https://github.com/kkhushie/Smart-Attendence-System',
        live: null
      }
    },
    { 
        id: 5,
        name: 'ChatLab-AI – AI Chatbot', 
        icon: '🤖', 
        desc: 'Built an AI-powered chatbot using React.js and Gemini API with modern UI/UX design.',
        period: 'Dec 2024',
        features: [
          'Integrated Google Gemini API for AI-powered conversations',
          'Designed modern user interface with Tailwind CSS',
          'Real-time chat functionality with message history',
          'Responsive design for all devices'
        ],
        tech: ['React.js', 'Tailwind CSS', 'Gemini API', 'JavaScript', 'HTML5', 'CSS3'],
        links: {
          github: 'https://github.com/kkhushie/chatlab-ai.git',
          live: 'https://chatlab-ai.netlify.app/'
        }
      },
  ]
// app/projects/page.tsx

export default function Projects() {
  let staggerDelayIncrement = 600; // milliseconds
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <StaggerAnimation delay={200}>
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Projects</h1>
          <p className="text-xl text-[#4a9eff] mb-4">Showcase of my work</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects built with modern technologies, focusing on user experience, 
            performance, and clean code architecture.
          </p>
        </section>
        </StaggerAnimation>
        {/* Projects Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              staggerDelayIncrement += 200,
                        <StaggerAnimation delay={staggerDelayIncrement}>

              <div key={project.id} className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-6 hover:border-[#2a3f5f] transition-all group hover:scale-105 duration-300">
                {/* Project Header */}
                <Link href={project.links.live ? project.links.live : project.links.github} target="_blank" rel="noopener noreferrer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{project.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white text-xl">{project.name}</h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="text-gray-500 group-hover:text-[#4a9eff] transition-colors w-5 h-5" />
                </div>
              
                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{project.desc}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm">
                      <span className="text-[#4a9eff] mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#1a2f4d] text-[#4a9eff] text-sm rounded-lg border border-[#2a4a6d]">
                      {tech}
                    </span>
                  ))}
                </div>
                </Link>
                {/* Links */}
                <div className="flex space-x-4 pt-4 border-t border-[#1a2332]">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#4a9eff] transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-[#4a9eff] transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              </StaggerAnimation>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="text-center">
          <div className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Project Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: projectsData.length, label: 'Projects' },
                { number: '6+', label: 'Technologies' },
                { number: '4', label: 'Live Demos' },
                { number: '100%', label: 'Open Source' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#4a9eff] mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}