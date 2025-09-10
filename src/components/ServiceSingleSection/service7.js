import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
import ctsImg from "../../images/services/service-cta-7.jpg"
import Solutions7 from './service-single-components/solution7'
import WhyChoose7 from './service-single-components/whyChooseUs7'
import ServiceFAQ7 from './service-single-components/serviceFaq7'



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
                                    <h2>Talent Acquisition & Onboarding Services in Kerala  </h2>
                                    <p>
                                    Finding and retaining the right talent is one of the biggest challenges for businesses today. At <strong> Befirst HR & Management Consultancy, </strong>  we specialize in <strong> Talent Acquisition & Onboarding solutions </strong>  that help companies in <strong> Kozhikode, Kochi, Trivandrum, and across Kerala </strong>  hire the best people and integrate them seamlessly into their organizations.
                                    </p>
                                    <p>
                                     Our expertise ensures that <strong> entrepreneurs, SMEs, corporates, and C-suite leaders </strong> don’t just hire employees but build high-performing teams aligned with their vision and goals
                                    </p>


                                </div>

                            </div>
                            <Solutions7 />
                            <WhyChoose7 />
                            <ServiceFAQ7 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg}/>

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection7;