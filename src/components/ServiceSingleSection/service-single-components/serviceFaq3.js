import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const ServiceFAQ3 = (props) => {
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
                                    Why is Learning & Development important for businesses in Kerala?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    L&D helps employees and leaders develop new skills, adapt to changing markets, and stay competitive. It improves retention, productivity, and overall company growth.
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
                                    Do you offer leadership training for CEOs and managers?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes. Our executive and leadership training programs are designed for CEOs, C-suite employees, and senior managers in Kerala to enhance decision-making and leadership effectiveness.
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
                                    Can you customize training programs for startups and SMEs?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Absolutely. We design tailored training solutions based on the specific needs, size, and challenges of startups and SMEs in Kerala.
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
                                    Do you provide both in-person and online training?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes, we offer on-site workshops in Kozhikode, Kochi, Trivandrum and also deliver online training sessions for convenience and wider reach.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>
                                    Are your consultancy services available online for Kerala clients?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes, we offer both in-person and virtual consultancy sessions, making it convenient for clients across Kerala to access our expertise.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceFAQ3;