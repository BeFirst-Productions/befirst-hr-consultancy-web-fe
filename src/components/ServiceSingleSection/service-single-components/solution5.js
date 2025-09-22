import React from "react";
import { CheckCircle } from "lucide-react";

const Solutions5 = () => {
  return (
    <section className="solutions-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-6 fw-bold mb-3 text-dark">
              Our Recruitment & Manpower Services
            </h2>
            {/* <p className="lead text-muted">
We offer specialized consultancy services to ensure your business runs at its full potential:                            
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
                    Staffing Solutions in Kerala
                  </h5>
                  <p className="text-muted mb-0">
                    Providing skilled candidates across industries for
                    temporary, permanent, and contractual roles.
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
                    Manpower Services in Kerala{" "}
                  </h5>
                  <p className="text-muted mb-0">
                    Reliable manpower supply tailored to meet the needs of SMEs,
                    startups, and corporates.
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
                    HR Outsourcing in Kerala
                  </h5>
                  <p className="text-muted mb-0">
                    Cost-effective HR outsourcing services to streamline hiring
                    and reduce workload.
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
                    Executive Search & Head Hunting
                  </h5>
                  <p className="text-muted mb-0">
                    Identifying top-level talent and leadership professionals
                    for key positions.
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
                    Bulk Recruitment & Campus Hiring
                  </h5>
                  <p className="text-muted mb-0">
                    Customized hiring drives to meet large-scale workforce
                    requirements.
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

export default Solutions5;
