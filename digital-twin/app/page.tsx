import type React from "react"
import { GlobeIcon, CodeIcon, BriefcaseIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { getAllProjects } from "@/lib/projects"
import { ExperienceCard } from "@/components/experience-card"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedProfile } from "@/components/enhanced-profile"
import { CredentialsSection } from "@/components/credentials-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { getExperienceInfo, getTechnicalSkillsInfo } from "@/lib/data"

const SkillTagComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-2 py-1 bg-secondary border border-border rounded-full text-xs font-medium text-secondary-foreground">{children}</div>
}

export default function Home() {
  const projects = getAllProjects()
  const experienceInfo = getExperienceInfo()
  const technicalSkills = getTechnicalSkillsInfo()

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background text-foreground">
      {/* Subtle gradient background for depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-background dark:to-background z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Enhanced Profile Section */}
          <div className="md:sticky md:top-24 self-start">
            <AnimatedSection animation="slide-right">
              <EnhancedProfile />
            </AnimatedSection>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Experience Section - Expanded */}
            <AnimatedSection animation="fade-up" id="experience">
              <Card className="bg-white/90 dark:bg-card/70 border border-gray-200 dark:border-border backdrop-blur-sm shadow-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <BriefcaseIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-[#22d3ee]" />
                    <h3 className="text-lg font-medium">Experience</h3>
                  </div>

                  <div className="relative flex">
                    {/* Timeline vertical line */}
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-500 dark:bg-[#22d3ee] z-0" style={{marginLeft: '0.25rem'}}></div>
                    <div className="flex-1 space-y-6 sm:space-y-8">
                      {experienceInfo.map((experience, index) => (
                        <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                          <ExperienceCard
                            index={index}
                            title={experience.title}
                            company={experience.company}
                            period={experience.period}
                            description={experience.description}
                            achievements={experience.achievements}
                            technologies={experience.technologies}
                          />
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Credentials Section */}
            <AnimatedSection animation="fade-up" id="credentials">
              <CredentialsSection />
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection animation="fade-up" id="skills">
              <Card className="bg-white/90 dark:bg-card/70 border border-gray-200 dark:border-border backdrop-blur-sm shadow-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <CodeIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-[#22d3ee]" />
                    <h3 className="text-lg font-medium">Technical Skills</h3>
                  </div>

                  {/* Only Tech Stack Experience Progress Bars - Categorized */}

                  {/* Tech Stack Experience Progress Bars - Categorized */}
                  <div className="mt-6">
                    {/* Removed Tech Stack Experience heading as requested */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Development */}
                      <div className="rounded-2xl p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-200 hover:ring-2 hover:ring-blue-300/40">
                        <div className="flex items-center mb-2 rounded-xl bg-blue-600 dark:bg-[#22d3ee] px-3 py-1.5 shadow">
                          <CodeIcon className="w-4 h-4 mr-2 text-white dark:text-black" />
                          <span className="text-sm font-normal text-white dark:text-black">Development</span>
                        </div>
                        <hr className="border-border mb-2" />
                        <div className="space-y-3">
                          {[
                            { name: 'HTML5', years: 5 },
                            { name: 'JavaScript', years: 4 },
                            { name: 'CSS3', years: 4 },
                            { name: 'PHP', years: 3 },
                            { name: 'Laravel', years: 3 },
                            { name: 'Python', years: 2 },
                            { name: 'React', years: 2 },
                            { name: 'Next.js', years: 1 },
                            { name: 'TypeScript', years: 1 },
                          ].map((tech, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground font-medium">{tech.name}</span>
                                <span className="text-xs text-muted-foreground">{tech.years} yr{tech.years !== 1 ? 's' : ''}</span>
                              </div>
                              <div className="h-2 bg-muted rounded-xl overflow-hidden">
                                <div
                                  className="h-full bg-blue-600 dark:bg-[#22d3ee] rounded-xl transition-all duration-200"
                                  style={{ width: `${Math.min(tech.years * 20, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Database & Storage */}
                      <div className="rounded-2xl p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition-all duration-200 hover:ring-2 hover:ring-blue-300/40">
                        <div className="flex items-center mb-2 rounded-xl bg-blue-600 dark:bg-[#22d3ee] px-3 py-1.5 shadow">
                          <CodeIcon className="w-4 h-4 mr-2 text-white dark:text-black" />
                          <span className="text-sm font-normal text-white dark:text-black">Database & Storage</span>
                        </div>
                        <hr className="border-border mb-2" />
                        <div className="space-y-3">
                          {[
                            { name: 'MySQL', years: 4 },
                            { name: 'Database Design', years: 4 },
                            { name: 'SQL Server', years: 1 },
                            { name: 'T-SQL', years: 1 },
                            { name: 'PostgreSQL', years: 0.3 },
                          ].map((tech, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground font-medium">{tech.name}</span>
                                <span className="text-xs text-muted-foreground">{tech.years} yr{tech.years !== 1 ? 's' : ''}</span>
                              </div>
                              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blue-600 dark:bg-[#22d3ee] rounded-full"
                                  style={{ width: `${Math.min(tech.years * 20, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Cloud & DevOps */}
                      <div className="rounded-2xl p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition-all duration-200 hover:ring-2 hover:ring-blue-300/40">
                        <div className="flex items-center mb-2 rounded-xl bg-blue-600 dark:bg-[#22d3ee] px-3 py-1.5 shadow">
                          <CodeIcon className="w-4 h-4 mr-2 text-white dark:text-black" />
                          <span className="text-sm font-normal text-white dark:text-black">Cloud & DevOps</span>
                        </div>
                        <hr className="border-border mb-2" />
                        <div className="space-y-3">
                          {[
                            { name: 'Google Cloud Platform', years: 1 },
                            { name: 'cPanel', years: 1 },
                            { name: 'AWS', years: 0.3 },
                            { name: 'Vercel', years: 0.3 },
                            { name: 'NeonDB', years: 0.3 },
                          ].map((tech, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground font-medium">{tech.name}</span>
                                <span className="text-xs text-muted-foreground">{tech.years} yr{tech.years !== 1 ? 's' : ''}</span>
                              </div>
                              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blue-600 dark:bg-[#22d3ee] rounded-full"
                                  style={{ width: `${Math.min(tech.years * 20, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* AI & Machine Learning */}
                      <div className="rounded-2xl p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition-all duration-200 hover:ring-2 hover:ring-blue-300/40">
                        <div className="flex items-center mb-2 rounded-xl bg-blue-600 dark:bg-[#22d3ee] px-3 py-1.5 shadow">
                          <CodeIcon className="w-4 h-4 mr-2 text-white dark:text-black" />
                          <span className="text-sm font-normal text-white dark:text-black">AI & Machine Learning</span>
                        </div>
                        <hr className="border-border mb-2" />
                        <div className="space-y-3">
                          {[
                            { name: 'OpenAI API', years: 0.5 },
                            { name: 'Prompt Engineering', years: 0.5 },
                            { name: 'Groq API', years: 0.3 },
                            { name: 'Vector Databases', years: 0.3 },
                            { name: 'RAG Systems', years: 0.3 },
                            { name: 'Upstash Vector', years: 0.3 },
                          ].map((tech, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground font-medium">{tech.name}</span>
                                <span className="text-xs text-muted-foreground">{tech.years} yr{tech.years !== 1 ? 's' : ''}</span>
                              </div>
                              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blue-600 dark:bg-[#22d3ee] rounded-full"
                                  style={{ width: `${Math.min(tech.years * 20, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection animation="fade-up" id="projects">
              <Card className="bg-white/90 dark:bg-card/70 border border-gray-200 dark:border-border backdrop-blur-sm shadow-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <GlobeIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-[#22d3ee]" />
                      <h3 className="text-lg font-medium">Recent Projects</h3>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                      View All
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {projects.map((project, index) => (
                      <AnimatedSection key={project.id} animation="zoom-in" delay={100 * (index + 1)}>
                        <ProjectCard
                          title={project.title}
                          category={project.category}
                          image={project.thumbnailImage}
                          slug={project.slug}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Cristina Tuazon. All rights reserved.</p>
        </AnimatedSection>
      </div>

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />
    </main>
  )
}
