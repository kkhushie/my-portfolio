// app/about/page.tsx
import { 
    Code2, 
    Server, 
    Cpu, 
    Zap,
    Layers,
    Target,
    GraduationCap,
    Trophy,
    Globe,
    BookOpen,
    MapPin,
    GithubIcon
  } from 'lucide-react';
  import {
    Eye,
    User,
    FileText,
    Github,
    Linkedin,
    Mail,
    Moon,
    CheckCircle
} from 'lucide-react';
  import { SiBlockchaindotcom } from "react-icons/si";
  
  export default function About() {
    const focusAreas = [
      {
        icon: Code2,
        title: 'Full Stack Development',
        description: 'Building end-to-end applications with modern stacks. Next.js, TypeScript, and cloud technologies.'
      },
      {
        icon: Cpu,
        title: 'Open Source & GSOC',
        description: 'Contributing to open-source projects. Preparing for Google Summer of Code with focus on developer tools and web technologies.'
      },
      {
        icon: SiBlockchaindotcom,
        title: 'Web3 & Blockchain',
        description: 'Exploring decentralized applications, smart contracts, and blockchain technologies. Building projects with Ethereum and Solidity.'
      },
      {
        icon: Layers,
        title: 'System Design',
        description: 'Designing scalable, maintainable architectures. Focus on microservices, distributed systems, and cloud-native applications.'
      },
    ];
  
    const education = [
      {
        period: "2025 - Present",
        institution: "DAIICT, Gandhinagar",
        degree: "M.Sc. Information Technology",
        icon: GraduationCap
      },
      {
        period: "2022 - 2025",
        institution: "Gujarat University, Ahmedabad",
        degree: "B.C.A. - Computer Applications (9.2/10)",
        icon: BookOpen
      }
    ];
  
    const achievements = [
      {
        title: "Top 10",
        event: "QR Attendance System Hackathon",
        description: "36-hour offline hackathon"
      },
      {
        title: "1st Runner-Up",
        event: "Gujarat University WebJam",
        description: "Web development competition"
      },
      {
        title: "Ranked 6th/1100",
        event: "Unstop Web Dev Competition",
        description: "National level competition"
      },
      {
        title: "Hacktoberfest",
        event: "Open Source Contributor",
        description: "Active open-source contributions"
      }
    ];
  
    return (
      <div className="min-h-screen bg-[#0a0f1a]">
        <div className="max-w-6xl mx-auto p-8">
          {/* Header Section - Like the reference */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-white mb-4">Khushi Pal</h1>
              <div className="flex flex-col items-center gap-4">
                <p className="text-xl text-[#4a9eff] font-medium">Full Stack Developer</p>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Gujarat, India</span>
                </div>
              </div>
            </div>
  
            {/* Description */}
            <div className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-8 text-center max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed">
                Full Stack Developer currently pursuing M.Sc. in Information Technology. 
                Proficient in modern web technologies including Next.js, TypeScript, and MERN Stack. 
                Exploring Web3, blockchain, and scalable system design.
              </p>
            </div>
  
            {/* Social Links - Minimal */}
            <div className="flex justify-center gap-8 mt-8">
              {[
                { name: 'GitHub', url: 'https://github.com/kkhushie', icon:Github},
                { name: 'Email', url: 'mailto:khushipal1470@gmail.com', icon:Mail },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/khushiepal', icon:Linkedin  },
                { name: 'LeetCode', url: 'https://leetcode.com/kkhushie/', icon: Code2 }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4a9eff] transition-colors text-sm flex items-center gap-2"
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </section>
  
          {/* Focus Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {focusAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-8 hover:border-[#2a3f5f] transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#1a2f4d] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7 text-[#4a9eff]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
  
          {/* Education - Minimal Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
            <div className="max-w-2xl mx-auto">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                    <div className="w-12 h-12 bg-[#1a2f4d] rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-[#4a9eff]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                        <span className="text-sm text-gray-400 bg-[#1a2332] px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-[#4a9eff] font-medium">{edu.degree}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
  
          {/* Achievements - Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-6 text-center hover:border-[#2a3f5f] transition-all">
                  <Trophy className="w-8 h-8 text-[#4a9eff] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-[#4a9eff] text-sm mb-2">{achievement.event}</p>
                  <p className="text-gray-400 text-xs">{achievement.description}</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Current Focus */}
          <section className="text-center">
            <div className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-8 max-w-2xl mx-auto">
              <Target className="w-12 h-12 text-[#4a9eff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Currently Exploring</h3>
              <p className="text-gray-300 mb-4">
                Web3 Development • Blockchain Protocols • System Architecture • Open Source
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Ethereum', 'Solidity', 'Smart Contracts', 'Microservices', 'Distributed Systems', 'GSOC'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#1a2f4d] text-[#4a9eff] text-sm rounded-full border border-[#2a4a6d]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
  
          {/* Last Updated */}
          <div className="text-center mt-12 pt-8 border-t border-[#1a2332]">
            <p className="text-gray-500 text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }