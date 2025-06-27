import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Award, Users, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Shield, label: "Years Experience", value: "4+" },
    { icon: Award, label: "Certifications", value: "6" },
    { icon: Users, label: "Students Trained", value: "120+" },
    { icon: Target, label: "CTF Wins", value: "Multiple" }
  ]

  const skills = [
    "Open Source Intelligence (OSINT)",
    "Vulnerability Assessment", 
    "Security Operations",
    "Incident Response Management",
    "Cloud Security",
    "Risk Management",
    "Digital Forensics",
    "Malware Analysis",
    "Threat Intelligence",
    "Compliance & Audit"
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="neon-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about securing digital assets and staying ahead in the evolving cybersecurity landscape
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed mb-4">
                  Dynamic and detail-oriented Cybersecurity Professional (CISSP) with a proven track record 
                  in securing digital assets, mitigating risks, and implementing robust security measures.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Experienced in incident response, cloud security, and compliance, with expertise in Python, 
                  AWS, Azure, and advanced analytics. Adept at collaborating with cross-functional teams and 
                  stakeholders to deliver innovative security solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  Committed to continuous improvement and staying ahead in a fast-paced, evolving cybersecurity 
                  landscape. Achieved the prestigious title of "Recon Master" at DEFCON 2024 and represented 
                  Saint Louis University at Black Hat 2024.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:glow-effect transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-card hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

