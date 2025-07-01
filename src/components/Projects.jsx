import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Github, Shield, Users, Search, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Cloud Security Engineer",
      organization: "Saint Louis University, USA",
      icon: Shield,
      description: "Provisioned and administered a publicly exposed cloud server to simulate real-world SSH brute-force attacks in a controlled environment.",
      highlights: [
        "Engineered IAM policies and enabled advanced cloud logging",
        "Monitored 1,500+ access attempts with detailed authentication activity",
        "Detected and analyzed 200+ failed SSH login attempts",
        "Achieved 95% reduction in intrusion attempts within 3 hours",
        "Showcased end-to-end incident response capabilities"
      ],
      technologies: ["AWS", "IAM", "Cloud Logging", "SSH", "Security Monitoring"],
      metrics: "95% threat reduction",
      githubUrl: "https://github.com/raganmuralip/AWS-Public-Instance-Protection"
    },
    {
      title: "CTF Project Lead",
      organization: "Saint Louis University, USA", 
      icon: Users,
      description: "Managed a team of 10 in designing and deploying a project website to host a large-scale Capture the Flag event.",
      highlights: [
        "Ensured seamless performance and scalability for 200 users",
        "Leveraged Azure cloud services for deployment and monitoring",
        "Implemented secure infrastructure with logging and automation",
        "Created detailed documentation of project architecture",
        "Delivered regular status updates promoting collaboration"
      ],
      technologies: ["Azure", "Web Development", "Project Management", "Security Infrastructure"],
      metrics: "200 concurrent users",
      githubUrl: "https://slu-cyberbillikens.vercel.app/"
    },
    {
      title: "Security Audit & Compliance Consultant",
      organization: "Confidential Client (St. Louis, MO)",
      icon: Search,
      description: "Executed a comprehensive security audit across 10 critical systems, evaluating technical, operational, and physical access controls.",
      highlights: [
        "Aligned audit with NIST cybersecurity standards",
        "Discovered 5 high-risk and 3 medium-risk vulnerabilities",
        "Identified key compliance gaps and mapped to NIST CSF controls",
        "Delivered detailed risk report with actionable remediation steps",
        "Collaborated with IT and compliance teams for infrastructure upgrades"
      ],
      technologies: ["NIST Framework", "Risk Assessment", "Compliance", "Vulnerability Analysis"],
      metrics: "80% risk reduction",
      //githubUrl: "https://github.com/yourusername/security-audit-tools
    },
    {
      title: "Smart Job Scraper & Data Harvestor",
      organization: "Personal Project",
      icon: Globe,
      description: "Built a web scraper to extract job listings from webpages with zero API dependency, enabling flexible data collection and analysis.",
      highlights: [
        "Parsed 100+ job entries and extracted titles, companies, locations, and dates",
        "Converted raw HTML data into clean, structured formats",
        "Customized scraping scripts using appropriate libraries and HTML tags",
        "Implemented zero API dependency for maximum flexibility",
        "Enabled efficient data collection from multiple job websites"
      ],
      technologies: ["Python", "BeautifulSoup", "Selenium", "Web Scraping", "Data Extraction", "HTML Parsing"],
      metrics: "100+ entries parsed",
      githubUrl: "https://github.com/raganmuralip/web-scraper"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world cybersecurity projects demonstrating technical expertise and impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover:glow-effect transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <p className="text-muted-foreground">{project.organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30">
                      {project.metrics}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (idx * 0.05), duration: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary" 
                          className="bg-card hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:bg-primary/20"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

