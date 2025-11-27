import Image from 'next/image';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
      <div className="text-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Your Name
        </h1>
        <div className="text-lg text-gray-600 dark:text-gray-300 mb-2">
          Full Stack Developer
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          🌍 Location, Country
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Senior Full-Stack Web & Blockchain Developer with X years of experience. 
        Currently focusing on AI and modern web technologies.
      </p>

      <div className="flex justify-center space-x-4">
        <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600">
          <Mail size={24} />
        </a>
        <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-blue-700">
          <Linkedin size={24} />
        </a>
      </div>
    </section>
  );
}