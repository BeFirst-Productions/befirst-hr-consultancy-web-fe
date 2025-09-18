import React from 'react';
import { CheckCircle } from 'lucide-react';

const Solutions8 = () => {
    return (
        <section className="solutions-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-3 text-dark">Our HR Policy & Procedure Services</h2>

                    </div>
                </div>

                <div className="row g-4">
                    {/* {points.map((point, index) => ( */}
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />

                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Policy Framework Development</h5>
                                    <p className="text-muted mb-0">
                                        Custom-designed <strong> HR policies in Kerala  </strong>covering recruitment, leave, promotions, compensation, and termination.
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
                                    <h5 className="fw-bold mb-2 text-dark">Code of Conduct & Workplace Guidelines</h5>
                                    <p className="text-muted mb-0">
                                        Defined rights, responsibilities, and professional standards for employees and management.
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
                                    <h5 className="fw-bold mb-2 text-dark">Leave & Attendance Policies</h5>
                                    <p className="text-muted mb-0">
                                        Structured leave rules and attendance protocols for better workforce planning.
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
                                    <h5 className="fw-bold mb-2 text-dark">Compensation & Benefits Framework</h5>
                                    <p className="text-muted mb-0">
                                        Clear guidelines on salary structure, allowances, incentives, and benefits.
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
                                    <h5 className="fw-bold mb-2 text-dark">Performance & Appraisal Procedures</h5>
                                    <p className="text-muted mb-0">
                                        Systematic evaluation processes to ensure fair and transparent performance reviews.
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
                                    <h5 className="fw-bold mb-2 text-dark">Workplace Safety & Employee Welfare</h5>
                                    <p className="text-muted mb-0">
                                        Policies to ensure safe, ethical, and inclusive working conditions.
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
                                    <h5 className="fw-bold mb-2 text-dark">Exit & Termination Guidelines</h5>
                                    <p className="text-muted mb-0">
                                        Compliance-focused procedures for resignation, retirement, and termination.
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
                                    <h5 className="fw-bold mb-2 text-dark">Policy Communication & Awareness</h5>
                                    <p className="text-muted mb-0">
                                        Training and orientation sessions to ensure employees, managers, and contractors understand company rules and amendments.
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

export default Solutions8;
