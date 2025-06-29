import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react'
import cisspImage from '@/assets/cissp.png'
import securityImage from '@/assets/security.png'
import ccImage from '@/assets/cc.png' 
import ibmImage from '@/assets/ibm.png'
import azureImage from '@/assets/azure.png'
import googleImage from '@/assets/google.png'

const Certifications = () => {
  const certifications = [
    {
      name: "(ISC)² CISSP",
      fullName: "Certified Information Systems Security Professional",
      issuer: "(ISC)²",
      status: "Active",
      level: "Expert",
      description: "Premier certification for cybersecurity professionals demonstrating advanced knowledge in security and risk management.",
      skills: ["Security Architecture", "Risk Management", "Asset Security", "Security Engineering"],
      color: "from-blue-500 to-blue-700",
      verifyUrl: "https://www.credly.com/badges/0d20c176-25e4-47ea-ad16-601e5ff1400d/public_url",
      image: cisspImage
    },
    {
      name: "(ISC)² Certified in Cybersecurity",
      fullName: "Certified in Cybersecurity",
      issuer: "(ISC)²", 
      status: "Active",
      level: "Professional",
      description: "Foundation-level certification covering essential cybersecurity principles and practices.",
      skills: ["Security Principles", "Incident Response", "Access Controls", "Network Security"],
      color: "from-green-500 to-green-700",
      verifyUrl: "https://www.credly.com/badges/7e8cb9da-10ee-4b2d-9692-fce606f64d9f",
      image: ccImage
    },
    {
      name: "CompTIA Security+",
      fullName: "CompTIA Security+ (SYO-701)",
      issuer: "CompTIA",
      status: "Active", 
      level: "Professional",
      description: "Vendor-neutral certification covering core cybersecurity skills and best practices.",
      skills: ["Threat Analysis", "Risk Management", "Cryptography", "Identity Management"],
      color: "from-red-500 to-red-700",
      verifyUrl: "https://www.credly.com/badges/a9c607d2-cd82-46c2-881e-d843dd6bd019/public_url",
      image: securityImage
    },
    {
      name: "IBM Cyber Security Analyst",
      fullName: "IBM Cyber Security Analyst Professional Certificate",
      issuer: "IBM",
      status: "Active",
      level: "Professional", 
      description: "Comprehensive program covering SOC analyst skills and security operations.",
      skills: ["SIEM", "Incident Response", "Threat Hunting", "Forensics"],
      color: "from-purple-500 to-purple-700",
      verifyUrl: "https://www.credly.com/badges/a8cc87ef-a05d-4bdd-98ee-89754a0790c1",
      image: ibmImage
    },
    {
      name: "Microsoft Azure Fundamentals",
      fullName: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      status: "Active",
      level: "Foundational",
      description: "Foundational knowledge of cloud services and Microsoft Azure platform.",
      skills: ["Cloud Concepts", "Azure Services", "Security", "Compliance"],
      color: "from-cyan-500 to-cyan-700",
      verifyUrl: "https://www.credly.com/badges/76d3f3ce-8bd8-434d-a812-54db6906ace9",
      image: azureImage
    },
    {
      name: "Google Cybersecurity Professional",
      fullName: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      status: "Active", 
      level: "Professional",
      description: "Hands-on cybersecurity skills including Python, Linux, SQL, and SIEM tools.",
      skills: ["Python", "Linux", "SQL", "SIEM Tools"],
      color: "from-yellow-500 to-yellow-700",
      verifyUrl: "https://www.credly.com/badges/5b64d767-c20a-4244-86af-e591e388dad2",
      image: googleImage
    }
  ]

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'Professional': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Foundational': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="neon-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating expertise across cybersecurity domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card hover:glow-effect transition-all duration-300 group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} bg-opacity-20`}>
                      <img src={cert.image} alt={cert.name} className="h-20 w-20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getLevelColor(cert.level)}>
                        {cert.level}
                      </Badge>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        {cert.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{cert.fullName}</p>
                    <p className="text-sm text-primary font-medium mb-4">Issued by {cert.issuer}</p>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2 text-primary">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <Badge 
                            key={idx}
                            variant="secondary" 
                            className="text-xs bg-card hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary/20 text-xs"
                      onClick={() => window.open(cert.verifyUrl, '_blank')}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Verify
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

