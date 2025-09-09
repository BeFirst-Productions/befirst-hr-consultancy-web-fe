import React from 'react';
import { CheckCircle } from 'lucide-react';

const Solutions4 = () => {
    return (
        <section className="solutions-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-3 text-dark">Our Payroll & Compensation Services</h2>
                        {/* <p className="lead text-muted">
We offer specialized consultancy services to ensure your business runs at its full potential:                            
</p> */}
                    </div>
                </div>

                <div className="row g-4">
                    {/* {points.map((point, index) => ( */}
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />

                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Salary Processing & Bank Transfers</h5>
                                    <p className="text-muted mb-0">
                                        Timely and accurate salary disbursements with complete compliance.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Overtime & Leave Reconciliation</h5>
                                    <p className="text-muted mb-0">
                                        Automated tracking and adjustments to ensure fair compensation.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Benefits, Allowances & Incentives</h5>
                                    <p className="text-muted mb-0">
                                        Structured management of perks and performance-linked incentives.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Increment & Appraisal Implementation</h5>
                                    <p className="text-muted mb-0">
                                        Smooth execution of salary hikes and performance-related increments.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Employee Loans & Settlements</h5>
                                    <p className="text-muted mb-0">
                                        Hassle-free handling of employee loans, deductions, and repayments.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Gratuity & Final Settlement (as per law)</h5>
                                    <p className="text-muted mb-0">
                                        Complete and compliant final settlements aligned with Kerala’s labour laws.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .solutions-section {
                    background-color: #fafbfc;
                }
                .solution-card {
                    transition: all 0.3s ease;
                    background-color: #ffffff;
                }
                .solution-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.08) !important;
                }
            `}</style>
        </section>
    );
};

export default Solutions4;
