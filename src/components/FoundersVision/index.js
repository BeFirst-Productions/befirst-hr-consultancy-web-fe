import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Award, Users, Globe, TrendingUp, Target, Heart, Zap, Brain, BookOpen, CheckCircle2 } from 'lucide-react';
import img1 from '../../images/about2/founderImg.png'; // Update with the correct path to your image

const FoundersVision = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .founder-hero {
        background: white;
        padding: 70px 0 12px 0;
        color: #1e293b;
        position: relative;
        overflow: hidden;
      }
      
      .founder-image-container {
        position: relative;
        max-width: 400px;
        margin: 0 auto;
        z-index: 2;
      }
      
      .founder-image {
        width: 100%;
        height: 450px;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        border-radius: 20px;
        border: 4px solid #e2e8f0;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #64748b;
        transition: transform 0.3s ease;
        overflow: hidden;
        position: relative;
      }
      
      .founder-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px; /* Slightly less than the container to account for border */
      }
      
      .founder-content {
        z-index: 2;
        position: relative;
      }
      
      .founder-name {
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 20px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        line-height: 1.1;
      }
      
      .founder-title {
        font-size: 1.5rem;
        opacity: 0.95;
        margin-bottom: 30px;
        font-weight: 300;
        letter-spacing: 0.5px;
      }
      
      .founder-subtitle {
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 30px;
        opacity: 0.9;
        line-height: 1.3;
        color: #1e293b;
      }
      
      .experience-highlights {
        background: #f8fafc;
        padding: 30px;
        border-radius: 15px;
        margin: 40px 0;
        border: 2px solid #e2e8f0;
      }
      
      .experience-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        font-size: 1.1rem;
        font-weight: 500;
        color: #1e293b;
      }
      
      .experience-item:last-child {
        margin-bottom: 0;
      }
      
      .experience-icon {
        margin-right: 15px;
        color: #3b82f6;
      }
      
      /* Premium Story Section Styles */
      .story-section {
        padding: 120px 0 60px 0;
        background: #ffffff;
        position: relative;
      }
      
      .story-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent 0%, #e2e8f0 20%, #cbd5e1 50%, #e2e8f0 80%, transparent 100%);
      }
      
      .section-title {
        font-size: 3.2rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 20px;
        line-height: 1.2;
        letter-spacing: -0.02em;
      }
      
      .section-subtitle {
        font-size: 1.3rem;
        color: #64748b;
        margin-bottom: 80px;
        font-weight: 400;
        line-height: 1.6;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }
      
      .story-content {
        font-size: 1.125rem;
        line-height: 1.8;
        color: #475569;
      }
      
      .story-paragraph {
        margin-bottom: 32px;
        text-align: justify;
        position: relative;
      }
      
      .story-paragraph:first-child::first-letter {
        font-size: 4.5rem;
        font-weight: 700;
        color: #3b82f6;
        float: left;
        line-height: 1;
        margin: 8px 12px 0 0;
        font-family: serif;
      }
      
      .credentials-highlight {
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        border: 1px solid #e2e8f0;
        border-left: 4px solid #3b82f6;
        border-radius: 8px;
        padding: 28px 32px;
        margin: 48px 0;
        position: relative;
        overflow: hidden;
      }
      
      .credentials-highlight::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(30px, -30px);
      }
      
      .credentials-content {
        font-size: 1.15rem;
        line-height: 1.7;
        color: #1e40af;
        font-weight: 500;
        margin: 0;
        position: relative;
        z-index: 2;
      }
      
      .expertise-showcase {
        background: #fafafa;
        border-radius: 16px;
        padding: 48px 40px;
        margin: 64px 0;
        border: 1px solid #f1f5f9;
      }
      
      .expertise-title {
        font-size: 2.5rem;
        font-weight: 600;
        color: #1e293b;
        margin-bottom: 32px;
        text-align: center;
        position: relative;
      }
      
      .expertise-title::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 2px;
        background: #3b82f6;
        border-radius: 1px;
      }
      
      .expertise-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
        margin-top: 40px;
      }
      
      .expertise-card {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 32px 24px;
        transition: all 0.3s ease;
        position: relative;
        text-align: center;
      }
      
      .expertise-card:hover {
        border-color: #3b82f6;
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(59, 130, 246, 0.08);
      }
      
      .expertise-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #3b82f6, #1e40af);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
        color: white;
      }
      
      .expertise-label {
        font-size: 1.2rem;
        font-weight: 600;
        color: #1e293b;
        margin: 0;
      }
      
      .highlight-text {
        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
        padding: 40px;
        border-radius: 12px;
        margin: 56px 0;
        position: relative;
        border: 1px solid #bfdbfe;
      }
      
      .highlight-text::before {
        content: '"';
        font-size: 6rem;
        color: #93c5fd;
        position: absolute;
        top: 12px;
        left: 24px;
        font-family: serif;
        line-height: 1;
        opacity: 0.7;
      }
      
      .highlight-content {
        font-size: 1.25rem;
        line-height: 1.7;
        color: #1e40af;
        font-weight: 500;
        margin: 0;
        padding-left: 48px;
        position: relative;
        z-index: 2;
        font-style: italic;
      }
      
      /* Impact Metrics - Single Row Design */
      .impact-metrics {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 16px;
        margin: 40px 0;
        padding: 0;
        width: 100%;
      }
      
      .metric-item {
        flex: 1;
        text-align: center;
        padding: 28px 16px;
        background: white;
        border: 1px solid #f1f5f9;
        border-radius: 12px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        min-height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      .metric-item:hover {
        border-color: #3b82f6;
        box-shadow: 0 8px 30px rgba(59, 130, 246, 0.1);
        transform: translateY(-2px);
      }
      
      .metric-number {
        font-size: 2.8rem;
        font-weight: 700;
        color: #3b82f6;
        display: block;
        margin-bottom: 8px;
        line-height: 1;
      }
      
      .metric-label {
        font-size: 1rem;
        color: #64748b;
        font-weight: 500;
        letter-spacing: 0.05em;
        line-height: 1.2;
      }
      
      .closing-statement {
        background: #326CDF;
        color: white;
        border-radius: 16px;
        padding: 56px 48px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      
      .closing-statement::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        animation: rotate 20s linear infinite;
      }
      
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .closing-content {
        font-size: 1.3rem;
        line-height: 1.7;
        margin: 0;
        position: relative;
        z-index: 2;
        font-weight: 400;
        color: white;
      }

            @media (max-width: 767px) {
        .closing-content {
           font-size: 1rem;
        line-height: 1.5;
        }
  }
      
      .closing-highlight {
        color: #60a5fa;
        font-weight: 600;
      }
      
      .bringing-expertise-section {
        background: #fafafa;
        padding: 20px 0 70px 0;
      }
      
      .expertise-grid-old {
        margin-top: 60px;
      }
      
      .expertise-item {
        background: white;
        padding: 40px 30px;
        border-radius: 15px;
        margin-bottom: 30px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
        border-left: 4px solid #3b82f6;
        transition: all 0.3s ease;
      }
      
      .expertise-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
      }
      
      .expertise-item h4 {
        color: #1e3a8a;
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
      }
      
      .expertise-item p {
        color: #64748b;
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 0;
      }
      
      .mission-section {
        background: white;
        padding: 20px 0 100px 0;
        color: #1e293b;
        text-align: center;
      }
      
      .mission-content {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .mission-icon {
        width: 100px;
        height: 100px;
        background: #f8fafc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 40px;
        border: 2px solid #e2e8f0;
      }
      
      .cta-section {
        background: #fafafa;
        padding: 80px 0;
        text-align: center;
      }
      
      .cta-button {
        background: linear-gradient(135deg, #3b82f6, #1e40af);
        color: white;
        padding: 18px 45px;
        border-radius: 50px;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s ease;
        border: none;
        font-size: 1.2rem;
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
      }
      
      .cta-button:hover {
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
        text-decoration: none;
      }
      
      .stats-row {
        margin-top: 40px;
        text-align: center;
      }
      
      .stat-item {
        margin-bottom: 20px;
      }
      
      .stat-number {
        display: block;
        font-size: 3rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 5px;
      }
      
      .stat-label {
        font-size: 1.1rem;
        color: #64748b;
      }
      
      /* Responsive Design for Impact Metrics */
      @media (max-width: 1200px) {
        .metric-item {
          padding: 24px 12px;
        }
        
        .metric-number {
          font-size: 2.5rem;
        }
        
        .metric-label {
          font-size: 0.95rem;
        }
      }
      
      @media (max-width: 992px) {
        .impact-metrics {
          gap: 12px;
        }
        
        .metric-item {
          padding: 20px 8px;
          min-height: 100px;
        }
        
        .metric-number {
          font-size: 2.2rem;
        }
        
        .metric-label {
          font-size: 0.9rem;
        }
      }
      
      @media (max-width: 768px) {
        .founder-hero {
          padding: 80px 0;
        }
        
        .founder-name {
          font-size: 2.8rem;
        }
        
        .section-title {
          font-size: 2.4rem;
        }

              @media (max-width: 767px) {
        .section-title{
          font-size: 2rem;
        }
        .story-section, .bringing-expertise-section, .mission-section {
          padding: 70px 0;
        }
        
        .expertise-item {
          margin-bottom: 20px;
        }
        
        .story-paragraph:first-child::first-letter {
          font-size: 3.5rem;
          margin: 4px 8px 0 0;
        }
        
        .credentials-highlight,
        .expertise-showcase,
        .closing-statement {
          padding: 32px 24px;
        }
        
        .highlight-text {
          padding: 32px 24px;
        }
        
        .highlight-content {
          padding-left: 32px;
        }
        
        .expertise-grid {
          grid-template-columns: 1fr;
        }
        
        .impact-metrics {
          gap: 8px;
        }
        
        .metric-item {
          padding: 18px 6px;
          min-height: 90px;
        }
        
        .metric-number {
          font-size: 1.8rem;
        }
        
        .metric-label {
          font-size: 0.8rem;
          line-height: 1.1;
        }
      }
      
      @media (max-width: 576px) {
        .impact-metrics {
          flex-direction: column;
          gap: 12px;
        }
        
        .metric-item {
          padding: 20px;
          min-height: 80px;
        }
        
        .metric-number {
          font-size: 2.2rem;
          margin-bottom: 4px;
        }
        
        .metric-label {
          font-size: 0.9rem;
          line-height: 1.2;
        }
      }
      
      @media (max-width: 400px) {
        .impact-metrics {
          gap: 8px;
        }
        
        .metric-item {
          padding: 16px;
          min-height: 70px;
        }
        
        .metric-number {
          font-size: 1.8rem;
        }
        
        .metric-label {
          font-size: 0.8rem;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const expertiseAreas = [
    { icon: <Target size={24} />, label: "Strategic HR Leadership" },
    { icon: <Users size={24} />, label: "Organizational Development" },
    { icon: <Globe size={24} />, label: "Multinational Operations" },
    { icon: <Award size={24} />, label: "Quality Management" },
    { icon: <BookOpen size={24} />, label: "Process Excellence" },
    { icon: <CheckCircle2 size={24} />, label: "Performance Systems" }
  ];

  return (
    <div className="founder-page">
      {/* Hero Section */}
      <section className="founder-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className="founder-image-container">
                <div className="founder-image">
                  {/* Replace this div with your actual image */}
                  <img
                    src={img1}
                    alt="Mr. Abdurahiman Charummal - Founder and Principal Consultant of BeFirst HR Solutions"
                    title="Mr. Abdurahiman Charummal - Founder and Principal Consultant"
                    loading="lazy"
                    width="600"
                    height="400"
                    className="img-fluid"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                    Mr. Abdurahiman Charummal
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: '500', marginBottom: '0' }}>
                    Founder and Principal Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="founder-content">
                <div className="text-center text-lg-start mb-4">
                  <p className="founder-subtitle">A Legacy of Leadership and Excellence in Global Energy and Utilities</p>
                </div>

                <div className="experience-highlights">
                  <div className="experience-item">
                    <Award className="experience-icon" size={24} />
                    <span>Over 40 Years of Corporate Excellence</span>
                  </div>
                  <div className="experience-item">
                    <Globe className="experience-icon" size={24} />
                    <span>Key Executive Roles at Qatar Energy and Kahramaa</span>
                  </div>
                  <div className="experience-item">
                    <Users className="experience-icon" size={24} />
                    <span>Led Multinational Corporations with 10,000+ Employees</span>
                  </div>
                  <div className="experience-item">
                    <TrendingUp className="experience-icon" size={24} />
                    <span>Master of Complex, High-Impact Operations</span>
                  </div>
                </div>

                <div className="impact-metrics">
                  <div className="metric-item">
                    <span className="metric-number">40+</span>
                    <span className="metric-label">Years</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-number">10K+</span>
                    <span className="metric-label">Employees</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-number">2</span>
                    <span className="metric-label">Major Corps</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-number">∞</span>
                    <span className="metric-label">Impact</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Hero Section End*/}

      {/* Premium Story Section */}
      <section className="story-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="section-title">Our Founder's Story</h2>
                <p className="section-subtitle">
                  A visionary leader with unparalleled experience in global energy and utilities management
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={10} className="mx-auto">
              <div className="story-content">
                <p className="story-paragraph">
                  Mr. Abdurahman Charummal, Co-Founder and Principal Consultant of BeFirst HR & Management Consultancy,
                  brings over 40 years of exemplary experience in human resources, administration, and organizational development.
                  A seasoned professional with a postgraduate degree in Public Administration and multiple certifications including
                  a Diploma in Human Resource Management and Diploma in Arabic Mr. Charummal has served in prestigious government entities
                  in Qatar, such as Qatar Energy and Kahramaa, across multi-cultural and high-performance environments.
                </p>

                <p className="story-paragraph">
                  Renowned for his leadership in HR transformation, process improvement, and quality management, he has overseen several
                  high-impact projects focused on employee development, policy frameworks, recruitment strategy, and performance systems.
                  He is widely recognized for his contributions to standardizing HR practices in both corporate and non-profit sectors,
                  including educational institutions and community organizations across the GCC and India.
                </p>

                <div className="credentials-highlight">
                  <p className="credentials-content">
                    Mr. Charummal is bilingual in English and Arabic, with near-native fluency, and has consistently earned excellence awards
                    and performance accolades throughout his career. He has attended numerous professional courses in HRM, quality auditing, and
                    behavioral management, and remains an active member of international management and academic organizations.
                  </p>
                </div>

                <p className="story-paragraph">
                  Beyond corporate impact, his philanthropic involvement reflects his deep commitment to empowering communities and creating lasting
                  value through knowledge, ethics, and strategic thinking. His mission at BeFirst is clear: to redefine HR consultancy for Kerala's SMEs
                  and startups, helping them become future-ready with people-centric systems and smart, scalable strategies.
                </p>

                <div className="highlight-text">
                  <p className="highlight-content">
                    Leading multinational corporations with more than 10,000 employees, Mr. Charummal mastered the art of people management, organizational
                    development, and strategic growth on a massive scale. His proven ability to drive operational excellence, nurture talent, and build resilient
                    teams in a multi-cultural environment has earned him respect across industries and geographies.
                  </p>
                </div>

                <div className="expertise-showcase">
                  <h3 className="expertise-title">Core Areas of Expertise</h3>
                  <div className="expertise-grid">
                    {expertiseAreas.map((area, index) => (
                      <div key={index} className="expertise-card">
                        <div className="expertise-icon">
                          {area.icon}
                        </div>
                        <p className="expertise-label">{area.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bringing Expertise Section */}
      <section className="bringing-expertise-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="section-title">Bringing World-Class Expertise to Kerala and India</h2>
                <p className="section-subtitle">Empowering SMEs and growing businesses with the same strategic HR leadership that fuels global giants</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="story-content">
                <p>
                  Leveraging this unparalleled experience, Mr. Charummal founded <strong>Befirst HR and Management Consultancy</strong> with a clear mission: to empower <strong>SMEs and growing businesses in Kerala and India</strong> with the same level of strategic HR leadership that fuels global giants.
                </p>

                <p>
                  He understands that every business, regardless of size, thrives when guided by sound people management practices — from recruitment to compliance, training, and leadership development. His global insights, combined with a deep appreciation for local business culture, enable Befirst HRM to deliver tailored, impactful solutions.
                </p>
              </div>

              <div className="expertise-grid-old">
                <h3 className="text-center mb-5" style={{ fontSize: '2.5rem', color: '#1e3a8a', fontWeight: '700' }}>
                  Why Mr. Charummal is a Major Asset to Befirst HRM
                </h3>

                <Row>
                  <Col md={6} className="mb-4">
                    <div className="expertise-item">
                      <h4><Target className="experience-icon" size={28} />Strategic Vision</h4>
                      <p>Proven ability to align HR with business objectives in complex environments.</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-4">
                    <div className="expertise-item">
                      <h4><Heart className="experience-icon" size={28} />People-Centric Leadership</h4>
                      <p>Expertise in building diverse, motivated, and high-performing teams.</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-4">
                    <div className="expertise-item">
                      <h4><Zap className="experience-icon" size={28} />Operational Excellence</h4>
                      <p>Skilled in streamlining processes to improve efficiency and productivity.</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-4">
                    <div className="expertise-item">
                      <h4><Brain className="experience-icon" size={28} />Cultural Intelligence</h4>
                      <p>Navigates global corporate frameworks while embracing local nuances.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="closing-statement">
                <h2 className="section-title mb-4 text-white">A Partner in Your Growth Journey</h2>
                <p className="lead closing-content" >
                  At Befirst HR, Mr. Charummal leads a dedicated team committed to transforming HR from a business cost to a growth catalyst. His story is not just about decades of leadership — it's about <strong style={{ color: 'white' }}>bringing that leadership to you</strong>, to help your business attract the right talent, develop effective teams, and scale sustainably in today's competitive markets.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FoundersVision;