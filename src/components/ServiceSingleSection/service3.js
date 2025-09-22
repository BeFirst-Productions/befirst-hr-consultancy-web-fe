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
                                    <h1>Learning & Development (L&D) Services in Kerala</h1>
                                    <p>
Investing in <strong> Learning & Development (L&D) Services in Kerala </strong> is one of the most effective ways for businesses to 
enhance workforce skills, boost employee engagement, and ensure long-term growth. At <strong> Befirst HR & Management Consultancy, </strong> we provide customized training and development 
programs for companies in <strong> Calicut, Kochi, Trivandrum, and across Kerala. </strong>
                                    </p>
                                    <p>
From employee skill enhancement to leadership training, our L&D services are designed to align with your business goals, build strong teams, and create future-ready leaders
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