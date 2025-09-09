import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
import WhyChoose4 from './service-single-components/whyChooseUs4'
import Solutions4 from './service-single-components/solution4'
import ServiceFAQ4 from './service-single-components/serviceFaq4'
import ctsImg from "../../images/services/service-cta-4.jpg"




const ServiceSingleSection4 = () => {
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
                                    <h2>Payroll & Compensation Services in Kerala </h2>
                                    <p>
                                        Managing payroll and employee compensation can be complex, time-consuming, and risky if not handled correctly. Errors in salary processing,
                                        tax compliance, or benefits management can lead to dissatisfaction and penalties. At <strong> Befirst HR & Management Consultancy, </strong>  we provide
                                        <strong> Payroll & Compensation solutions </strong>  that ensure accuracy, compliance, and employee satisfaction for businesses in <strong> Kozhikode, Kochi, Trivandrum, and across Kerala.</strong>
                                    </p>
                                    <p>
                                        Whether you are a <strong> startup, SME, or corporate enterprise, </strong> our payroll experts ensure your employees are paid correctly and on time, every time.
                                    </p>



                                    {/* <h2>Our Payroll Services </h2>
                                    <h3>1. Payroll Setup</h3>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                            Designing a payroll system tailored to your business structure
                                        </li>
                                        <li style={bulletItem}>
                                            Setting up salary structures, deductions, and allowances
                                        </li>
                                        <li style={bulletItem}>
                                            Integrating statutory compliances (EPF, ESI, Professional Tax)
                                        </li>
                                        <li style={bulletItem}>
                                            Choosing the right payroll software or tools for your needs
                                        </li>
                                    </ul>
                                    <h3>2. Payroll Management</h3>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                           Monthly salary calculation and disbursement
                                        </li>
                                        <li style={bulletItem}>
                                           Tax computation and TDS filing
                                        </li>
                                        <li style={bulletItem}>
                                          Leave and attendance integration
                                        </li>
                                        <li style={bulletItem}>
                                            Employee payslip generation
                                        </li>
                                        <li style={bulletItem}>
                                            Compliance reporting and documentation
                                        </li>
                                    </ul>
                                    <h3>3. Payroll Training</h3>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                           Hands-on training for HR, finance, and admin teams
                                        </li>
                                        <li style={bulletItem}>
                                            Payroll software training (customized per your chosen platform)
                                        </li>
                                        <li style={bulletItem}>
                                            Kerala-specific payroll compliance and best practices
                                        </li>
                                        <li style={bulletItem}>
                                           Troubleshooting common payroll issues
                                        </li>
                                    </ul> */}

                                </div>


                            </div>
                            <Solutions4 />
                            <WhyChoose4 />
                            <ServiceFAQ4 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg} />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection4;