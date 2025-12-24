import { ExternalLink, Github, Calendar, Clock } from 'lucide-react';
import StaggerAnimation from '../components/StaggerAnimation';
import Link from 'next/link';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    name: 'FetchFriends.dev - Developer Pair Programming Platform',
    icon: '👨‍💻',
    tag: 'Building',
    status: 'in-progress',
    picture: '/projects/fetchfriends.png',
    desc: 'Omegle for developers – but with VS Code, verification, and actual coding. Live pair programming platform with video chat and shared terminal.',
    period: 'Currently Building',
    features: [
      'Instant developer pairing with WebRTC video calls and screen sharing',
      'Full VS Code collaboration with shared terminal for real-time coding'
    ],
    tech: ['Next.js 14', 'TypeScript', 'WebRTC', 'Socket.io', 'MongoDB', 'Redis', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/kkhushie/fetchfriends.dev',
      live: null
    }
  },
  {
    id: 2,
    name: 'Qroom - Real-time Audience Interaction Platform',
    icon: '🧠',
    tag: 'Building',
    status: 'in-progress',
    picture: '/projects/qroom.png',
    desc: 'Real-time audience interaction platform for engaging presentations, live polls, and Q&A sessions. Similar to Mentimeter but built for instant feedback and participation.',
    period: 'Currently Building',
    features: [
      'Live polls and voting system with real-time results visualization',
      'Interactive Q&A sessions with upvoting and moderation features'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'JWT', 'Chart.js'],
    links: {
      github: 'https://github.com/kkhushie/qroom',
      live: null
    }
  },
  {
    id: 3,
    name: 'Motiv - Creator Intelligence App',
    icon: '🎯',
    tag: 'Completed',
    status: 'completed',
    picture: '/projects/motiv.png',
    desc: 'AI-powered platform that helps YouTube creators decide what content to make next by analyzing channels, finding patterns, and generating video ideas.',
    period: 'Jan 2025',
    features: [
      'Multi-stage AI pipeline analyzing channels, finding patterns, and detecting content gaps',
      'Generates tailored video ideas with actionable topics and angles for creators'
    ],
    tech: ['TypeScript', 'Motia Framework', 'AI/ML', 'YouTube API', 'Node.js', 'React'],
    links: {
      github: 'https://github.com/kkhushie/motiv-creator-intelligence-app',
      live: null
    }
  },
  {
    id: 4,
    name: 'ReelCraft – Media Sharing Platform',
    icon: '🎬',
    tag: 'Completed',
    status: 'completed',
    picture: '/projects/reelcraft.png',
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
    id: 5,
    name: 'PostMania – Social Media Platform',
    icon: '💬',
    tag: 'Completed',
    status: 'completed',
    picture: '/projects/postmania.png',
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
    id: 6,
    name: 'Codexpress – Institute Management System',
    icon: '🏫',
    tag: 'Completed',
    status: 'completed',
    picture: '/projects/codexpress.png',
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
    id: 7,
    name: 'Attendance Management System (QR-Based)',
    icon: '📱',
    tag: 'Completed',
    status: 'completed',
    picture: '/projects/attendance.png',
    desc: 'Automated attendance system generating unique QR codes with real-time tracking.',
    period: 'Feb 2025',
    features: [
      'Implemented real-time attendance tracking with instant reporting and analytics',
      'Designed responsive admin dashboard for monitoring attendance patterns and statistics'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'QR Code API', 'WebSockets', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/kkhushie/Smart-Attendence-System',
      live: null
    }
  },
  {
    id: 8,
    name: 'ChatLab-AI – AI Chatbot',
    icon: '🤖',
    tag: 'Completed',
    status: 'completed',
    picture: '/projects/chatlab.png',
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
  }
];

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
            {projectsData.map((project) => {
              staggerDelayIncrement += 200;
              return (
                <StaggerAnimation key={project.id} delay={staggerDelayIncrement}>
                  <div className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-6 hover:border-[#2a3f5f] transition-all group hover:scale-105 duration-300 overflow-hidden">
                    {/* Status Tag */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'in-progress' 
                        ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-700/50' 
                        : 'bg-green-900/30 text-green-400 border border-green-700/50'}`}>
                        {project.status === 'in-progress' ? (
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            <span>{project.tag}</span>
                          </div>
                        ) : (
                          project.tag
                        )}
                      </div>
                      <ExternalLink className="text-gray-500 group-hover:text-[#4a9eff] transition-colors w-5 h-5" />
                    </div>

                    {/* Project Image */}
                  <div className="mb-4 relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a2f4d] to-[#0f1824] border border-[#1a2332]">
                      {/* <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">{project.icon}</span>
                      </div>  */}
                      {/* Uncomment when you have actual images */}
                      
                      <Image
                        src={project.picture}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                     
                    </div>

                    <Link
                      href={project.links.live ? project.links.live : project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl group-hover:scale-110 transition-transform">
                            {project.icon}
                          </span>
                          <div>
                            <h3 className="font-semibold text-white text-xl">{project.name}</h3>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{project.period}</span>
                            </div>
                          </div>
                        </div>
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
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-[#1a2f4d] text-[#4a9eff] text-sm rounded-lg border border-[#2a4a6d]"
                          >
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
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="text-center">
          <div className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Project Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: projectsData.length, label: 'Total Projects' },
                { number: projectsData.filter(p => p.status === 'completed').length, label: 'Completed' },
                { number: projectsData.filter(p => p.status === 'in-progress').length, label: 'In Progress' },
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
