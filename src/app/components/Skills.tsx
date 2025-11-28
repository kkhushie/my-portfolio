// app/components/Skills.tsx
import { 
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPython,
    // SiJava,
    SiCplusplus,
    SiGit,
    SiGithub,
    SiBootstrap,
    // SiAmazonaws,
    SiDocker,
    // SiKubernetes,
    SiJsonwebtokens
  } from 'react-icons/si';
  import { FaJava } from "react-icons/fa";

  import { 
    FaServer,
    FaShieldAlt,
    FaLayerGroup
  } from 'react-icons/fa';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
  
  const Skills = () => {
    const skills = [
      { name: 'Next.js 13+', icon: SiNextdotjs, color: 'text-white' },
      { name: 'React.js', icon: SiReact, color: 'text-blue-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-400' },
      { name: 'Bootstrap', icon: SiBootstrap, color: 'text-violet-400' },
      { name: 'Git', icon: SiGit, color: 'text-orange-500' },
      { name: 'GitHub', icon: SiGithub, color: 'text-white' },
      { name: 'REST APIs', icon: FaServer, color: 'text-green-400' },
      { name: 'JWT', icon: SiJsonwebtokens , color: 'text-purple-400' },
      { name: 'NextAuth.js', icon: FaShieldAlt, color: 'text-blue-400' },
    //   { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-400' },
    //   { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
      { name: 'System Design', icon: FaLayerGroup, color: 'text-indigo-400' }
    ];
  
    return (
      <section className="mb-12">
        {/* <h2 className="text-3xl font-bold text-white mb-8">Skills</h2> */}
        <Link href="/projects" className="flex items-center gap-1 group">
          <h2 className="text-3xl font-bold text-white mb-8 group-hover:text-[31px] transition-all">
          Skills
          </h2>
          <GoArrowUpRight className="text-white text-2xl translate-y-[-12px] group-hover:translate-x-1 group-hover:transition-all" />
        </Link>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <span 
                key={index}
                className="px-4 py-3 bg-[#1a2f4d] text-[#4a9eff] text-sm rounded-xl border border-[#2a4a6d] hover:bg-[#243855] transition-all duration-300 cursor-pointer flex items-center gap-2 group hover:scale-105"
              >
                <IconComponent className={`w-4 h-4 ${skill.color} group-hover:scale-110 transition-transform`} />
                {skill.name}
              </span>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default Skills;