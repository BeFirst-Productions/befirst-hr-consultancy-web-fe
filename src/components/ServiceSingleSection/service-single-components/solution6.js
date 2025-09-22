import React from "react";
import { CheckCircle } from "lucide-react";

const Solutions6 = () => {
  return (
    <section className="solutions-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-6 fw-bold mb-3 text-dark">
              Our HR Compliance & Quality Assurance Services
            </h2>
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
                    Statutory Compliance for Businesses
                  </h5>
                  <p className="text-muted mb-0">
                    Ensuring adherence to PF, ESI, gratuity, minimum wage,
                    bonus, and other legal frameworks.
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
                    Labour Law Compliance in Kerala
                  </h5>
                  <p className="text-muted mb-0">
                    Expert guidance on Kerala’s labour laws to prevent penalties
                    and legal issues.
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
                  <h5 className="fw-bold mb-2 text-dark">HR Audit Services</h5>
                  <p className="text-muted mb-0">
                    Comprehensive HR audits to evaluate policies, documentation,
                    and compliance gaps.
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
                    Employee Compliance Solutions
                  </h5>
                  <p className="text-muted mb-0">
                    Streamlined processes for employee contracts, records, and
                    workplace policies.
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
                    Policy Review & Quality Assurance
                  </h5>
                  <p className="text-muted mb-0">
                    Reviewing, updating, and standardizing HR policies to align
                    with business goals and legal requirements.
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
                                    <h5 className="fw-bold mb-2 text-dark">Ethical & Governance Frameworks</h5>
                                    <p className="text-muted mb-0">
                                        Building transparent HR systems that foster trust and accountability.
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

export default Solutions6;
