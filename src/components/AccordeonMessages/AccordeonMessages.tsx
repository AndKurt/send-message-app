import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './AccordeonMessages.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getPostsAsync } from '../../redux/actions/postsActions';

export const AccordeonMessages = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.postsRedicer);
  const { name } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getPostsAsync(name));
  }, []);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordeonMessages}>
      <Typography component="h3" variant="h5" sx={{ textAlign: 'center', marginBottom: '5px' }}>
        {posts.length > 0 ? 'Received messages:' : 'No message to read'}
      </Typography>
      {posts.length > 0 &&
        posts.map((user) => {
          return (
            <Accordion
              key={user.id}
              expanded={expanded === user.id}
              onChange={handleChange(user.id)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography component="div" sx={{ width: '20%', flexShrink: 0 }}>
                  <Typography fontSize={12} sx={{ color: 'text.secondary' }}>
                    From:
                  </Typography>
                  {user.sender}
                </Typography>
                {/*<Typography sx={{ color: 'text.secondary', width: '33%' }}>Date</Typography>*/}
                <Typography component="div">
                  <Typography fontSize={12} sx={{ color: 'text.secondary' }}>
                    Title:
                  </Typography>
                  {user.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
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
