import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
                  What are HR Planning & Organization Services in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  These services include manpower planning, organizational
                  design, and HR policy development to ensure businesses have
                  the right workforce structure for success.
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
                  How does manpower planning in Kerala help businesses?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Manpower planning in Kerala helps allocate resources
                  effectively, reduce hiring costs, and improve workforce
                  efficiency.
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
                  Can startups benefit from HR management services in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. Our HR management services in Kerala are tailored to
                  support startups with scalable workforce planning and
                  efficient organizational structures.
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
                  Why choose Befirst HR for HR Planning services in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  With decades of HR expertise and local compliance knowledge,
                  Befirst HR ensures customized solutions that align people,
                  processes, and business goals.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ2;
