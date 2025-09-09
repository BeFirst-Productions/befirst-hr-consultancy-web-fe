import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChoose3 = () => {
    const reasons = [
        " Customized training programs tailored for Kerala’s business ecosystem.",
        "Expertise in both employee upskilling and executive leadership training.",
        "Proven methods to boost productivity, retention, and employee satisfaction.",
        "Strong support for entrepreneurs, managers, CEOs, and startups."
    ];

    return (
        <section className="why-choose-section py-5 bg-light">
            <div className="container">
                {/* Section Header */}
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-3 text-dark">
                         Why Choose Befirst HR for Learning & Development?
                        </h2>
                        {/* <p className="lead text-muted">
                            Partnering with us ensures you gain not just HR support, but a strategic edge in driving business growth.
                        </p> */}
                    </div>
                </div>

                {/* Professional List */}
                <div className="why-list mx-auto" style={{maxWidth: '700px'}}>
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

export default WhyChoose3;