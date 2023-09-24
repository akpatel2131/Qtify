import styles from "./FAQs.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () =>{

    return (
        <div className={styles.FAQsContainer}>
            <div className={styles.FAQsHeading}>FAQs</div>
            <div className={styles.accordionContainer}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography> Is QTify free to use?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, It's 100% free to use and has 0% ads!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Can I download and listen the songs offline? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, you can download it and listen it offiline!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <Accordion disabled>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
            >
                <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
            </Accordion> */}
            </div>
      </div>
    )
}

export default FAQs;