import { Github } from "lucide-react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

// app/components/Projects.tsx
const Projects = () => {
    return (
      <section className="mb-12">
        {/* <h2 className="text-3xl font-bold text-white mb-8">Projects</h2> */}
        <div className="flex items-center">
        <Link href="/projects" className="flex items-center gap-1 group">
          <h2 className="text-3xl font-bold text-white mb-8 group-hover:text-[31px] transition-all">
          Projects
          </h2>
          <GoArrowUpRight className="text-white text-2xl translate-y-[-12px] group-hover:translate-x-1 group-hover:transition-all" />
        </Link>
      </div>
        <div className="space-y-6">
          {[
            // { 
            //   name: 'PostMania – Social Media Platform', 
            //   icon: '💬', 
            //   desc: 'Created a social media app with post creation, editing, likes, and profile picture uploads.',
            //   period: 'Nov 2024',
            //   features: [
            //     'Integrated Cloudinary for secure image storage and retrieval',
            //     'Real-time post interactions and user engagement'
            //   ],
            //   tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Cloudinary API'],
            //   links: {
            //     github: '#',
            //     live: 'http://postmania.onrender.com/'
            //   }
            // },
            // { 
            //   name: 'ReelCraft – Media Sharing Platform', 
            //   icon: '🎬', 
            //   desc: 'Modern full-stack media sharing platform using Next.js 13 with App Router and TypeScript.',
            //   period: 'Oct 2025',
            //   features: [
            //     'Integrated ImageKit for optimized media storage, processing, and adaptive video streaming',
            //     'Developed secure authentication with NextAuth.js and protected routes using middleware'
            //   ],
            //   tech: ['Next.js 13', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'NextAuth.js', 'ImageKit SDK'],
            //   links: {
            //     github: 'https://github.com/kkhushie/ReelCraft-next-app',
            //     live: 'https://reel-craft-next-app.vercel.app/'
            //   }
            // },
            { 
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
            // { 
            //   name: 'Attendance Management System (QR-Based)', 
            //   icon: '📱', 
            //   desc: 'Automated attendance system generating unique QR codes with real-time tracking.',
            //   period: 'Feb 2025',
            //   features: [
            //     'Implemented real-time attendance tracking with instant reporting and analytics',
            //     'Designed responsive admin dashboard for monitoring attendance patterns and statistics'
            //   ],
            //   tech: ['MERN Stack', 'QR Code API', 'WebSockets', 'Tailwind CSS'],
            //   links: {
            //     github: 'https://github.com/kkhushie/Smart-Attendence-System',
            //     live: null
            //   }
            // }
          ].map((project, index) => (
            <div key={index} className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-6 hover:border-[#2a3f5f] transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{project.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white text-xl">{project.name}</h3>
                    <p className="text-gray-500 text-sm">{project.period}</p>
                  </div>
                </div>
                <span className="text-gray-500 group-hover:text-[#4a9eff] transition-colors">↗</span>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{project.desc}</p>
              
              <ul className="space-y-2 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-sm">
                    <span className="text-[#4a9eff] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#1a2f4d] text-[#4a9eff] text-sm rounded-lg border border-[#2a4a6d]">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 pt-2 border-t border-[#1a2332]">
                <a href={project.links.github} target="new" className="text-gray-400 hover:text-[#4a9eff] transition-colors text-sm flex justify-center items-center gap-2">
                <Github className="w-4 h-4" />

                  GitHub
                </a>
                {project.links.live && (
                  <a href={project.links.live} className="text-gray-400 hover:text-[#4a9eff] transition-colors text-sm">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;