import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
import ctsImg from "../../images/services/service-cta-8.jpg"
import Solutions8 from './service-single-components/solution8'
import WhyChoose8 from './service-single-components/whyChooseUs8'
import ServiceFAQ8 from './service-single-components/serviceFaq8'



const ServiceSingleSection8 = () => {

    return (
        <section className="wpo-service-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="wpo-service-single-wrap">
                            <div className="wpo-service-single-content">
                                {/* <img src={service.images[0]} alt="" /> */}
                                <div className="wpo-service-single-content-des">
                                    <h2>HR Policy & Procedure Services in Kerala </h2>
                                    <p>
                                        Human Resources Policies are a set of rules covering hiring, promotion, administration, leave, termination, work ambiance, <strong> compensation, performance appraisal, </strong> and essential HR functions.
                                        These policies define how organizations treat stakeholders
                                        and properties, developed and maintained by HR management or owners. Managers, supervisors, staff, contractors, and stakeholders
                                        must know relevant policies and amendments. Procedures implement these policies within organizations using forms, checklists, flowcharts,
                                        and applications, which can later be automated.
                                    </p>
                                    <p>
                                        We provide tailor-made <strong> HR Policy & Procedure Services in Kerala </strong> through consultation and discussions, with our consultants arranging appointments to design suitable policies and procedures for your company.
                                    </p>


                                </div>

                            </div>
                            <Solutions8 />
                            <WhyChoose8 />
                            <ServiceFAQ8 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg} />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection8;