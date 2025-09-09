import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const ServiceFAQ2 = (props) => {
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
                                    Why is HR Planning important for startups and SMEs in Kerala?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    HR Planning ensures businesses have the right workforce, policies, and performance systems in place. For startups and SMEs in Kerala, this helps reduce costs, avoid compliance risks, and scale smoothly.
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
                                    Do you provide customized HR policies for Kerala businesses?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes. We create custom HR policies and frameworks that comply with Kerala’s labour laws while maintaining international HR standards.
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
                                    How does succession planning help my business?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Succession planning identifies high-potential employees and trains them for leadership roles, ensuring your company never faces a talent gap during growth or transition.
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
                                    Can Befirst HR help automate HR processes?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Absolutely. We design HR automation systems that streamline payroll, attendance, and appraisal processes – saving time and reducing human error.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceFAQ2;