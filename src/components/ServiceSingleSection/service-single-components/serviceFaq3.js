import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
                  What are Learning & Development (L&D) Services in Kerala?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  They are structured employee training and development programs
                  that improve skills, leadership abilities, and overall
                  workforce efficiency.
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
                  Do you provide Learning & Development (L&D) Services in
                  Calicut and other cities?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. Befirst HR offers L&D services in Calicut, Kochi,
                  Trivandrum, and across Kerala to meet the training needs of
                  diverse businesses.
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
                  How does leadership training in Kerala benefit organizations?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Leadership training in Kerala helps managers and executives
                  build stronger teams, make better decisions, and drive
                  business growth.
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
                  Why choose Befirst HR for employee training and development?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We provide tailored training solutions backed by decades of HR
                  consultancy experience, ensuring impactful results for
                  businesses of all sizes.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
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
                        </Accordion> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ3;
