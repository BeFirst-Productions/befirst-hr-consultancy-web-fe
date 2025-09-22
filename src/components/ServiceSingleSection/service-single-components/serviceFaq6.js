import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
                  What are HR compliance services in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  HR compliance services ensure that businesses follow statutory
                  laws, labour regulations, and HR policies to avoid risks and
                  penalties.
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
                  How do statutory compliance services benefit businesses?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  They reduce legal risks, improve employee trust, and ensure
                  smooth business operations by meeting government regulations.
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
                  Do you offer HR audit services in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. We provide detailed HR audit services to identify
                  compliance gaps and recommend corrective actions.
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
                  Why choose Befirst HR for labour law compliance in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  With decades of expertise and local knowledge, Befirst HR
                  ensures organizations remain fully compliant with Kerala’s
                  labour laws.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ6;
