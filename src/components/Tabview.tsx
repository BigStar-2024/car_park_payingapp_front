import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Parking from "./Parking";
import Paying from "./Paying";
import ParkingIcon from "./assets/ParkingIcon.png"; // Update the path to where your SVG is located
import PaymentIcon from "./assets/PaymentIcon.png"; // Update the path to where your SVG is located

const  LabTabs : React.FC = () => {
  const [value, setValue] = React.useState("parking");
  const [payingValue, setPayingValue] = React.useState("parking");


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const changeStateValue = (data: string) => {
    setValue(data);
  }

  const displayPayingTab = (data: boolean) => {
    if (data != true) setPayingValue("parking");
    else setPayingValue("paying");
  }
  return (
    <Box sx={{ width: "720px", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "#FFAD92" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor="secondary" // This changes the indicator color
            textColor="secondary" // This changes the text color
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#FA551D", // Changes the indicator color to #FA551D
              },
              "& .MuiTab-root": {
                color: "grey", // Changes the default tab text color
                "&.Mui-selected": {
                  color: "#FA551D", // Changes the selected tab text color to #FA551D
                },
                "&:hover": {
                  color: "#FA551D", // Optional: Changes the hover color to #FA551D
                },
              },
            }}
          >
            <Tab
              value="parking"
              sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
              icon={<img src={ParkingIcon} alt="Parking" style={{ width: "28px", height: "28px", marginRight: "15px", marginTop: "5px"}} />}
              label="Parking"
            />
            <Tab
              value="paying"
              sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
              icon={<img src={PaymentIcon} alt="Payment" style={{ width: "28px", height: "28px", marginRight: "15px", marginTop: "5px"}} />}
              label="Payment"
            />
          </TabList>
        </Box>
        <TabPanel value="parking">
          <Parking sendDataToParent={changeStateValue} displayPayingTab={displayPayingTab}/>
        </TabPanel>
        <TabPanel value={payingValue}>
          <Paying />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default LabTabs;
