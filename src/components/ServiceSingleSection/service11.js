import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
import ctsImg from "../../images/services/service-cta-7.jpg"
import Solutions11 from './service-single-components/solution11'
import WhyChoose11 from './service-single-components/whyChooseUs11'
import ServiceFAQ11 from './service-single-components/serviceFaq11'



const ServiceSingleSection11 = () => {

    return (
        <section className="wpo-service-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="wpo-service-single-wrap">
                            <div className="wpo-service-single-content">
                                {/* <img src={service.images[0]} alt="" /> */}
                                <div className="wpo-service-single-content-des">
                                    <h2>Customer Care Orientation in Calicut</h2>
                                    <p>
                                        Customer is not a burden but the backbone of any organization. Without customers,
                                        there is no business, employees, income, or salary. Customer care is fundamental in
                                        determining whether a business grows or declines. Every employee, not just those handling
                                        customer care, must respect all customers and stakeholders and treat them with kindness to
                                        build emotional connections. Customer care goes beyond delivering expected services; it is
                                        about meeting emotional needs and fostering lasting relationships. At Befirst HR Consulting,
                                        we provide tailor made Customer Care Training for senior and junior staff, ensuring your customers
                                        stay loyal and satisfied.

                                    </p>


                                </div>

                            </div>
                            <Solutions11 />
                            <WhyChoose11 />
                            <ServiceFAQ11 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg} />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection11;