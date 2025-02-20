import { RevealonScroll } from "../RevealOnScroll";

export const About = () => {
  const frontEndSkills = ["React", "Vue", "TypeScript", "Tailwind"];
  const backEndSkills = ["Node.js", "MongoDb", "FireBase", "AWS"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealonScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8  border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-400 mb-6">
            I&apos;m a passionate software developer currently on my journey to
            mastering the art of coding. I recently completed my software
            development program at GoMyCode, where I gained hands-on experience
            in various programming languages and technologies. I&apos;m excited
            to apply my skills in real-world projects and continue learning as I
            grow in this dynamic field. I believe in the power of technology to
            create meaningful solutions and am eager to collaborate with others
            who share this vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">📚 Education</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
                <strong>Diploma in Software Development</strong> -GoMyCode, Lagos.  (2024)
              </li>

              <li>
                <strong>Msc. in Architecture</strong> -University of Lagos, Nigeria(2020-2023)
              </li>

              <li>
                <strong>Bsc. in Architecture</strong> -University of Lagos, Nigeria (2015-2019)
              </li>
            </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className="space-y-4 text-gray-400">
              <div>
                <h4 className="font-semibold">
                  Software Engineer at Brags.ng (2025 - Present)
                </h4>
                <p>I’ve designed and managed their online retail platform, enhancing site traffic and conversions through innovative features and optimized performance.</p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Intern at Vegaz (2024 - 2025)
                </h4>
                <p>I gained valuable experience in building APIs for the application</p>
              </div>

              


            </div>

            </div>
        </div>
      </div>
      </RevealonScroll>
    </section>
  );
};
