import * as React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
import YourCard from "../YourCard";
import AllCards from "../AllCards";
import { useDispatch } from "react-redux";
import { cardDataList } from "../../../../action/cardData";

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
        <Box>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NavTabs() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    dispatch(cardDataList());
  }, [dispatch]);

  const { cardData } = useSelector((state) => state.cardData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="your" {...a11yProps(0)} />
          <Tab label="All" {...a11yProps(1)} />
          <Tab label="Blocked" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <YourCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AllCards data={cardData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
