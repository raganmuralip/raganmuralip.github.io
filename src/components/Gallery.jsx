import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Upload, 
  X, 
  ZoomIn, 
  Calendar, 
  MapPin, 
  Users,
  Plus,
  Filter,
  Grid3X3,
  List
} from 'lucide-react'

// Import images
import image1 from '@/assets/1.png'
import portfolioRef1 from '@/assets/portfolio_ref_1.jpg'
import portfolioRef2 from '@/assets/portfolio_ref_2.jpg'
import portfolioRef3 from '@/assets/portfolio_ref_3.jpg'

const Gallery = () => {
  // Sample conference photos data - in a real app, this would come from a backend/CMS
  const [photos, setPhotos] = useState([
    {
      id: 1,
      src: image1,
      title: "DEFCON 2024 - Recon Master Achievement",
      event: "DEFCON 2024",
      location: "Las Vegas, NV",
      date: "August 2024",
      description: "Achieved the prestigious title of 'Recon Master' at DEFCON 2024",
      category: "achievement"
    },
    {
      id: 2,
      src: portfolioRef1, 
      title: "Black Hat 2024 Representation",
      event: "Black Hat 2024",
      location: "Las Vegas, NV", 
      date: "August 2024",
      description: "Representing Saint Louis University at Black Hat 2024",
      category: "conference"
    },
    {
      id: 3,
      src: portfolioRef2,
      title: "SLU Fall CTF 2023 - 1st Place",
      event: "Saint Louis University Fall CTF",
      location: "St. Louis, MO",
      date: "Fall 2023", 
      description: "Secured 1st place in individual category",
      category: "ctf"
    },
    {
      id: 4,
      src: portfolioRef3,
      title: "SLU Spring CTF 2024 - 1st Place",
      event: "Saint Louis University Spring CTF", 
      location: "St. Louis, MO",
      date: "Spring 2024",
      description: "Consecutive 1st place victory in individual category",
      category: "ctf"
    }
  ])

  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [showUpload, setShowUpload] = useState(false)
  const fileInputRef = useRef(null)

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'conference', label: 'Conferences' },
    { value: 'ctf', label: 'CTF Events' },
    { value: 'achievement', label: 'Achievements' }
  ]

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === filter)

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newPhoto = {
          id: Date.now() + Math.random(),
          src: e.target.result,
          title: file.name.replace(/\.[^/.]+$/, ""),
          event: "New Event",
          location: "Location TBD",
          date: new Date().toLocaleDateString(),
          description: "Add description...",
          category: "conference"
        }
        setPhotos(prev => [...prev, newPhoto])
      }
      reader.readAsDataURL(file)
    })
    setShowUpload(false)
  }

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Conference <span className="neon-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments from cybersecurity conferences, CTF competitions, and professional achievements
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8"
        >
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.value)}
                className={filter === category.value ? "glow-effect" : ""}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
           
          </div>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-card hover:glow-effect transition-all duration-300 group overflow-hidden">
                  <div className="relative">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        onClick={() => setSelectedPhoto(photo)}
                        className="glow-effect"
                      >
                        <ZoomIn className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </div>
                    <Badge 
                      className="absolute top-2 right-2 bg-primary/90 text-primary-foreground"
                    >
                      {photo.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {photo.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {photo.event}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {photo.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {photo.date}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
                      {photo.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Upload Modal */}
        <AnimatePresence>
          {showUpload && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowUpload(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-card p-6 rounded-lg max-w-md w-full glass-card"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Add New Photos</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowUpload(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div
                  className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Click to upload photos or drag and drop
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Supports JPG, PNG, WebP
                  </p>
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Photo Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={e => e.stopPropagation()}
              >
                <Card className="glass-card">
                  <div className="relative">
                    <img
                      src={selectedPhoto.src}
                      alt={selectedPhoto.title}
                      className="w-full h-auto max-h-[60vh] object-contain"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
                      onClick={() => setSelectedPhoto(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{selectedPhoto.title}</h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>{selectedPhoto.event}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{selectedPhoto.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{selectedPhoto.date}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{selectedPhoto.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery

