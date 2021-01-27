import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Sports from './SportsComponent';
import Cultural from './CulturalComponent';
import Technical from './TechnicalComponent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Events() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="bodyBg" className="x">
        <Tabs value={value} onChange={handleChange} centered className="appbar">
          <Tab label="Technical" />
          <Tab label="Sports & Games"/>
          <Tab label="Cultural"/>
        </Tabs>
      <TabPanel value={value} index={0}>
        <Technical/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sports/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Cultural/>
      </TabPanel>
    </div>
  );
}