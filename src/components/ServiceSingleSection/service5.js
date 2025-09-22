import React from "react";
import ServiceSingleSidebar from "./service-single-components/sidebar";
// import Solutions from './service-single-components/solution'
// import Benefits from './service-single-components/benefits'
// import WhyChoose from './service-single-components/whyChooseUs'
import ServiceFAQ5 from "./service-single-components/serviceFaq5";
import Solutions5 from "./service-single-components/solution5";
import RecruitmentProcess from "./service-single-components/RecruitmentProcess";
import ctsImg from "../../images/services/service-cta-5.jpg";
import WhyChoose5 from "./service-single-components/whyChooseUs5";

const ServiceSingleSection5 = () => {
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
                  <h1>Recruitment Assistance </h1>
                  <p>
                    Finding and hiring the right talent is essential for every
                    business. Without effective recruitment strategies,
                    companies face hiring delays, high attrition, and mismatched
                    candidates. That’s why organizations depend on professional{" "}
                    <strong> recruitment Assistance in Kerala </strong>to
                    identify, evaluate, and onboard the best people for the job.
                  </p>
                  <p>
                    At <strong> Befirst HR Consultancy, </strong> we specialize
                    in end-to-end manpower services in Kerala, supporting
                    businesses across{" "}
                    <strong>
                      {" "}
                      Kozhikode, Kochi, Trivandrum, and other key locations.{" "}
                    </strong>{" "}
                    Our recruitment experts ensure that your workforce needs are
                    met with speed, accuracy, and professionalism.
                  </p>
                </div>
              </div>
              <Solutions5 />
              <RecruitmentProcess />
              <div className="wpo-service-single-content-des">
                <h2>Industries We Serve</h2>
                <ul style={bulletList}>
                  <li style={bulletItem}>IT & Software Development</li>
                  <li style={bulletItem}>Manufacturing & Engineering</li>
                  <li style={bulletItem}>Healthcare & Pharmaceuticals</li>
                  <li style={bulletItem}>Hospitality & Tourism</li>
                  <li style={bulletItem}>Finance & Banking</li>
                  <li style={bulletItem}>Education & Training</li>
                  <li style={bulletItem}>Retail & E-commerce</li>
                </ul>
              </div>
<WhyChoose5/>
              {/* <WhyChoose2 /> */}
              <ServiceFAQ5 />
            </div>
          </div>
          <ServiceSingleSidebar CTAIMG={ctsImg} />
        </div>
      </div>
    </section>
  );
};

export default ServiceSingleSection5;
