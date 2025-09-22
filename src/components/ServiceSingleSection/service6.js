import React from "react";
import ServiceSingleSidebar from "./service-single-components/sidebar";
import ServiceFAQ6 from "./service-single-components/serviceFaq6";
import Solutions6 from "./service-single-components/solution6";
import ctsImg from "../../images/services/service-cta-6.jpg";
import WhyChoose6 from "./service-single-components/whyChooseUs6";

const ServiceSingleSection6 = () => {
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
                  <h1>Quality Assurance & HR Compliance Services in Kerala </h1>
                  <p>
                    Ensuring compliance with labour laws and HR policies is
                    essential for every business. Non-compliance can lead to
                    penalties, legal disputes, and reputational risks. That’s
                    why organizations across the state rely on{" "}
                    <strong> HR Compliance Services in Kerala </strong> to
                    maintain transparency, meet statutory requirements, and
                    safeguard their operations.
                  </p>
                  <p>
                    At <strong> Befirst HR & Management Consultancy, </strong>{" "}
                    we provide expert{" "}
                    <strong>
                      {" "}
                      Quality Assurance & HR compliance solutions{" "}
                    </strong>{" "}
                    for businesses in{" "}
                    <strong>
                      {" "}
                      Kozhikode, Kochi, Trivandrum, and across Kerala.{" "}
                    </strong>{" "}
                    Our compliance specialists help organizations stay legally
                    sound while building employee trust and operational
                    efficiency.
                  </p>
                </div>
              </div>
              <Solutions6 />
              <WhyChoose6 />
              <ServiceFAQ6 />
            </div>
          </div>
          <ServiceSingleSidebar CTAIMG={ctsImg} />
        </div>
      </div>
    </section>
  );
};

export default ServiceSingleSection6;
