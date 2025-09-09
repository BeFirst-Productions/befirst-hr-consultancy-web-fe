import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
// import Solutions from './service-single-components/solution'
// import Benefits from './service-single-components/benefits'
// import WhyChoose from './service-single-components/whyChooseUs'
import ServiceFAQ2 from './service-single-components/serviceFaq2'
import WhyChoose2 from './service-single-components/whyChooseUs2'
import Solutions2 from './service-single-components/solution2'
import ServiceFAQ3 from './service-single-components/serviceFaq3'
import Solutions3 from './service-single-components/solution3'
import ctsImg from "../../images/services/service-cta-3.jpg"
import WhyChoose3 from './service-single-components/whyChooseUs3'



const ServiceSingleSection3 = () => {
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
                                    <h2>Learning & Development (L&D) Services in Kerala</h2>
                                    <p>
                                        In today’s fast-changing business environment, success depends on how well your employees and leaders are trained to adapt, innovate, and perform. At <strong> Befirst HR & Management Consultancy, </strong>  we specialize in <strong> Learning & Development (L&D) solutions </strong>  that empower businesses in <strong> Kozhikode, Kochi, Trivandrum, and across Kerala </strong> to build skilled, confident, and future-ready teams.
                                    </p>
                                    <p>
                                        Whether you’re a <strong> startup building a strong workforce </strong>  or an <strong> established enterprise nurturing future leaders, </strong>  our tailored training programs improve productivity, leadership capabilities, and overall business performance.
                                    </p>
                                </div>


                            </div>
                            <Solutions3 />
                            <WhyChoose3 />
                            <ServiceFAQ3 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg} />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection3;