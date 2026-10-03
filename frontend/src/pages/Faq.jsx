import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function Faq() {
  const id = React.useId();

  return (
    <div className="lg:w-[80%] p-5 mx-auto">
      <div className="w-full">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel1-content`}
            id={`${id}-panel1-header`}
          >
            <Typography component="span">What is Xwin?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Xwin is a digital investment platform designed to give users
              access to cryptocurrency and other investment opportunities
              through a simple and user-friendly experience.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              How do I create an account?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Click Sign Up, provide the required information, verify your
              account, and follow the instructions to complete your registration
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              How can I fund my Xwin account?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can fund your account using the available payment methods
              supported by Xwin. Available options may vary depending on your
              location.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              What cryptocurrencies can I invest in?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Xwin provides access to selected cryptocurrency assets and
              investment options. The available assets are displayed on your
              account dashboard.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              Is there a minimum investment amount?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The minimum investment amount depends on the investment option you
              choose. You can view the applicable minimum before confirming an
              investment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              How can I track my investments?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your investments, balances, transactions, and portfolio activity
              can be monitored directly from your Xwin dashboard.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              How do I withdraw my funds?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can request a withdrawal from your Xwin account by selecting
              the withdrawal option and following the required steps. Processing
              times may vary depending on the withdrawal method.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              Are my funds and personal information secure?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Xwin should use appropriate security measures to protect user
              accounts and information. We recommend enabling available security
              features such as strong passwords and two-factor authentication.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              Are cryptocurrency investments guaranteed?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No. Cryptocurrency and other investments can involve significant
              risk, and the value of assets can rise or fall. Users should
              understand the risks and consider their financial circumstances
              before investing.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">
              How can I contact Xwin support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can contact the Xwin support team through the available
              support channels on the platform. Our team can assist with
              account, deposits, withdrawals, and other platform-related
              questions.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
