// app/components/About.tsx
export default function About() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">About</h2>
      <p className="text-gray-700 leading-relaxed">
        Full Stack Developer currently pursuing M.Sc. in Information Technology. 
        Proficient in modern web technologies including Next.js, TypeScript, and MERN Stack. 
        Strong problem-solving skills with 150+ LeetCode solutions.
      </p>
      
      {/* Blue highlight like in reference */}
      <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500">
        <span className="text-blue-700 font-medium">Open to new opportunities</span>
      </div>
    </section>
  );
}