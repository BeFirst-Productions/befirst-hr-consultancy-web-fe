import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
                  What are Talent Acquisition Services in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  They are specialized recruitment services designed to attract,
                  evaluate, and hire skilled professionals for businesses across
                  Kerala.
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
                  Do you provide recruitment services in Kozhikode, Kochi, and
                  Trivandrum?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. Befirst HR offers recruitment and onboarding services in
                  Kozhikode, Kochi, Trivandrum, and across Kerala.
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
                  How do onboarding solutions in Kerala help businesses?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Onboarding solutions ensure that new hires settle in smoothly,
                  understand company policies, and become productive quickly.
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
                  Why choose Befirst HR for Talent Acquisition Services?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We combine decades of HR consultancy experience with modern
                  recruitment tools to deliver the best talent and effective
                  onboarding.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ7;
