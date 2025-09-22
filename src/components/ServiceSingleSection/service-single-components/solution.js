import React from "react";
import { CheckCircle } from "lucide-react";

const Solutions1 = () => {
  return (
    <section className="solutions-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-6 fw-bold mb-3 text-dark">
              Our HR Operations & Administration Services
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
                    HRIS & Employee Data Management
                  </h5>
                  <p className="text-muted mb-0">
                    Secure, digital-first solutions to manage employee
                    information and HR records efficiently.
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
                    Attendance, Leave & Payroll Inputs
                  </h5>
                  <p className="text-muted mb-0">
                    Streamlined systems for accurate attendance tracking and
                    payroll input processing.
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
                    Travel & Deputation Procedures
                  </h5>
                  <p className="text-muted mb-0">
                    Hassle-free management of employee travel, deputation, and
                    related documentation.
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
                    Exit Formalities & Offboarding
                  </h5>
                  <p className="text-muted mb-0">
                    Smooth handling of employee exits with complete compliance
                    and documentation.{" "}
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
                    Document & Records Management
                  </h5>
                  <p className="text-muted mb-0">
                    Centralized storage and control of HR documents for accuracy
                    and compliance.{" "}
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
                    Correspondence & Reporting
                  </h5>
                  <p className="text-muted mb-0">
                    Professional communication and reporting frameworks tailored
                    for management needs.{" "}
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

export default Solutions1;
