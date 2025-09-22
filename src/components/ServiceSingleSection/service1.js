import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'

import ServiceFAQ2 from './service-single-components/serviceFaq2'
import WhyChoose2 from './service-single-components/whyChooseUs2'
import Solutions1 from './service-single-components/solution'
import WhyChoose from './service-single-components/whyChooseUs'
import ServiceFAQ from './service-single-components/serviceFaq'
import ctsImg from "../../images/services/service-cta-1.jpg"



const ServiceSingleSection1 = () => {
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
                                    <h1>HR Operations & Administration Services in Kerala</h1>
                                    <p>
                                Efficient <strong> HR Operations & Administration Services in Kerala </strong> are the backbone of a successful business. Without streamlined HR processes,
                                 companies risk compliance issues, employee dissatisfaction, and productivity loss. At <strong> Befirst HR & Management Consultancy, </strong> we support organizations 
                                 in <strong> Kozhikode, Kochi, Trivandrum, and across Kerala </strong> with trusted HR solutions that save time, reduce errors, and ensure smooth employee management.
                                    </p>
                                    <p>
                                Whether you are an entrepreneur, SME, or corporate leader, our services simplify your day-to-day HR functions, allowing you to focus on growing your business.
                                    </p>
                                </div>
                            </div>
                            <Solutions1 />
                            <WhyChoose />
                            <ServiceFAQ />

                            {/* <WhyChoose/>
                            <Benefits /> */}
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg} />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection1;