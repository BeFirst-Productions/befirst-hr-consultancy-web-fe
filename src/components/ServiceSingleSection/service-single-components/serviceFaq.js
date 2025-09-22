import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>
                  What are HR Operations & Administration Services in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  HR Operations & Administration Services in Kerala cover
                  end-to-end employee management, including HRIS, payroll
                  inputs, leave management, compliance, and documentation to
                  ensure smooth business operations.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography>
                  Why should businesses in Kozhikode, Kochi, and Trivandrum
                  choose Befirst HR for HR services?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Befirst HR provides local expertise in Kerala’s HR and
                  compliance frameworks, offering customized solutions for SMEs,
                  startups, and corporates in Kozhikode, Kochi, and Trivandrum.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography>
                  How do HR administration services in Kerala help improve
                  efficiency?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  By digitizing employee data, streamlining payroll, and
                  automating documentation, HR administration services in Kerala
                  reduce manual errors, save time, and improve compliance
                  accuracy.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography>
                  Can SMEs and startups benefit from HR services in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. Our HR services in Kerala are designed to support SMEs
                  and startups with scalable HR operations, ensuring
                  cost-effectiveness while meeting compliance requirements.
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
  );
};

export default ServiceFAQ;
