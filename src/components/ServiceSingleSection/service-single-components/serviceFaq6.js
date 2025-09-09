import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const ServiceFAQ6 = (props) => {
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
                                    Why is HR compliance important for companies in Kerala?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    HR compliance ensures your company follows legal standards, avoids penalties, and builds a safe, ethical, and transparent workplace for employees.
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
                                    Does Befirst HR help with statutory filings like PF & ESI?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes, we provide complete support for PF, ESI, gratuity, wage regulation, maternity benefits, and labour compliance in Kerala.
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
                                    Can you help family businesses in Kerala with HR compliance?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Absolutely. We specialize in building structured HR systems for family-owned businesses, ensuring compliance while maintaining flexibility.
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
                                    Do you conduct HR audits for startups?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes. Our HR audits help startups identify risks early, set up compliant policies, and avoid future disputes.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceFAQ6;