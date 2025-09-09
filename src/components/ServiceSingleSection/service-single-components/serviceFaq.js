import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const ServiceFAQ = (props) => {
    const [expanded, setExpanded] = React.useState(false);

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
                                <Typography>What are HR operations and why are they important?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
HR operations cover daily HR activities like payroll inputs, attendance, employee data, and compliance. Smooth HR operations help businesses save time, avoid errors, and maintain employee trust.                            
  </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>Can you help SMEs in Kerala digitize HR processes?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                  Yes. We provide HRIS setup and digital HR solutions that make HR management faster, more accurate, and cost-effective for SMEs and startups.      
                                   </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>Do you provide support for employee exits and offboarding?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                   Absolutely. We ensure exit formalities and offboarding are handled smoothly, with full compliance to Kerala labor laws.                              
                                    </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>Can HR operations be customized for startups and family businesses?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
Yes. Our services are fully customizable for startups, SMEs, and large enterprises in Kerala.                          
  </Typography>
                            </AccordionDetails>
                        </Accordion>
                        {/* <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>Do you provide ongoing HR support after setup?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes, we offer both one-time setup services and ongoing HR management support packages to ensure your systems evolve with your business.
                                </Typography>
                            </AccordionDetails>
                        </Accordion> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceFAQ;