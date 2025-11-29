
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Eye } from "lucide-react"
import { SkillTag } from "@/components/skill-tag"
import { AnimatedSection } from "@/components/animated-section"
import { getCredentialsInfo } from "@/lib/data"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo()

  return (
    <Card className="bg-white/95 dark:bg-card/70 border border-gray-200 dark:border-border backdrop-blur-sm shadow-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <Award className="w-5 h-5 mr-2 text-blue-600 dark:text-primary" />
          <h3 className="text-lg font-medium">Credentials</h3>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Awards */}
          {credentialsInfo.awards && credentialsInfo.awards.length > 0 && (
            <AnimatedSection animation="fade-up" delay={80}>
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-muted-foreground flex items-center border-b border-gray-200 dark:border-border pb-2">
                  <Award className="w-4 h-4 mr-2 text-blue-600 dark:text-[#22d3ee]" />
                  Awards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {credentialsInfo.awards.map((award, index) => (
                    <div key={index} className="w-full flex items-start bg-slate-50 dark:bg-zinc-900/70 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-zinc-800 relative shadow-sm hover:shadow-md transition-shadow">
                      {award.logo && (
                        <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-200 dark:bg-zinc-900">
                          <Image
                            src={award.logo || "/placeholder.svg"}
                            alt={award.issuer}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h5 className="text-sm font-medium text-foreground">{award.name}</h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          {award.issuer} {award.date}
                        </p>
                        {award.certificateImage && (
                          <div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-7 px-2 text-xs font-light flex items-center gap-1 border-gray-300 dark:border-zinc-800 bg-white dark:bg-transparent text-gray-600 dark:text-muted-foreground hover:bg-gray-100 dark:hover:bg-zinc-800/40 hover:text-foreground border rounded transition-colors shadow-sm"
                                >
                                  <Eye className="w-3 h-3 mr-1" />
                                  <span>View Certificate</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none">
                                <div className="flex flex-col items-center justify-center">
                                  <Image
                                    src={award.certificateImage}
                                    alt="Award Certificate"
                                    width={700}
                                    height={500}
                                    className="rounded-lg border shadow-lg bg-white"
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Professional Certifications */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-muted-foreground flex items-center border-b border-gray-200 dark:border-border pb-2">
                <Award className="w-4 h-4 mr-2 text-blue-600 dark:text-[#22d3ee]" />
                Professional Certifications
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {credentialsInfo.certifications.map((cert, index) => (
                  <div key={index} className="w-full flex items-start bg-slate-50 dark:bg-zinc-900/70 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-zinc-800 relative shadow-sm hover:shadow-md transition-shadow">
                    {cert.logo && (
                      <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-200 dark:bg-zinc-900">
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.issuer}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div className="flex-1 pr-28">
                      <h5 className="text-sm font-medium text-foreground">{cert.name}</h5>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} {cert.date}
                      </p>
                    </div>
                    {cert.certificateImage && (
                      <div className="absolute top-2 right-3">
                        <Dialog>
                          <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 px-2 text-xs font-light flex items-center gap-1 border-gray-300 dark:border-zinc-800 bg-white dark:bg-transparent text-gray-600 dark:text-muted-foreground hover:bg-gray-100 dark:hover:bg-zinc-800/40 hover:text-foreground border rounded transition-colors shadow-sm"
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              <span>View Certificate</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none">
                            <div className="flex flex-col items-center justify-center">
                              <Image
                                src={cert.certificateImage}
                                alt="Database Certificate"
                                width={700}
                                height={500}
                                className="rounded-lg border shadow-lg bg-white"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-muted-foreground flex items-center border-b border-gray-200 dark:border-border pb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-blue-600 dark:text-[#22d3ee]" />
                Education
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {credentialsInfo.education.map((edu, index) => (
                  <div key={index} className="flex items-start bg-slate-50 dark:bg-zinc-900/70 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                    {edu.logo && (
                            <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                        <Image
                          src={edu.logo || "/placeholder.svg"}
                          alt={edu.institution}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h5 className="text-sm font-medium text-foreground">{edu.degree}</h5>
                      <p className="text-xs text-muted-foreground">
                        {edu.institution} • {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills & Expertise */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700 dark:text-muted-foreground flex items-center border-b border-gray-200 dark:border-border pb-2">
                <Award className="w-4 h-4 mr-2 text-blue-600 dark:text-[#22d3ee]" />
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {credentialsInfo.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </CardContent>
    </Card>
  )
}
