import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/raganmurali/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub"
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:raganmurali.pasupuleti@slu.edu",
      label: "Email"
    }
  ]

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative bg-card/50 border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
       

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Ragan Murali Pasupuleti. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="flex items-center gap-4">
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary/20"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

