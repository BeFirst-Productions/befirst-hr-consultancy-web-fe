import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChoose10
    = () => {
        const reasons = [
            "40+ years of experience in developing employee capabilities for large-scale organizations and SMEs.",
            " End-to-end training & development programs for startups, corporates, and entrepreneurs.",
            "Digital-first approach to learning management systems for efficiency, engagement, and measurable results.",
            "Local expertise in Calicut, Kerala, to align training with regional workforce needs, labour regulations, and compliance frameworks.",
        ];

        return (
            <section className="why-choose-section py-5 bg-light">
                <div className="container">
                    {/* Section Header */}
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="display-6 fw-bold mb-3 text-dark">
                                Why Choose Befirst for Training & Development Services in Calicut, Kerala?
                            </h2>
                            <p>
                                Partnering with us ensures you gain not just training support, but a 
                                strategic approach to enhance employee skills, knowledge, and organizational growth.
                            </p>
                        </div>
                    </div>

                    {/* Professional List */}
                    <div className="why-list mx-auto" style={{ maxWidth: '700px' }}>
                        {reasons.map((reason, index) => (
                            <div key={index} className="d-flex align-items-start mb-4">
                                <div className="why-icon me-3">
                                    <CheckCircle size={20} className="text-success" />
                                </div>
                                <div>
                                    <p className="text-dark mb-0 ">{reason}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                .why-list .why-icon {
                fontSize: 20px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: rgba(13, 202, 240, 0.1);
                    flex-shrink: 0;
                }
                
                .why-list .d-flex {
                    padding: 1rem;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }
                
                .why-list .d-flex:hover {
                    background: rgba(255, 255, 255, 0.8);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
                
                .why-list p {
                    line-height: 1.6;
                    color: #495057;
                }
            `}</style>
            </section>
        );
    };

export default WhyChoose10
    ;