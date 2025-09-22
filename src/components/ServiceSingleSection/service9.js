import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
import ctsImg from "../../images/services/service-cta-9.jpg"
import Solutions9 from './service-single-components/solution9'
import WhyChoose9 from './service-single-components/whyChooseUs9'
import ServiceFAQ9 from './service-single-components/serviceFaq9'



const ServiceSingleSection9 = () => {

    return (
        <section className="wpo-service-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="wpo-service-single-wrap">
                            <div className="wpo-service-single-content">
                                {/* <img src={service.images[0]} alt="" /> */}
                                <div className="wpo-service-single-content-des">
                                    <h2>Staff Appraisal System in Calicut </h2>
                                    <p>
                                        The <strong>  Staff Appraisal System in Calicut </strong> is a vital HR tool to intelligently identify employees’ strengths and weaknesses
                                        in their competencies and help them improve performance gaps. This system provides employers and employees the opportunity
                                        to explore capability deficiencies. Managers and supervisors can determine whether employee performance aligns with organizational
                                        business goals.

                                    </p>
                                    <p>
                                        When executed properly, it enhances employee capacity, driving growth and profit. The appraisal process develops talents and skills, assigns personal targets,
                                        and ensures alignment with the organization’s mission and vision. We educate on appraisals, types, challenges, and how to make the process efficient and profitable.
                                    </p>


                                </div>

                            </div>
                            <Solutions9 />
                            <WhyChoose9 />
                            <ServiceFAQ9 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg} />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection9;