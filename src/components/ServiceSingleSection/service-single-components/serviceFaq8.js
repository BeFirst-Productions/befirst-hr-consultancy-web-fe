import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const ServiceFAQ8 = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="wpo-benefits-section">
            <h2>FAQs</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>
                                    What are HR Policy & Procedure Services in Kerala?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <strong> HR Policy & Procedure Services in Kerala </strong> involve creating a comprehensive set of rules and guidelines for hiring,
                                    promotions, leave, termination, compensation, performance appraisal, and workplace conduct. These services ensure
                                    organizations comply with labor laws, maintain smooth operations, and provide a structured framework for employees, managers, and contractors.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>
                                    Why are HR policies important for companies in Kerala?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    HR policies are crucial for companies in Kerala as they define employee rights, responsibilities, and workplace standards.
                                    They help organizations maintain compliance with Kerala’s labor regulations, improve workforce planning, enhance employee engagement,
                                    and provide clarity on compensation, benefits, leave, and termination procedures.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>
                                    Why should businesses in Kerala choose Befirst for HR policy development?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Befirst offers expert HR policy consultancy in Kerala with 40+ years of experience. Our services include customized
                                    policies aligned with Kerala labor laws, digital-first documentation, continuous support for updates, and policies designed
                                    after detailed consultations with your management team. We ensure your HR framework is efficient, compliant, and employee-friendly.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>
                                    What HR Policy & Procedure services does Befirst offer in Kerala?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Befirst offers comprehensive HR Policy & Procedure services in Kerala, including frameworks for recruitment,
                                    promotions, leave, termination, compensation, and benefits, along with workplace codes of conduct, safety measures,
                                    employee welfare policies, performance appraisals, exit formalities, and policy communication with awareness training to
                                    ensure compliance and smooth HR operations.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceFAQ8;