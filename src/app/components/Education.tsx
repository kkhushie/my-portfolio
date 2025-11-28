import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

// app/components/Education.tsx
const Education = () => {
    return (
      <section className="mb-12">
        {/* <h2 className="text-3xl font-bold text-white mb-8">Education</h2> */}
        <Link href="/about" className="flex items-center gap-1 group">
          <h2 className="text-3xl font-bold text-white mb-8 group-hover:text-[31px] transition-all">
          Education
          </h2>
          <GoArrowUpRight className="text-white text-2xl translate-y-[-12px] group-hover:translate-x-1 group-hover:transition-all" />
        </Link>

        <div className="space-y-4">
          {[
            {
              institution: "DAIICT, Gandhinagar",
              degree: "M.Sc. Information Technology",
              period: "2025 – Present",
              icon: "🎓"
            },
            {
              institution: "Gujarat University, Ahmedabad",
              degree: "B.C.A. – Bachelor of Computer Applications (CGPA: 9.2/10)",
              period: "2022 – 2025",
              icon: "📚"
            }
          ].map((edu, i) => (
            <div key={i} className="bg-[#0f1824] border border-[#1a2332] rounded-xl p-6 hover:border-[#2a3f5f]
  hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a2f4d] rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{edu.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{edu.institution}</h3>
                    <p className="text-gray-400 text-sm">{edu.degree}</p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Education;