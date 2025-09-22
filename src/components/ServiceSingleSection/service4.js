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
                                    <h1>Payroll & Compensation Services in Kerala </h1>
                                    <p>
Managing payroll and employee compensation is one of the most critical aspects of HR. 
Errors in salary processing, taxation, or compliance can affect employee trust and create legal challenges.
 That’s why many businesses choose <strong> professional Payroll & Compensation Services in Kerala </strong>  to simplify and secure
  this vital function.
                                    </p>
                                    <p>
At <strong> Befirst HR Solutions, </strong> we provide reliable <strong> payroll outsourcing in Kerala </strong> for businesses in Kozhikode, Kochi, Trivandrum, and across the state. 
Our services ensure accurate salary disbursement, compliance with labour laws, and complete confidentiality, giving you more time to focus on core business growth.
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