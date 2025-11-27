// app/components/ExperienceSection.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      id: 1,
      period: "September 2025",
      duration: "Current",
      company: "TechWithJoshi",
      companyUrl: "https://techwithjoshi.in",
      position: "Full Stack Developer Intern",
      location: "Remote",
      summary: "Full Stack Developer working on modern web applications with Next.js, TypeScript, and MERN stack. Developing RESTful APIs and implementing secure authentication systems.",
      responsibilities: [
        "Developed and integrated RESTful APIs connecting frontend components with backend services.",
        "Implemented authentication systems using NextAuth.js and JWT tokens for secure user sessions.",
        "Collaborated with team members using GitLab for version control and code reviews.",
        "Built responsive user interfaces with modern React patterns and state management.",
        "Optimized application performance and implemented best practices for code quality."
      ],
      technologies: [
        'Next.js', 'TypeScript', 'React', 'Node.js', 'Express.js',
        'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Python', 'Java',
        'Git', 'GitHub', 'REST APIs', 'JWT', 'NextAuth.js'
      ]
    }
  ];

  const visibleResponsibilities = showAll
    ? experiences[0].responsibilities
    : experiences[0].responsibilities.slice(0, 2);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
      {/* <div className="flex items-center">
        <Link href="/experience" className="flex items-center gap-1 group">
          <h2 className="text-3xl font-bold text-white mb-8 group-hover:text-[31px] transition-all">
            Experience
          </h2>
          <GoArrowUpRight className="text-white text-2xl translate-y-[-12px] group-hover:translate-x-1 group-hover:transition-all" />
        </Link>
      </div> */}
      {/* Journey Timeline Line */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[#2a4a6d]"></div>

        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative mb-8 pl-16">
            {/* Timeline Dot */}
            <div className="absolute left-4 top-2 w-4 h-4 bg-[#4a9eff] rounded-full border-4 border-[#0a0f1a]"></div>

            <div className="bg-[#0f1824] border border-[#1a2332] rounded-2xl p-6 hover:border-[#2a3f5f] transition-all">
              {/* Period & Duration */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-400 bg-[#1a2332] px-3 py-1 rounded-full">
                  {experience.period}
                </span>
                <span className="text-sm text-gray-400 bg-[#1a2332] px-3 py-1 rounded-full">
                  {experience.duration}
                </span>
              </div>

              {/* Position & Company */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {experience.position}{' '}
                  <span className="text-[#4a9eff]">@</span>{' '}
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a9eff] hover:underline inline-flex items-center gap-1"
                  >
                    {experience.company}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </h3>
                <p className="text-gray-400 text-sm">{experience.location}</p>
              </div>

              {/* Summary */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 text-lg">Summary:</h4>
                <p className="text-gray-300 leading-relaxed">
                  {experience.summary}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-3 text-lg">Responsibilities:</h4>
                <ul className="space-y-2 text-gray-300">
                  {visibleResponsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#4a9eff] mr-3 mt-1">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Show More/Less Button */}
                {experiences[0].responsibilities.length > 2 && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center gap-1 text-[#4a9eff] hover:text-[#3a7ad9] transition-colors mt-3 text-sm font-medium"
                  >
                    {showAll ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Show More
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-[#1a2f4d] text-[#4a9eff] text-sm rounded-full border border-[#2a4a6d] hover:bg-[#243855] transition-colors cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;