import React from 'react';
import ContactForm from '../ContactFrom'

import cnt1 from '../../images/icon/home.svg'
import cnt2 from '../../images/icon/mail-2.svg'
import cnt3 from '../../images/icon/app.svg'

const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12 mb-4">
                                    <div className="office-info-item contact-card">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <img src={cnt1} alt="Address Icon"/>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>Near Kannankandy e-store, Thondayad jn, Calicut, Kerala India</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12 mb-4">
                                    <div className="office-info-item contact-card">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <img src={cnt2} alt="Email Icon"/>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>
                                                <a href='mailto:hello@befirsthr.com' 
                                                target='_blank' 
                                                rel="noopener noreferrer"
                                                className="contact-link"
                                                >
                                                    hello@befirsthr.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12 mb-4">
                                    <div className="office-info-item contact-card">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <img src={cnt3} alt="Phone Icon"/>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>
                                                <a 
                                                href="tel:+919400905954" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="contact-link"
                                                >
                                                    +91 9400905954
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>We're here to help you with all your HR needs. Send us a message and our expert team will get back to you promptly.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.5875686358336!2d75.81160117504899!3d11.263137588916784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b02a08e98b3%3A0xf3c286ef335db393!2sKannankandy%20EStore%20-%20Thondayad!5e1!3m2!1sen!2sin!4v1755001831571!5m2!1sen!2sin"></iframe>
                </div>
            </section>

            {/* Enhanced CSS Styles with Animations */}
            <style jsx>{`
                .section-padding {
                    padding: 80px 0;
                    background-color: #f8f9fa;
                }

                .office-info {
                    margin-bottom: 60px;
                }

                .contact-card {
                    background: #ffffff;
                    border-radius: 12px;
                    padding: 40px 30px;
                    text-align: center;
                    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
                    border: 1px solid #e9ecef;
                    transition: all 0.4s ease;
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    transform: translateY(0);
                }

                .contact-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.6s ease;
                }

                .contact-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
                    border-color: #007bff;
                }

                .contact-card:hover::before {
                    left: 100%;
                }

                .office-info-icon {
                    margin-bottom: 25px;
                    position: relative;
                }

                .icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #007bff, #0056b3);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                    transition: all 0.4s ease;
                    position: relative;
                    overflow: hidden;
                }

                .icon::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
                    border-radius: 50%;
                    transform: scale(0);
                    transition: transform 0.4s ease;
                }

                .contact-card:hover .icon {
                    transform: rotate(360deg) scale(1.1);
                    box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
                }

                .contact-card:hover .icon::after {
                    transform: scale(1);
                }

                .icon img {
                    width: 40px;
                    height: 40px;
                    filter: brightness(0) invert(1);
                    transition: all 0.3s ease;
                    position: relative;
                    z-index: 2;
                }

                .contact-card:hover .icon img {
                    transform: scale(1.1);
                }

                .office-info-text h2 {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 15px;
                    color: #2c3e50;
                    transition: color 0.3s ease;
                    position: relative;
                }

                .contact-card:hover .office-info-text h2 {
                    color: #007bff;
                }

                .office-info-text p {
                    font-size: 16px;
                    color: #6c757d;
                    line-height: 1.6;
                    margin: 0;
                    transition: color 0.3s ease;
                }

                .contact-link {
                    color: #495057 !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease;
                    position: relative;
                    display: inline-block;
                }

                .contact-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: #007bff;
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }

                .contact-link:hover {
                    color: #007bff !important;
                    transform: translateY(-1px);
                }

                .contact-link:hover::after {
                    width: 100%;
                }

                .wpo-contact-title {
                    text-align: center;
                    margin-bottom: 50px;
                    animation: fadeInUp 0.8s ease;
                }

                .wpo-contact-title h2 {
                    font-size: 42px;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 20px;
                    position: relative;
                    display: inline-block;
                }

                .wpo-contact-title h2::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    width: 60px;
                    height: 3px;
                    background: linear-gradient(135deg, #007bff, #0056b3);
                    transform: translateX(-50%);
                    border-radius: 2px;
                }

                .wpo-contact-title p {
                    font-size: 18px;
                    color: #6c757d;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .wpo-contact-form-area {
                    background: #ffffff;
                    border-radius: 15px;
                    padding: 50px 40px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e9ecef;
                    animation: fadeInUp 1s ease 0.2s both;
                }

                .wpo-contact-map-section {
                    margin-top: 80px;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                .wpo-contact-map iframe {
                    width: 100%;
                    height: 450px;
                    border: none;
                    transition: filter 0.3s ease;
                }

                .wpo-contact-map:hover iframe {
                    filter: contrast(1.1) saturate(1.1);
                }

                /* Animation Keyframes */
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Staggered Animation for Cards */
                .contact-card:nth-child(1) {
                    animation: fadeInUp 0.8s ease 0.1s both;
                }

                .contact-card:nth-child(2) {
                    animation: fadeInUp 0.8s ease 0.2s both;
                }

                .contact-card:nth-child(3) {
                    animation: fadeInUp 0.8s ease 0.3s both;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .section-padding {
                        padding: 60px 0;
                    }

                    .wpo-contact-title h2 {
                        font-size: 32px;
                    }

                    .wpo-contact-form-area {
                        padding: 30px 20px;
                    }

                    .contact-card {
                        padding: 30px 20px;
                        margin-bottom: 30px;
                    }
                }

                @media (max-width: 576px) {
                    .wpo-contact-title h2 {
                        font-size: 28px;
                    }

                    .office-info-text h2 {
                        font-size: 20px;
                    }

                    .office-info-text p {
                        font-size: 14px;
                    }
                }
            `}</style>
        </section>
    )
}

export default Contactpage;