import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Collapse, Button } from 'reactstrap';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Users, Award, Globe, HelpCircle } from 'lucide-react';

const FAQs = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

const faqData = [
  {
    question: "What HR services in Calicut does Befirst HR Consultancy provide?",
    answer: "Befirst HR Consultancy offers complete HR services in Calicut, including recruitment, payroll management, compliance, training, and employee support for businesses of all sizes.",
    category: "services"
  },
  {
    question: "Why should I choose Befirst for HR consultancy in Calicut?",
    answer: "With 40+ years of expertise, Befirst provides trusted HR consultancy in Calicut, ensuring customized solutions for recruitment, payroll, compliance, and workforce management.",
    category: "services"
  },
  {
    question: "Do you provide recruitment services in Calicut for startups and SMEs?",
    answer: "Yes. Our recruitment services in Calicut are designed for startups, SMEs, and corporates, helping them find the right talent through structured hiring processes.",
    category: "recruitment"
  },
  {
    question: "How can payroll services in Calicut help my business?",
    answer: "Our payroll services in Calicut ensure accurate salary processing, statutory compliance, and error-free employee payments, saving time and reducing risks.",
    category: "payroll"
  },
  {
    question: "Does Befirst offer employee support services in Calicut?",
    answer: "Yes. We provide employee support in Calicut, including onboarding, grievance handling, HR policies, and assistance for smooth workforce management.",
    category: "employee-support"
  },
  {
    question: "What industries do you serve with HR services in Calicut?",
    answer: "We provide HR services in Calicut across multiple industries including IT, healthcare, retail, education, construction, and manufacturing.",
    category: "industries"
  },
  {
    question: "Can you handle statutory compliance for businesses in Calicut?",
    answer: "Yes. Our HR experts manage labour law compliance and statutory HR services in Calicut, ensuring businesses meet PF, ESI, gratuity, and tax requirements.",
    category: "compliance"
  },
  {
    question: "Do you provide recruitment outsourcing in Calicut?",
    answer: "Absolutely. We offer recruitment outsourcing services in Calicut, managing the entire hiring process from candidate sourcing to final selection.",
    category: "recruitment"
  },
  {
    question: "What makes Befirst the best HR consultancy in Calicut?",
    answer: "Befirst stands out as a trusted HR consultancy in Calicut due to its decades of experience, local expertise, and customized HR solutions.",
    category: "differentiator"
  },
  {
    question: "Do you offer temporary and permanent staffing solutions in Calicut?",
    answer: "Yes. We provide both temporary and permanent staffing and recruitment services in Calicut, ensuring businesses get the right workforce at the right time.",
    category: "recruitment"
  },
  {
    question: "How does Befirst support employee onboarding in Calicut?",
    answer: "Our employee support services in Calicut include structured onboarding programs that help new hires adapt quickly and contribute effectively.",
    category: "employee-support"
  },
  {
    question: "Do you manage HR audits and compliance checks in Calicut?",
    answer: "Yes. We provide professional HR audit and compliance services in Calicut, identifying gaps and aligning policies with legal frameworks.",
    category: "compliance"
  },
  {
    question: "Can Befirst HR handle payroll outsourcing for companies in Calicut?",
    answer: "Yes. Our payroll outsourcing services in Calicut simplify salary processing, compliance filing, and record-keeping for businesses.",
    category: "payroll"
  },
  {
    question: "Do you provide leadership and employee training in Calicut?",
    answer: "Yes. Befirst offers Learning & Development services in Calicut, including leadership training, soft skills workshops, and employee development programs.",
    category: "training"
  },
  {
    question: "Can Befirst HRM assist with setting up HR policies?",
    answer: "Yes. We develop and implement comprehensive HR policies in Calicut tailored to your business, ensuring legal compliance and alignment with your company culture.",
    category: "policies"
  },
  {
    question: "How can Befirst HRM help my SME grow?",
    answer: "By streamlining your HR processes, ensuring compliance with local labour laws, attracting and retaining the right talent, and providing training to boost employee performance, we help your business improve productivity and scale sustainably.",
    category: "growth"
  },
  {
    question: "How can I contact Befirst HR Consultancy in Calicut for HR services?",
    answer: "You can reach out to Befirst HR Consultancy in Calicut via our website or office for customized HR, recruitment, payroll, and compliance services tailored to your business needs.",
    category: "contact"
  }
];


  const highlights = [
    {
      icon: <Users size={24} />,
      title: "40+ Years Experience",
      description: "Multinational leadership expertise"
    },
    {
      icon: <Globe size={24} />,
      title: "India & GCC Markets",
      description: "Extensive regional coverage"
    },
    {
      icon: <Award size={24} />,
      title: "End-to-End Solutions",
      description: "Complete HR ecosystem"
    }
  ];

  return (
    <div className="faq-page">
      {/* Section 1: Hero with Highlights */}
      <section className="hero-highlights-section py-5" style={{backgroundColor: '#f8f9fa'}}>
        <Container>
          {/* Hero Content */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
            <div className='d-flex justify-content-center '>

              <h1 className="h2 fw-bold text-dark" style={{fontSize:'2rem', fontWeight:'800px'}}>Frequently Asked Questions</h1>
              <div className="mb-4 ms-2">
                <HelpCircle size={35} className="text-primary mb-3" />
              </div>
            </div>
              <p className="lead text-muted mb-0">
                Find answers to common questions about our HR and management consultancy services
              </p>
            </Col>
          </Row>

          {/* Highlights Cards */}
  <Row className="g-4">
  {highlights.map((item, index) => (
    <Col md={4} key={index}>
      <Card
        className="h-100 border-0 shadow-sm bg-white"
        style={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
        }}
      >
        <CardBody className="p-4 text-center">
          <div className="text-primary mb-3">{item.icon}</div>
          <h6 className="fw-bold mb-2 text-dark">{item.title}</h6>
          <small className="text-muted">{item.description}</small>
        </CardBody>
      </Card>
    </Col>
  ))}
</Row>

        </Container>
      </section>

      {/* Section 2: FAQ + Contact */}
      <section className="faq-contact-section py-5">
        <Container>
          <Row>
            {/* FAQ Column */}
            <Col lg={8}>
              <div className="mb-4">
                <h3 className="fw-bold mb-3 text-dark">Your Questions Answered</h3>
                <p className="text-muted mb-4">Everything you need to know about Befirst HR and Management Consultancy</p>
              </div>
              
              <div className="faq-accordion">
                {faqData.map((item, index) => (
                  <div key={index} className="faq-item mb-3">
                    <div 
                      className="faq-question p-3 bg-light rounded cursor-pointer d-flex justify-content-between align-items-center"
                      onClick={() => toggleItem(index)}
                      style={{cursor: 'pointer', transition: 'all 0.3s ease'}}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                    >
                      <h4 className="mb-0 fw-semibold text-dark">{item.question}</h4>
                      {openItems[index] ? 
                        <ChevronUp className="text-primary" size={18} /> : 
                        <ChevronDown className="text-primary" size={18} />
                      }
                    </div>
                    <Collapse isOpen={openItems[index]}>
                      <div className="faq-answer p-3 bg-white border border-light rounded-bottom">
                        <p className="text-muted mb-0 lh-lg">{item.answer}</p>
                      </div>
                    </Collapse>
                  </div>
                ))}
              </div>
            </Col>

            {/* Contact Sidebar */}
            <Col lg={4}>
              <div className="sticky-top" style={{top: '20px'}}>
                <Card className="border-0 shadow-sm  text-dark">
                  <CardBody className="p-4">
                    <h5 className="fw-bold mb-3">Still have questions?</h5>
                    <p className="mb-4">Our team is ready to help you find the perfect HR solutions for your business.</p>
                    
                    {/* <Button color="primary" className="w-100 mb-3">
                      <Mail size={16} className="me-2" />
                      Get Free Consultation
                    </Button> */}
                    
                    <hr className="border-secondary my-4" />
                    
                    <div className="contact-info">
                      <div className="d-flex align-items-center  mb-3">
                        <Mail className="text-primary me-3" size={18} />
                        <div>
                          <span className="small">
                            <a href='mailto:info@befirsthr.com' target='_blank' className=" text-dark text-decoration-none"  rel="noreferrer">
                                info@befirsthr.com
                            </a>
                            </span>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <Phone className="text-primary me-3" size={18} />
                        <div>
                          <span className="small">
                            <a href='tel:+919400905954' className="text-dark text-decoration-none">

                            +91 9400905954
                            </a>
                            </span>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <MapPin className="text-primary me-3" size={18} />
                        <div>
                          <span className="small">Calicut, Kerala, India</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Quick Stats */}
                <Card className="border-0 shadow-sm mt-4">
                  <CardBody className="p-4 text-center">
                    <h6 className="fw-bold mb-3 text-dark">Why Choose Us?</h6>
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="text-primary fw-bold h5">40+</div>
                        <small className="text-muted">Years Experience</small>
                      </div>
                      <div className="col-6">
                        <div className="text-primary fw-bold h5">500+</div>
                        <small className="text-muted">Clients Served</small>
                      </div>
                      <div className="col-6">
                        <div className="text-primary fw-bold h5">24/7</div>
                        <small className="text-muted">Support</small>
                      </div>
                      <div className="col-6">
                        <div className="text-primary fw-bold h5">100%</div>
                        <small className="text-muted">Satisfaction</small>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .faq-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .hero-highlights-section {
          border-bottom: 1px solid #e9ecef;
        }
        
        .faq-item {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e9ecef;
        }
        
        .faq-question:hover {
          background-color: #e9ecef !important;
        }
        
        .faq-answer {
          border-top: 1px solid #e9ecef;
          margin-top: -1px;
        }
        
        .lead {
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .contact-info .small {
          font-size: 0.875rem;
        }
        
        .sticky-top {
          position: sticky;
        }
        
        @media (max-width: 991px) {
          .sticky-top {
            position: relative;
            top: auto !important;
          }
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        .bg-light:hover {
          background-color: #e9ecef !important;
        }
      `}</style>
    </div>
  );
};

export default FAQs;