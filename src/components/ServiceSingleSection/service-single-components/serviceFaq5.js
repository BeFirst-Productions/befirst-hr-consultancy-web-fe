import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const ServiceFAQ5 = (props) => {
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
                  What recruitment services does Befirst HR provide in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We offer manpower services, staffing solutions, executive
                  search, bulk hiring, and HR outsourcing across Kerala.
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
                  How do manpower services in Kerala benefit businesses?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  They help organizations quickly access qualified candidates,
                  reduce hiring time, and improve workforce efficiency.
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
                  Do you offer staffing solutions for temporary and permanent
                  roles?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. Befirst HR provides staffing solutions for temporary,
                  permanent, and contract-based requirements.
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
                  Why choose HR outsourcing in Kerala with Befirst HR?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our HR outsourcing services reduce administrative workload and
                  ensure cost-effective recruitment solutions for businesses.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography>
                  How do I start using your recruitment assistance?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Simply call us or fill out our online form with your hiring
                  requirements, and our team will take it from there.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ5;
