import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'
import sluLogo from '@/assets/slu.png'
import iiitsLogo from '@/assets/iiits.png'

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      institution: "Saint Louis University",
      location: "St. Louis, MO",
      duration: "2023 - 2025",
      gpa: "3.97/4.0",
      description: "Comprehensive cybersecurity program focusing on advanced security concepts, threat analysis, and defensive strategies.",
      highlights: [
        "Maintained Academic Excellence throughout the program",
        "Specialized in cloud security and incident response",
        "Completed hands-on projects in AWS and Azure environments",
        "Participated in multiple CTF competitions and security conferences",
        "Developed expertise in threat detection and mitigation"
      ],
      courses: ["Advanced Cybersecurity", "Cloud Security", "Incident Response", "Threat Intelligence", "Security Architecture"],
      achievements: ["Distinguished Graduate"],
      icon: GraduationCap,
      logo: sluLogo
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering with specialization in Cybersecurity",
      institution: "Indian Institute of Information Technology",
      location: "Sri City, India",
      duration: "2018 - 2022",
      gpa: "3.3/4.0",
      description: "Comprehensive computer science foundation with focus on software development, algorithms, and system design.",
      highlights: [
        "Graduated with distinction and high academic performance",
        "Completed capstone project on secure software development",
        "Participated in coding competitions and hackathons",
        "Developed strong foundation in programming and system design",
        "Gained practical experience through internships and projects"
      ],
      courses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Computer Networks"],
      achievements: ["Innovative Project Award"],
      icon: BookOpen,
      logo: iiitsLogo
    }
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="neon-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic Journey that laid the foundation for my Cybersecurity expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover:glow-effect transition-all duration-300 group h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`}
                        className="w-30 h-30 object-contain rounded-lg bg-white/10 p-2"
                      />
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30">
                      {edu.gpa}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
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
                    <h4 className="font-semibold mb-3 text-primary">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary" 
                          className="bg-card hover:bg-primary/20 transition-colors"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline" 
                          className="bg-primary/10 text-primary border-primary/30"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
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

export default Education 