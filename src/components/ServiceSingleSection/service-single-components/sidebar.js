import React from 'react'
import { Link } from 'react-router-dom'
import PremiumCTA from '../../cta';


const ServiceSingleSidebar = ({ CTAIMG }) => {
    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>All Services</h2>
                    <ul>
                        <li><Link to="/service/hr-operations-&-administration">HR Operations & Administration</Link></li>
                        <li><Link to="/service/hr-planning-&-organization">HR Planning & Organization</Link></li>
                        <li><Link to="/service/learning-&-development">Learning & Development</Link></li>
                        <li><Link to="/service/payroll-&-compensation">Payroll & Compensation</Link></li>
                        <li><Link to="/service/quality-assurance-&-compliance">Quality Assurance & Compliance</Link></li>
                        <li><Link to="/service/talent-acquisition-&-Onboarding">Talent Acquisition & Onboarding</Link></li>
                        <li><Link to="/service/recruitment-assistance">Recruitment Assistance</Link></li>
                        <li><Link to="/service/hr-policy-&-procedure">HR Polcy & Procedure</Link></li>
                        <li><Link to="/service/traing-&-development ">Training & Development</Link></li>
                        <li><Link to="/service/staff-appraisal-system">Staff Appraisal System</Link></li>
                        <li><Link to="/service/customer-care-orientation">Customer Care Orientation</Link></li>


                    </ul>
                </div>
                {/* <div className="wpo-newsletter-widget widget">
                        <h2>Newsletter</h2>
                        <p>Join 20,000 Sabscribers!</p>
                        <form className="form">
                            <input type="text" placeholder="Email Address"/>
                            <button type="submit">Sign Up</button>
                        </form>
                        <span>By signing up you agree to our <Link to="/service-single">Privecy Policy</Link></span>
                </div> */}
                {/* <div className="wpo-instagram-widget widget">
                        <h2>Instagram Shot</h2>

                        <ul>
                            <li><Link to="/project"><img src={insimg1} alt=""/></Link></li>
                            <li><Link to="/project"><img src={insimg2} alt=""/></Link></li>
                            <li><Link to="/project"><img src={insimg3} alt=""/></Link></li>
                            <li><Link to="/project"><img src={insimg4} alt=""/></Link></li>
                            <li><Link to="/project"><img src={insimg5} alt=""/></Link></li>
                            <li><Link to="/project"><img src={insimg6} alt=""/></Link></li>
                        </ul>
                </div> */}

                {/* <div className="wpo-contact-widget widget">
                        <h2>How We Can <br/> Help You!</h2>
                        <p>Need a compliant and performance-driven HR system? </p>
                        <Link to="/contact">Contact Us</Link>
                </div> */}
                <PremiumCTA CTAIMG={CTAIMG} />

            </div>
        </div>
    )
}

export default ServiceSingleSidebar;