import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: 'Code Academy',
      description: 'A comprehensive online learning platform for coding tutorials and programming courses. Built with modern web technologies to provide an interactive learning experience.',
      image: '/images/codeacademy.png',
      technologies: ['React','HTML','CSS',' JavaScript'],
      github: 'https://github.com/palasathwik95/Code-academy.git',
      demo: 'https://coderesource.netlify.app',
    },
    {
      title: 'Trend Aura',
      description: 'A modern e-commerce platform featuring trendy fashion items with user-friendly interface, shopping cart functionality, and secure payment integration.',
      image: '/images/trendaura.png',
      technologies: ['React', 'CSS3', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/palasathwik95/Trend-aura.git',
      demo: 'https://trendywebsite.netlify.app/',
    },
    
    
    {
      title: 'Profile-map ',
      description: 'Build a pure frontend application that integrates Google Maps to track and display user locations. The app should support adding, editing, and deleting users, with their data (including location) stored temporarily in the browser using localStorage.',
      image: '/images/profilemap.png',
      technologies: ['React', 'Bootstrap', 'CSS3', 'JavaScript'],
      github: '',
      demo: 'https://profilechecker.netlify.app/'
      
    },
    {
      title: 'Create-Your-Resume',
      description: 'A clean and responsive resume builder web app built using React.js. Users can input personal and professional details to generate a structured resume preview.',
      image: '/images/cry.png',
      technologies: ['React'],
      github:"https://github.com/palasathwik95/Create-Your-Resume.git",
      demo: 'https://graceful-jelly-b49f79.netlify.app/'
    },
    {
      title: 'Wanderlust Travel',
      description: 'A travel booking website that allows users to search for and book flights, hotels, and vacation packages. It features a user-friendly interface and secure payment options.',
      image: '/images/wanderlust.png',
      technologies: ['JavaScript','MongoDB','Express.js','Node.js'],
      github:"https://github.com/palasathwik95/wanderlust.git",
      demo: 'https://wanderlust-mkwb.onrender.com'
    }
    
  ];

  return (
    <section id="projects" className="section-padding ">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title gradient-text">Featured Projects</h2>
          </Col>
        </Row>
        
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="card-hover project-card h-100 border-0">
                <div style={{height: '200px', overflow: 'hidden'}}>
                  <Card.Img 
                    variant="top" 
                    src={project.image}
                    style={{height: '100%', objectFit: 'cover'}}
                  />
                </div>
                
                <div className="project-overlay">
                  
                  <Button 
                    variant="outline-light"
                    href={project.github}
                    target="_blank"
                  >
                    <i className="fab fa-github me-2"></i>
                    GitHub
                  </Button>
                  <Button 
                    variant="outline-light"
                    href={project.demo}
                    target="_blank"
                    className="ms-2">
                    <i className="fas fa-external-link-alt me-2"></i>
                    Live Demo
                    </Button>
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="gradient-text">{project.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {project.description}
                  </Card.Text>
                  
                  <div className="mt-auto">
                    <div className="mb-3">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="badge bg-primary me-1 mb-1"
                          style={{fontSize: '0.75rem'}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;