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
  List,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

// Import images
import dim1 from '@/assets/d1.png' 
import dim2 from '@/assets/d2.png'
import dim3 from '@/assets/d3.png'
import bim1 from '@/assets/b1.png'
import bim2 from '@/assets/b2.png'
import bim3 from '@/assets/b3.png'
import bim4 from '@/assets/b4.png'

import portfolioRef1 from '@/assets/portfolio_ref_1.jpg'
import portfolioRef2 from '@/assets/portfolio_ref_2.jpg'
import portfolioRef3 from '@/assets/portfolio_ref_3.jpg'

const Gallery = () => {
  // Sample events data with multiple images per event
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "DEFCON 2024",
      event: "DEFCON 2024",
      location: "Las Vegas, NV",
      date: "August 2024",
      description: "Achieved the prestigious title of 'Recon Master' at DEFCON 2024",
      category: "conference",
      images: [
        {
          id: 1,
          src: dim1,
          caption: "Networking with Security Professionals"
        },
        {
          id: 2,
          src: dim2,
          caption: "DEFCON Main Stage"
        },
        {
          id: 3,
          src: dim3,
          caption: "Recon Master Award"
        },
        
      ]
    },
    {
      id: 2,
      title: "Black Hat 2024",
      event: "Black Hat 2024",
      location: "Las Vegas, NV", 
      date: "August 2024",
      description: "Representing Saint Louis University at Black Hat 2024",
      category: "conference",
      images: [
        {
          id: 1,
          src: bim4,
          caption: "Black Hat Keynote Session"
        },
        {
          id: 2,
          src: bim1,
          caption: "SLU Team at Black Hat"
        },
        {
          id: 3,
          src: bim3,
          caption: "Technical Training Session"
        },
        {
          id: 4,
          src: bim2,
          caption: "Mentor : Kyle Wilhoit"
        }
      ]
    },
    {
      id: 3,
      title: "SLU Fall CTF 2023 - 1st Place",
      event: "Saint Louis University Fall CTF",
      location: "St. Louis, MO",
      date: "Fall 2023", 
      description: "Secured 1st place in individual category",
      category: "ctf",
      images: [
        {
          id: 1,
          src: portfolioRef2,
          caption: "1st Place Trophy"
        },
        {
          id: 2,
          src: portfolioRef1,
          caption: "Competition Setup"
        },
        {
          id: 3,
          src: portfolioRef3,
          caption: "Problem Solving Session"
        },
        {
          id: 4,
          //src: image1,
          caption: "Victory Celebration"
        },
        {
          id: 5,
          src: portfolioRef2,
          caption: "Team Collaboration"
        },
        {
          id: 6,
          src: portfolioRef1,
          caption: "Award Ceremony"
        }
      ]
    },
    {
      id: 4,
      title: "SLU Spring CTF 2024 - 1st Place",
      event: "Saint Louis University Spring CTF", 
      location: "St. Louis, MO",
      date: "Spring 2024",
      description: "Consecutive 1st place victory in individual category",
      category: "ctf",
      images: [
        {
          id: 1,
          src: portfolioRef3,
          caption: "Spring CTF Victory"
        },
        {
          id: 2,
          src: portfolioRef2,
          caption: "Competition Environment"
        },
        {
          id: 3,
          src: portfolioRef1,
          caption: "Challenge Solving"
        },
        {
          id: 4,
          //src: image1,
          caption: "Leaderboard Display"
        },
        {
          id: 5,
          src: portfolioRef3,
          caption: "Final Round"
        },
        {
          id: 6,
          src: portfolioRef2,
          caption: "Championship Moment"
        },
        {
          id: 7,
          src: portfolioRef1,
          caption: "Back-to-Back Victory"
        }
      ]
    }
  ])

  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [showUpload, setShowUpload] = useState(false)
  const fileInputRef = useRef(null)

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'conference', label: 'Conferences' },
    { value: 'ctf', label: 'CTF Events' },
    { value: 'achievement', label: 'Achievements' }
  ]

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter)

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    const newImages = files.map((file, index) => {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          resolve({
            id: Date.now() + index,
            src: e.target.result,
            caption: file.name.replace(/\.[^/.]+$/, "")
          })
        }
        reader.readAsDataURL(file)
      })
    })

    Promise.all(newImages).then(images => {
      const newEvent = {
        id: Date.now(),
        title: "New Event",
        event: "New Event",
        location: "Location TBD",
        date: new Date().toLocaleDateString(),
        description: "Add description...",
        category: "conference",
        images: images
      }
      setEvents(prev => [...prev, newEvent])
    })
    setShowUpload(false)
  }

  const nextImage = () => {
    if (selectedEvent) {
      setSelectedImageIndex((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedEvent) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      )
    }
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

        {/* Events Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          <AnimatePresence>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
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
                      src={event.images[0].src}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedEvent(event)
                          setSelectedImageIndex(0)
                        }}
                        className="glow-effect"
                      >
                        <ZoomIn className="mr-2 h-4 w-4" />
                        View {event.images.length > 1 ? `(${event.images.length} photos)` : ''}
                      </Button>
                    </div>
                    <Badge 
                      className="absolute top-2 right-2 bg-primary/90 text-primary-foreground"
                    >
                      {event.category}
                    </Badge>
                    {event.images.length > 1 && (
                      <Badge 
                        className="absolute top-2 left-2 bg-secondary/90 text-secondary-foreground"
                      >
                        {event.images.length} photos
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {event.event}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
                      {event.description}
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
                  <h3 className="text-lg font-semibold">Add New Event</h3>
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
                    Click to upload photos for new event
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Supports multiple images per event
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

        {/* Event Lightbox */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-6xl w-full max-h-[90vh] overflow-auto"
                onClick={e => e.stopPropagation()}
              >
                <Card className="glass-card">
                  <div className="relative">
                    <img
                      src={selectedEvent.images[selectedImageIndex].src}
                      alt={selectedEvent.title}
                      className="w-full h-auto max-h-[60vh] object-contain"
                    />
                    
                    {/* Navigation arrows for multiple images */}
                    {selectedEvent.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70"
                          onClick={nextImage}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </>
                    )}
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
                      onClick={() => setSelectedEvent(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    
                    {/* Image counter */}
                    {selectedEvent.images.length > 1 && (
                      <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                        {selectedImageIndex + 1} / {selectedEvent.images.length}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>{selectedEvent.event}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{selectedEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{selectedEvent.date}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{selectedEvent.description}</p>
                    
                    {/* Image caption */}
                    <p className="text-sm text-muted-foreground italic">
                      {selectedEvent.images[selectedImageIndex].caption}
                    </p>
                    
                    {/* Thumbnail navigation */}
                    {selectedEvent.images.length > 1 && (
                      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                        {selectedEvent.images.map((image, index) => (
                          <button
                            key={image.id}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                              index === selectedImageIndex 
                                ? 'border-primary' 
                                : 'border-transparent hover:border-primary/50'
                            }`}
                          >
                            <img
                              src={image.src}
                              alt={`${selectedEvent.title} - ${image.caption}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
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

