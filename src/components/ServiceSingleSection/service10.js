import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
import ctsImg from "../../images/services/service-cta-7.jpg"
import Solutions10 from './service-single-components/solution10'
import WhyChoose10 from './service-single-components/whyChooseUs10'
import ServiceFAQ10 from './service-single-components/serviceFaq10'



const ServiceSingleSection10 = () => {

    return (
        <section className="wpo-service-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="wpo-service-single-wrap">
                            <div className="wpo-service-single-content">
                                {/* <img src={service.images[0]} alt="" /> */}
                                <div className="wpo-service-single-content-des">
                                    <h2>Training & Development Services in Calicut, Kerala </h2>
                                    <p>
                                        <strong> Training & Development Services in Calicut, Kerala  </strong> is a systematic educational project of organizations which targets
                                        sustainable development. This initiative improves the skills and talents of employees, who are the immeasurable and uncountable
                                        assets of the organization.

                                    </p>
                                    <p>
                                        Manpower is countless and infinite. A normal socially active human being scarcely utilizes his brain capacity by 5 to 20 percent maximum.
                                        Through proper education and <strong> training & development services in Calicut, Kerala, </strong> the capacities of human beings can be multiplied innumerably.
                                        By improving knowledge, skills, and talents, an ordinary employee can be transformed into a great leader. An educated and trained employee can
                                        focus on targets and self-improvement.
                                    </p>
                                    <p>
                                        We undertake the responsibility to make your employees real leaders by bringing out their relevant capabilities through <strong> training & development services in Calicut, Kerala   </strong>and utilizing them for organizational development.
                                    </p>


                                </div>

                            </div>
                            <Solutions10 />
                            <WhyChoose10 />
                            <ServiceFAQ10 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg} />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection10;