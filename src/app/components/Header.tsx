// app/components/Header.tsx
"use client";
import {
    MapPin,
    Eye,
    User,
    FileText,
    Github,
    Linkedin,
    Mail,
    Code2,
    Moon,
    CheckCircle
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);


    const socialIcons = [
        { name: 'Github', icon: Github, color: 'text-white', url: "https://github.com/kkhushie" },
        { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-400', url: "https://linkedin.com/in/khushiepal" },
        { name: 'Email', icon: Mail, color: 'text-red-400', url: "khushipal1470@gmail.com" },
        { name: 'LeetCode', icon: Code2, color: 'text-yellow-400', url: "https://leetcode.com/kkhushie/" }
    ];

    return (
        <div className="sticky top-0">
            {/* Profile Card */}
            <div className="bg-[#1a2332] rounded-3xl p-6 mb-6 rotate-2 hover:rotate-0 hover:bg-[#232e41] transition-transform cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                    {/* Profile Image Container */}
                    <div className="relative">
                        {/* Fallback */}
                        {(!imageLoaded || imageError) && (
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                <span className="text-2xl font-bold text-gray-600">KP</span>
                            </div>
                        )}

                        {/* Your Actual Image */}
                        <div className={`relative w-24 h-24 rounded-2xl overflow-hidden transition-all duration-500 ${imageLoaded && !imageError ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
                            }`}>
                            <Image
                                src="/images/khushie-profile.webp" // ← REPLACE THIS WITH YOUR ACTUAL IMAGE PATH
                                alt="Khushi Pal - Full Stack Developer"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-300"
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageError(true)}
                                priority
                                sizes="806px"
                            />
                        </div>

                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-white hover:text-blue-400">Khushi Pal</h1>
                        <p className="text-gray-400 text-sm">Full Stack Developer</p>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-400 text-sm mb-4 hover:text-blue-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    Gujarat, India.
                </div>

                {/* Stats
          <div className="flex gap-4 text-gray-400 text-sm">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              <span>1</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>1</span>
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              <span>Resume</span>
            </div>
          </div> */}
            </div>

            {/* Social Links & Resume */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1a2332] rounded-3xl p-6 rotate-[-5deg] hover:rotate-0 transition-transform cursor-pointer">
                    <div className="grid grid-cols-2 gap-4">
                        {socialIcons.map((social, i) => {
                            const IconComponent = social.icon;
                            return (

                                <div
                                    key={i}
                                    className="flex items-center justify-center p-1 hover:bg-gray-700 rounded-lg transition cursor-pointer group"
                                >
                                    <a
                                        href={social.url.includes("@") ? `mailto:${social.url}` : social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    // className="text-[#4a9eff] hover:underline inline-flex items-center gap-1"
                                    >
                                        <IconComponent className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform`} />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-[#4a7aff] rounded-3xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,266,0.8)] hover:scale-103 duration-300 group rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                    {/* <div className="text-white text-sm mb-1 flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>1</span>
            </div>
            <div className="text-white text-sm mb-1 flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>1</span>
            </div> */}
                    <div className="text-white text-sm">
                        <a href="https://drive.google.com/file/d/19uDAc1o7I_P5MEpyCjxpuu7JQ6za2sqt/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=' font-medium flex items-center gap-1'>
                            <FileText className="w-3 h-3" />
                            <span>Resume</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="mb-6">

                <div className="flex items-center">
                    <Link href="/about" className="flex items-center gap-1 group">
                        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[26px] transition-all">
                            About
                        </h2>
                        <GoArrowUpRight className="text-white text-lg translate-y-[-6px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Link>
                </div>
                <p className="text-[#4a9eff] leading-relaxed mb-4 font-mono text-sm">
                    Full Stack Developer currently pursuing M.Sc. in Information Technology.
                </p>
                <p className="text-[#4a9eff] leading-relaxed font-mono text-sm">
                    Proficient in Next.js, TypeScript, and MERN Stack.
                </p>
            </div>

            {/* Theme Toggle */}
            {/* <div className="flex items-center justify-between bg-[#1a2332] rounded-2xl p-4 mb-6 cursor-pointer hover:bg-[#222d42] transition">
          <div className="flex items-center">
            <Moon className="w-5 h-5 mr-3 text-gray-400" />
            <span className="text-gray-300">Blue</span>
          </div>
        </div> */}

            {/* Status */}
            <div className="bg-[#1a2332] rounded-2xl p-4 flex items-center cursor-pointer hover:bg-[#222d42] transition">
                <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                <span className="text-gray-300 font-medium">Available for work</span>
            </div>
        </div>
    );
};

export default Header;