import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Shield, 
  Cloud, 
  Code, 
  Search, 
  Settings, 
  Database,
  Terminal,
  Lock,
  Eye,
  Zap,
  Network,
  Bug,
  FileText,
  Cpu,
  Server,
  Globe,
  Key,
  AlertTriangle,
  Monitor,
  Activity,
  HardDrive,
  Smartphone,
  Tablet,
  Laptop,
  Users,
  Target
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Security Operations",
      icon: Shield,
      color: "from-red-500 to-red-700",
      skills: [
        { name: "SIEM", icon: Monitor, description: "Splunk, QRadar" },
        { name: "Incident Response", icon: AlertTriangle, description: "Threat Detection & Response" },
        { name: "Threat Hunting", icon: Search, description: "Proactive Security" },
        { name: "Vulnerability Assessment", icon: Bug, description: "Security Testing" },
        { name: "Digital Forensics", icon: FileText, description: "Evidence Analysis" }
      ]
    },
    {
      title: "Cloud Security", 
      icon: Cloud,
      color: "from-blue-500 to-blue-700",
      skills: [
        { name: "AWS Security", icon: Cloud, description: "Amazon Web Services" },
        { name: "Azure Security", icon: Server, description: "Microsoft Azure" },
        { name: "IAM Policies", icon: Key, description: "Identity & Access Management" },
        { name: "Cloud Monitoring", icon: Activity, description: "Real-time Monitoring" },
        { name: "Container Security", icon: HardDrive, description: "Docker & Kubernetes" }
      ]
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      color: "from-green-500 to-green-700", 
      skills: [
        { name: "Python", icon: Code, description: "Automation & Analysis" },
        { name: "PowerShell", icon: Terminal, description: "Windows Automation" },
        { name: "Bash", icon: Terminal, description: "Linux Scripting" },
        { name: "Java", icon: Cpu, description: "Application Development" },
        { name: "SQL", icon: Database, description: "Database Management" }
      ]
    },
    {
      title: "OSINT & Reconnaissance",
      icon: Search,
      color: "from-purple-500 to-purple-700",
      skills: [
        { name: "Open Source Intelligence", icon: Eye, description: "Information Gathering" },
        { name: "Social Engineering", icon: Users, description: "Human Factor Security" },
        { name: "Reconnaissance", icon: Search, description: "Target Analysis" },
        { name: "Data Mining", icon: Database, description: "Information Extraction" },
        { name: "OSINT Tools", icon: Globe, description: "Specialized Software" }
      ]
    },
    {
      title: "Security Tools",
      icon: Settings,
      color: "from-yellow-500 to-yellow-700",
      skills: [
        { name: "Wireshark", icon: Network, description: "Network Analysis" },
        { name: "Burp Suite", icon: Zap, description: "Web Application Security" },
        { name: "Nmap", icon: Network, description: "Network Discovery" },
        { name: "Nessus", icon: Bug, description: "Vulnerability Scanner" },
        { name: "Metasploit", icon: Shield, description: "Penetration Testing" }
      ]
    },
    {
      title: "Compliance & Frameworks",
      icon: Lock,
      color: "from-cyan-500 to-cyan-700",
      skills: [
        { name: "NIST Framework", icon: FileText, description: "Cybersecurity Standards" },
        { name: "ISO 27001", icon: Lock, description: "Information Security" },
        { name: "OWASP", icon: Shield, description: "Web Security" },
        { name: "MITRE ATT&CK", icon: Target, description: "Threat Modeling" },
        { name: "Risk Assessment", icon: AlertTriangle, description: "Security Evaluation" }
      ]
    }
  ]

  const technologies = [
    "Windows", "Kali Linux", "Ubuntu", "AWS", "Azure", "Python", "PowerShell", 
    "Bash", "Java", "C++", "HTML", "Wireshark", "Burp Suite", "Nmap", "Nessus", 
    "Zaproxy", "Splunk", "Excel", "PowerPoint", "Word", "Teams", "Cyber Kill Chain",
    "OWASP", "MITRE ATT&CK", "NIST 800-53", "SOC", "Threat Intelligence", 
    "Autopsy", "FTK Imager"
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="neon-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across cybersecurity domains, tools, and technologies
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover:glow-effect transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (idx * 0.05), duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                          <skill.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{skill.name}</div>
                          <div className="text-xs text-muted-foreground">{skill.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
          <Card className="glass-card max-w-6xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-3 py-1 bg-card hover:bg-primary/20 transition-colors cursor-default text-sm"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Expertise Overview</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Skill Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Core Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

