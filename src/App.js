import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float, Environment } from '@react-three/drei';
import './App.css';

// 3D Text Component
function FloatingText({ text, position, size = 1 }) {
  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <Text
        position={position}
        fontSize={size}
        color="#6B8E6B"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      >
        {text}
      </Text>
    </Float>
  );
}

// 3D Scene Component
function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <FloatingText text="JESS LEE" position={[0, 2, 0]} size={2} />
      <FloatingText text="Sequoia Capital Partner" position={[0, 0, 0]} size={0.8} />
      <FloatingText text="Investor • Product • Leadership" position={[0, -1.5, 0]} size={0.5} />
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

function App() {
  return (
    <div className="App">

      {/* Scrollable Content */}
      <div className="content">
        {/* Hero Section */}
        <motion.section 
          className="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-content">
            <motion.div 
              className="profile-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="/Jess-Lee-index-2.webp"
                alt="Jess Lee"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Jess Lee
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Partner, Sequoia Capital
            </motion.p>
            <motion.div 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <p>Early-stage investor and product leader. From building Google Maps to CEO of Polyvore to investing in the next generation of founders.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          className="about glass-card"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About</h2>
          <p>
            Partner at Sequoia Capital and co-founder of All Raise. From Google Maps PM to Polyvore CEO to leading early-stage investments. 
            I bridge product vision with execution, helping founders build companies that scale and create meaningful connections.
          </p>
          <div className="skills-grid">
            {['Product Leadership', 'Early Stage Investing', 'Engineering Teams', 'Company Building', 'Diversity & Inclusion', 'Board Leadership'].map((skill, index) => (
              <motion.div 
                key={skill}
                className="skill-badge"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="experience glass-card"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Experience</h2>
          <div className="timeline">
            <motion.div 
              className="timeline-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="timeline-content">
                <h3>Partner & Chief Product Officer</h3>
                <h4>Sequoia Capital</h4>
                <p className="timeline-date">Nov 2016 - Present</p>
                <p>Early Stage Partner leading Arc (pre-seed/seed program), Scouts (angel program), and Ecosystem Fund. Oversee engineering, product, design, and data science teams. Board member at Ironclad, Maven Clinic, Freed, Captions, and others.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="timeline-content">
                <h3>Co-founder & Janitor</h3>
                <h4>All Raise</h4>
                <p className="timeline-date">Oct 2017 - Present</p>
                <p>Co-founded non-profit dedicated to diversity in tech, improving representation of women founders and funders. Co-captain Female Founder Office Hours program.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="timeline-content">
                <h3>Co-Founder & CEO</h3>
                <h4>Polyvore</h4>
                <p className="timeline-date">Mar 2008 - Nov 2016</p>
                <p>Started as a user who complained about the product, became first PM, then CEO. Built shopping platform with 20M+ users. Acquired by Yahoo for $200M.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="timeline-content">
                <h3>VP Product, Lifestyle</h3>
                <h4>Yahoo</h4>
                <p className="timeline-date">Sep 2015 - Nov 2016</p>
                <p>Led Yahoo Lifestyle team post-Polyvore acquisition. Product portfolio included Polyvore, Product Ads, Yahoo View, and stealth projects.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="timeline-content">
                <h3>Product Manager</h3>
                <h4>Google Maps</h4>
                <p className="timeline-date">Aug 2006 - Mar 2008</p>
                <p>Launched major Google Maps features including My Maps, draggable directions, real-time traffic, and multipoint routing. Coordinated across 13 global offices.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="contact glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Let's Connect</h2>
          <div className="contact-links">
            <motion.a 
              href="https://linkedin.com/in/jesskah" 
              className="contact-link"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/jesskah" 
              className="contact-link"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="mailto:hello@jesslee.com" 
              className="contact-link"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              Email
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;