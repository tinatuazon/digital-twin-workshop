import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { UserIcon, Mail, Phone, MapPin, Clock } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import portfolioData from "@/data/portfolio-data.json"

export function ContactSection() {
  return (
    <Card className="bg-white/95 dark:bg-card/70 border border-gray-200 dark:border-border backdrop-blur-sm col-span-1 md:col-span-3 lg:col-span-4 overflow-hidden shadow-sm">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="bg-gray-50 dark:bg-muted/50 p-6 lg:p-8 border-r border-gray-200 dark:border-border">
            <div className="flex items-center mb-6">
              <UserIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-[#22d3ee]" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-foreground">Get in Touch</h3>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 dark:text-muted-foreground">
                I'm always interested in new projects and opportunities. Feel free to reach out if you want to work
                together or just say hello!
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-blue-600 dark:text-[#22d3ee] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-foreground">Email</h4>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-primary transition-colors"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-blue-600 dark:text-[#22d3ee] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-foreground">Phone</h4>
                    <a href={`tel:${portfolioData.personal.phone}`} className="text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-primary transition-colors">
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600 dark:text-[#22d3ee] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-foreground">Location</h4>
                    <p className="text-sm text-gray-600 dark:text-muted-foreground">{portfolioData.personal.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-blue-600 dark:text-[#22d3ee] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-foreground">Working Hours</h4>
                    <p className="text-sm text-gray-600 dark:text-muted-foreground">{portfolioData.personal.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium mb-3 text-gray-900 dark:text-foreground">Connect with me</h4>
                <SocialLinks socialLinks={portfolioData.personal.social} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-6 lg:p-8 max-h-[500px] overflow-y-auto scrollbar-theme bg-white dark:bg-transparent">
            <h3 className="text-lg font-medium mb-6 text-gray-900 dark:text-foreground">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
