import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/Befirst-Logos-png.png'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        {/* Column 1  */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link onClick={ClickHandler} to="/">
                                        <img src={Logo} alt="blog" />
                                    </Link>
                                </div>
                                <p>Empowering businesses in Kerala to hire smarter, stay compliant, and build workplaces where people thrive.</p>
                                <ul>
                                    <li><a
                                        href="https://www.facebook.com/share/1BZpRjpJGm/?mibextid=wwXIfr"
                                        target='_blank'
                                        rel="noreferrer"
                                    ><i className="ti-facebook"></i>
                                    </a></li>
                                    <li><a href="https://www.instagram.com/befirsthrm/"
                                        target='_blank'
                                        rel="noreferrer"
                                    ><i className="ti-instagram"></i>
                                    </a></li>
                                    {/* <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li> */}
                                    <li><a href="https://www.linkedin.com/showcase/befirsthrm/?viewAsMember=true"
                                        target='_blank'
                                        rel="noreferrer"
                                    ><i className="ti-linkedin"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 4 */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i>Near Kannankandy e-store, Thondayad jn, Calicut, Kerala India</li>
                                        <li>
                                            <i className="fi flaticon-phone-call"></i>
                                            <a
                                                href="tel:+919400905954"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: 'none', color: 'inherit' }}
                                            >
                                                +91 9400905954
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fi flaticon-send"></i>
                                            <a
                                                href="mailto:hello@befirsthr.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: "none", color: "inherit" }}
                                            >
                                                hello@befirsthr.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Consultancy</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/service/hr-planning-&-organization">HR Planning & Organization</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service/hr-policy-&-procedure">HR Polcy & Procedure</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service/quality-assurance-&-compliance">Quality Assurance & Compliance</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service/staff-appraisal-system">Staff Appraisal System</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service/customer-care-orientation">Customer Care Orientation</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3  */}
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/service/hr-operations-&-administration">HR Operations & Administration</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service/recruitment-assistance">Recruitment Assistance</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service/learning-&-development">Learning & Development</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service/payroll-&-compensation">Payroll & Compensation</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service/talent-acquisition-&-Onboarding ">Talent Acquisition & Onboarding</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service/traing-&-development ">Training & Development</Link></li>

                                </ul>
                            </div>
                        </div>


                        {/* Column 5 */}
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title" >
                                    <h3>Explore</h3>
                                </div>
                                <ul>
                                    <li ><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li style={{ marginBottom: '20px' }}><Link onClick={ClickHandler} to="/careers">Careers</Link></li>

                                </ul>
                                <div className="widget-title" style={{ marginTop: '20px' }}>
                                    <h3>Our Policy</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/terms-of-use">Terms of Use</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2025 Be First HR by <Link onClick={ClickHandler} to="https://nextmedia.ae/" target='_blank'>Next Media</Link>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;