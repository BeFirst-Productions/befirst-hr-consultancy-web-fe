import React from "react";
import ServiceSingleSidebar from "./service-single-components/sidebar";
import ctsImg from "../../images/services/service-cta-7.jpg";
import Solutions7 from "./service-single-components/solution7";
import WhyChoose7 from "./service-single-components/whyChooseUs7";
import ServiceFAQ7 from "./service-single-components/serviceFaq7";

const ServiceSingleSection7 = () => {
  const bulletList = {
    paddingLeft: "30px",
    marginBottom: "15px",
    listStyleType: "disc",
  };

  const bulletItem = {
    fontSize: "20px",
    lineHeight: "1.8",
    textAlign: "start",
    color: "#495057",
    fontWeight: "500",
    marginBottom: "0.5rem",
  };
  return (
    <section className="wpo-service-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="wpo-service-single-wrap">
              <div className="wpo-service-single-content">
                {/* <img src={service.images[0]} alt="" /> */}
                <div className="wpo-service-single-content-des">
                  <h1>Talent Acquisition & Onboarding Services in Kerala </h1>
                  <p>
                    Hiring the right people is one of the most important factors
                    for business success. Without a proper recruitment and
                    onboarding system, organizations face high attrition, poor
                    performance, and low employee satisfaction. That’s why
                    companies across the state rely on{" "}
                    <strong> Talent Acquisition Services in Kerala </strong> to
                    attract, select, and retain the best talent.
                  </p>
                  <p>
                    At <strong> Befirst HR & Management Consultancy, </strong>{" "}
                    we provide end-to-end recruitment services in Kerala,
                    supporting businesses in{" "}
                    <strong> Kozhikode, Kochi, Trivandrum, and beyond. </strong>{" "}
                    Our proven strategies ensure that you not only hire the
                    right people but also onboard them effectively for long-term
                    success.{" "}
                  </p>
                </div>
              </div>
              <Solutions7 />
              <WhyChoose7 />
              <ServiceFAQ7 />
            </div>
          </div>
          <ServiceSingleSidebar CTAIMG={ctsImg} />
        </div>
      </div>
    </section>
  );
};

export default ServiceSingleSection7;
