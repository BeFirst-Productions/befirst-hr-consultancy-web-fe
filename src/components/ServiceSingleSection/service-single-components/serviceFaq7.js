import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const ServiceFAQ7 = (props) => {
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
                                    Why should Kerala businesses outsource talent acquisition?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Outsourcing saves time, ensures better candidate quality, and allows businesses to focus on growth while experts handle hiring.
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
                                    Do you provide recruitment support for startups and SMEs?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes. We offer customized recruitment services designed to meet the unique hiring needs of startups, SMEs, and family-run businesses in Kerala.
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
                                    How do you ensure smooth onboarding for new hires?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We design structured onboarding frameworks that align new employees with company culture, policies, and job roles, ensuring a faster ramp-up.
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
                                    Do you also help with employer branding?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Absolutely. We help businesses enhance their employer brand, making them more attractive to top talent in Kerala.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceFAQ7;