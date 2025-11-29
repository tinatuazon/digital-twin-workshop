"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { getNavItems, getPersonalInfo } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle"

export function PortfolioHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navItems = getNavItems()
  const personalInfo = getPersonalInfo()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = navItems.filter((item) => item.href.startsWith("#")).map((item) => item.href.substring(1))

      // Find the current section in view
      for (const section of sections.reverse()) {
        // Check from bottom to top
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            // If section is at or above 150px from viewport top
            setActiveSection(section)
            break
          }
        }
      }

      // If scrolled to top, set Home as active
      if (window.scrollY < 100) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 border-b border-gray-200 dark:border-border",
        scrolled
          ? "backdrop-blur-md shadow-md py-2 bg-white/95 text-gray-900 dark:bg-zinc-900/90 dark:text-foreground"
          : "bg-transparent text-gray-900 dark:text-foreground border-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center group">
          <div className="text-transparent bg-clip-text bg-blue-600 dark:bg-[#22d3ee] font-bold text-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {personalInfo.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-[#22d3ee] transition-all duration-300 group-hover:w-full"></span>
          </div>
          <span className="text-gray-600 dark:text-muted-foreground text-sm ml-2 hidden sm:inline-block transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-foreground">
            / {personalInfo.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isSection = item.href.startsWith("#")
              const href = isSection ? `/${item.href}` : item.href
              let isActive = false;
              if (item.href === "/") {
                isActive = activeSection === "";
              } else if (isSection) {
                isActive = activeSection === item.href.replace("#", "");
              }

              // Scroll to top for AI Chat link
              const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (item.href === "/chat") {
                  // Always scroll to top on click
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              };

              return (
                <Link
                  key={item.label}
                  href={href}
                  className={cn(
                    "px-3 py-2 text-sm relative group transition-all duration-300",
                    isActive ? "text-blue-600 dark:text-[#22d3ee]" : "text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-foreground",
                  )}
                  onClick={handleNavClick}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Hover effect - subtle background glow */}
                  <span className="absolute inset-0 bg-blue-600/0 dark:bg-[#22d3ee]/0 rounded-md group-hover:bg-blue-600/10 dark:group-hover:bg-[#22d3ee]/10 transition-all duration-300"></span>

                  {/* Hover effect - bottom border */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 dark:bg-[#22d3ee] transition-all duration-300 group-hover:w-4/5",
                      isActive && "w-4/5",
                    )}
                  ></span>
                </Link>
              )
            })}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground transition-colors duration-300 relative overflow-hidden group"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="relative z-10">{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</span>
          <span className="absolute inset-0 scale-0 rounded-full bg-muted/50 group-hover:scale-100 transition-transform duration-300"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 dark:bg-background/95 z-40 flex flex-col pt-20 px-4 md:hidden transition-all duration-500",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none",
        )}
      >
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <nav className="flex flex-col space-y-4">
          {navItems.map((item, index) => {
            const isSection = item.href.startsWith("#")
            const href = isSection ? `/${item.href}` : item.href
            const isActive = item.href === "/" ? activeSection === "" : activeSection === href.substring(1)

            // Scroll to top for AI Chat link
            const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              setMobileMenuOpen(false);
              if (item.href === "/chat") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            };

            return (
              <Link
                key={item.label}
                href={href}
                className={cn(
                  "px-3 py-4 text-lg border-b border-gray-200 dark:border-border relative group transition-all duration-300",
                  isActive ? "text-[#22d3ee] border-[#22d3ee]/30" : "text-gray-900 dark:text-foreground hover:text-[#22d3ee] dark:hover:text-primary hover:pl-5",
                )}
                onClick={handleNavClick}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                <span className="relative z-10">{item.label}</span>

                {/* Hover effect - left border accent */}
                <span
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-0 h-1/2 bg-[#22d3ee]/20 transition-all duration-300 group-hover:w-1",
                    isActive && "w-1",
                  )}
                ></span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
