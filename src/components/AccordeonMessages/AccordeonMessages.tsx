import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './AccordeonMessages.module.scss';
import { MOCK_DATA } from '../mock';

export const AccordeonMessages = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordeonMessages}>
      <Typography component="h3" variant="h5" sx={{ textAlign: 'center', marginBottom: '5px' }}>
        Received messages:
      </Typography>
      {MOCK_DATA &&
        MOCK_DATA.map((user) => {
          return (
            <Accordion
              key={user._id}
              expanded={expanded === user._id}
              onChange={handleChange(user._id)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ width: '20%', flexShrink: 0 }}>
                  <Typography fontSize={12} sx={{ color: 'text.secondary' }}>
                    From:
                  </Typography>
                  {user.sender}
                </Typography>
                {/*<Typography sx={{ color: 'text.secondary', width: '33%' }}>Date</Typography>*/}
                <Typography>
                  <Typography fontSize={12} sx={{ color: 'text.secondary' }}>
                    Title:
                  </Typography>
                  {user.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Typography fontSize={12} sx={{ color: 'text.secondary' }}>
                    Message:
                  </Typography>
                  {user.message}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
};
