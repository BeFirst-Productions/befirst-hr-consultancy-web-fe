import React from "react";
import ServiceSingleSidebar from "./service-single-components/sidebar";
// import Solutions from './service-single-components/solution'
// import Benefits from './service-single-components/benefits'
// import WhyChoose from './service-single-components/whyChooseUs'
import ServiceFAQ2 from "./service-single-components/serviceFaq2";
import WhyChoose2 from "./service-single-components/whyChooseUs2";
import Solutions2 from "./service-single-components/solution2";
import ctsImg from "../../images/services/service-cta-2.jpg";

const ServiceSingleSection2 = () => {
  const bulletList = {
    paddingLeft: "20px",
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
                  <h1>HR Planning & Organization Services in Kerala</h1>
                  <p>
                    Effective{" "}
                    <strong>
                      {" "}
                      HR Planning & Organization Services in Kerala{" "}
                    </strong>{" "}
                    are crucial for building a strong, future-ready workforce.
                    Without proper manpower planning and structured HR systems,
                    businesses face challenges in recruitment, employee
                    allocation, and long-term growth. At{" "}
                    <strong> Befirst HR & Management Consultancy, </strong> we
                    partner with organizations in{" "}
                    <strong>
                      {" "}
                      Kozhikode, Kochi, Trivandrum, and across Kerala{" "}
                    </strong>{" "}
                    to design strategic HR plans that align with business
                    objectives, boost productivity, and ensure sustainable
                    success.{" "}
                  </p>
                  <p>
                    Whether you are an SME, corporate enterprise, or a growing
                    startup, our HR planning and organization support ensures
                    that you have the right people, in the right roles, at the
                    right time.
                  </p>
                </div>
              </div>
              <Solutions2 />
              <WhyChoose2 />
              <ServiceFAQ2 />
            </div>
          </div>
          <ServiceSingleSidebar CTAIMG={ctsImg} />
        </div>
      </div>
    </section>
  );
};

export default ServiceSingleSection2;
