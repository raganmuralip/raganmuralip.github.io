import { Button } from '@/components/ui/button.jsx'
import { Download, Mail, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import mainPhoto from '@/assets/main.jpg'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold"
            >
              <span className="text-foreground">Ragan Murali</span>
              <br />
              <span className="neon-text">Pasupuleti</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-2"
            >
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                Cybersecurity Professional
              </h2>
              <p className="text-xl text-muted-foreground">
                CISSP | GRC Analyst | Security Engineer
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Fueled by a deep passion for cybersecurity, I'm committed to protecting people's digital lives and securing what matters most. With hands-on experience in cloud security, threat detection, and incident response, I combine technical skills in Python, AWS, and Azure with a relentless drive to stay ahead of evolving threats. My goal: build smarter defenses and make the digital world safer for everyone.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="glow-effect hover:scale-105 transition-transform">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a href="https://linkedin.com/in/raganmurali/" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors glow-effect">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:raganmurali.pasupuleti@slu.edu" 
                 className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors glow-effect">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/raganmuralip" 
                 className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors glow-effect">
                <Github className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile image with glass effect */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-2 glass-card pulse-glow">
                <img 
                  src={mainPhoto} 
                  alt="Ragan Murali Pasupuleti" 
                  className="w-full h-full rounded-xl object-cover shadow-2xl"
                />
              </div>
              
              {/* Floating badges */}
      
              
              
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

