import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Cristina Tuazon</h1>
            <Link 
              href="/chat"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white font-medium transition-colors"
            >
              Chat with my AI Twin 🤖
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">CT</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Cristina Tuazon
          </h1>
          <p className="text-2xl text-blue-400 mb-6">
            Full Stack Developer | Database Specialist | AI Enthusiast
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate full stack developer with expertise in Laravel, MySQL, and modern web technologies. 
            Currently exploring AI development and RAG pipelines to build innovative solutions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/50 p-6 rounded-lg text-center border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
            <div className="text-slate-300">Years Experience</div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg text-center border border-slate-700">
            <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg text-center border border-slate-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-slate-300">Client Satisfaction</div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg text-center border border-slate-700">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2026</div>
            <div className="text-slate-300">Graduating</div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">💻 Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["PHP", "Laravel", "MySQL", "REST APIs", "Python"].map((skill) => (
                <span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">🎨 Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "Next.js", "TailwindCSS", "HTML5", "CSS3"].map((skill) => (
                <span key={skill} className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">🤖 AI & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["RAG Systems", "Vector DBs", "Groq API", "Git", "Figma"].map((skill) => (
                <span key={skill} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">🎓 Online Credential System</h3>
              <p className="text-slate-300 mb-4">
                Complete web application for university credential management. 
                Built with Laravel 11, MySQL, and responsive design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Laravel", "MySQL", "Bootstrap", "PHP"].map((tech) => (
                  <span key={tech} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-yellow-400 font-medium">🏆 1st Place - Capstone Showcase</div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">🤖 AI Digital Twin</h3>
              <p className="text-slate-300 mb-4">
                RAG-powered AI assistant with MCP server integration for GitHub Copilot. 
                Features vector search and professional profile querying.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Python", "Upstash", "Groq API"].map((tech) => (
                  <span key={tech} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <Link 
                href="/chat"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Try it now →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-slate-800/50 p-8 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to know more about my experience?
          </h2>
          <p className="text-slate-300 mb-6">
            Chat with my AI digital twin to learn about my projects, skills, and career goals!
          </p>
          <Link 
            href="/chat"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg text-white font-medium text-lg transition-all transform hover:scale-105"
          >
            Start Conversation 💬
          </Link>
        </div>
      </section>
    </div>
  );
}
