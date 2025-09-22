import React from "react";
import { CheckCircle } from "lucide-react";

const Solutions2 = ({ pointTitle = "Our Solutions", points = [] }) => {
  return (
    <section className="solutions-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-6 fw-bold mb-3 text-dark">
              Our HR Planning & Organization Services
            </h2>
            {/* <p className="lead text-muted">
                                Comprehensive HR solutions tailored to drive your business success
                            </p> */}
          </div>
        </div>

        <div className="row g-4">
          {/* {points.map((point, index) => ( */}
          <div className="col-lg-6 col-md-6">
            <div className="solution-card card h-100 border-0 shadow-sm p-4">
              <div className="d-flex align-items-start">
                <CheckCircle
                  className="text-primary me-3 flex-shrink-0"
                  size={28}
                />

                <div>
                  <h5 className="fw-bold mb-2 text-dark">
                    Our HR Planning & Organization Services
                  </h5>
                  <p className="text-muted mb-0">
                    We align HR strategies with your business goals by designing
                    Key Performance Indicators (KPIs) that measure success and
                    improve accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="solution-card card h-100 border-0 shadow-sm p-4">
              <div className="d-flex align-items-start">
                <CheckCircle
                  className="text-primary me-3 flex-shrink-0"
                  size={28}
                />
                <div>
                  <h5 className="fw-bold mb-2 text-dark">
                    Manpower Planning & Workforce Structuring
                  </h5>
                  <p className="text-muted mb-0">
                    Assessing business needs to create effective workforce plans
                    that balance skills, roles, and resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="solution-card card h-100 border-0 shadow-sm p-4">
              <div className="d-flex align-items-start">
                <CheckCircle
                  className="text-primary me-3 flex-shrink-0"
                  size={28}
                />
                <div>
                  <h5 className="fw-bold mb-2 text-dark">
                    Organizational Design & Restructuring
                  </h5>
                  <p className="text-muted mb-0">
                    Building clear organizational structures that support
                    growth, accountability, and smooth operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="solution-card card h-100 border-0 shadow-sm p-4">
              <div className="d-flex align-items-start">
                <CheckCircle
                  className="text-primary me-3 flex-shrink-0"
                  size={28}
                />
                <div>
                  <h5 className="fw-bold mb-2 text-dark">
                    Job Role Definition & Competency Mapping
                  </h5>
                  <p className="text-muted mb-0">
                    Developing accurate job descriptions and competency
                    frameworks to match talent with business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="solution-card card h-100 border-0 shadow-sm p-4">
              <div className="d-flex align-items-start">
                <CheckCircle
                  className="text-primary me-3 flex-shrink-0"
                  size={28}
                />
                <div>
                  <h5 className="fw-bold mb-2 text-dark">
                    Succession Planning
                  </h5>
                  <p className="text-muted mb-0">
                    Identifying and preparing future leaders to secure long-term
                    business continuity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="solution-card card h-100 border-0 shadow-sm p-4">
              <div className="d-flex align-items-start">
                <CheckCircle
                  className="text-primary me-3 flex-shrink-0"
                  size={28}
                />
                <div>
                  <h5 className="fw-bold mb-2 text-dark">
                    HR Policy & Process Development
                  </h5>
                  <p className="text-muted mb-0">
                    Designing robust HR policies and organizational processes to
                    support efficiency and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">OD Initiatives & Change Management</h5>
                                    <p className="text-muted mb-0">
                                        We support organizational development (OD) and guide businesses through change to ensure smooth transitions and workforce alignment.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Process Automation & Standardization</h5>
                                    <p className="text-muted mb-0">
                                        Save time and reduce errors by automating repetitive HR processes and implementing standardized frameworks.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <style jsx>{`
        .solutions-section {
          background-color: #fafbfc;
        }
        .solution-card {
          transition: all 0.3s ease;
          background-color: #ffffff;
        }
        .solution-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08) !important;
        }
      `}</style>
    </section>
  );
};

export default Solutions2;
