import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calendar, MapPin, Building } from 'lucide-react'

// Import company logos
import guruLogo from '@/assets/guru.png'
import cgLogo from '@/assets/capg.png'
import earsLogo from '@/assets/ears.png'
import cbLogo from '@/assets/billiken.png'
import enigmaLogo from '@/assets/enigma.png'
import vtflLogo from '@/assets/vtfl.png'

const Experience = () => {
  const experiences = [
    {
      company: "Ears Up Cyber Security",
      location: "St. Louis, MO",
      position: "Cybersecurity Specialist Intern",
      period: "June 2025 - Present",
      current: true,
      logo: earsLogo,
      highlights: [
        "Creating an online Capture The Flag (CTF) platform to promote secure coding practices",
        "Building incident response simulations with SIEM integration",
        "Implementing organizational data security policies aligned with NIST and ISO 27001",
        "Gathering actionable threat intelligence for risk assessments"
      ]
    },
    {
      company: "Cyber Billikens",
      location: "St. Louis, MO", 
      position: "Cyber Security Analyst",
      period: "Nov 2023 – May 2025",
      logo: cbLogo,
      highlights: [
        "Achieved top rankings globally in various CTF competitions",
        "Bagged 1st rank in Saint Louis University Fall CTF 2023 & Spring CTF 2024",
        "Achieved Title of 'Recon Master' in DEFCON 2024",
        "Represented SLU in Black Hat 2024",
        "Delivered OSINT training sessions to peers"
      ]
    },
    {
      company: "Capgemini Technologies Pvt Ltd",
      location: "Bangalore, India",
      position: "Cyber Security Specialist", 
      period: "Aug 2022 – Jul 2023",
      logo: cgLogo,
      highlights: [
        "Designed scalable Java-based application for 15,000 users",
        "Deployed application on Azure cloud, reducing latency by 20%",
        "Increased system reliability by 50% through process improvements",
        "Collaborated with cross-functional teams on security architecture"
      ]
    },
    {
      company: "ENIGMA",
      location: "Sri City, India",
      position: "CyberSecurity Specialist",
      period: "Aug 2021 – May 2022", 
      logo: enigmaLogo,
      highlights: [
        "Conducted training sessions for 120+ students",
        "Coordinated knowledge-sharing with Government of India experts",
        "Applied data-driven approach to critical analysis",
        "Mentored team members and fostered continuous learning culture"
      ]
    },
    {
      company: "Gurugram Cyber Police",
      location: "Gurugram, India",
      position: "Cyber Security Coordinator",
      period: "Jun 2021 – Jul 2021",
      logo: guruLogo,
      highlights: [
        "Investigated real-time cybercrime cases",
        "Conducted forensic analysis for criminal proceedings", 
        "Educated public on cybersecurity best practices",
        "Collaborated with law enforcement and IT teams"
      ]
    },
    {
      company: "Virtually Testing Foundation",
      location: "Los Angeles, CA",
      position: "Security Coordinator",
      period: "Jan 2021 – Mar 2021",
      logo: vtflLogo,
      highlights: [
        "Managed cloud resources, including virtualization and Identity & Access Management (IAM) policy configuration",
        "Implemented shift-left security practices, focusing on early-stage identification and mitigation of vulnerabilities",
        "Conducted performance monitoring and metrics analysis to enhance cloud security measures",
        "Automated deployment processes, ensuring streamlined and error-free implementations",
        "Created technical documentation for cloud security practices, supporting organizational compliance"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="neon-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through cybersecurity roles across different organizations and continents
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block pulse-glow"></div>
                
                <Card className={`ml-0 md:ml-20 glass-card hover:glow-effect transition-all duration-300 ${exp.current ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="flex items-center gap-4">
                        {exp.logo && (
                          <div className="w-16 h16 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-xl text-primary">{exp.position}</CardTitle>
                          <div className="flex items-center gap-2 text-lg font-semibold mt-1">
                            <Building className="h-4 w-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      {exp.current && (
                        <Badge className="bg-primary text-primary-foreground w-fit">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (idx * 0.05), duration: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

