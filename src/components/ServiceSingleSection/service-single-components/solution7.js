import React from "react";
import { CheckCircle } from "lucide-react";

const Solutions7 = () => {
  return (
    <section className="solutions-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-6 fw-bold mb-3 text-dark">
              Our Talent Acquisition & Onboarding Services
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
                    Strategic Talent Acquisition
                  </h5>
                  <p className="text-muted mb-0">
                    Tailored hiring strategies to find skilled professionals who
                    match your business needs.
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
                    Recruitment Services in Kerala
                  </h5>
                  <p className="text-muted mb-0">
                    End-to-end recruitment solutions for startups, SMEs, and
                    corporates across industries.
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
                    Onboarding Solutions in Kerala
                  </h5>
                  <p className="text-muted mb-0">
                    Structured onboarding programs that help new employees adapt
                    quickly and feel connected.
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
                    Employer Branding Support
                  </h5>
                  <p className="text-muted mb-0">
                    Enhancing your company’s reputation to attract and retain
                    top talent.
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
                    Assessment & Selection
                  </h5>
                  <p className="text-muted mb-0">
                    Competency-based evaluation methods to hire the right
                    candidates with confidence.
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
                    Employee Orientation Programs
                  </h5>
                  <p className="text-muted mb-0">
                    Smooth transition processes to introduce employees to
                    company culture, policies, and expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
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

export default Solutions7;
