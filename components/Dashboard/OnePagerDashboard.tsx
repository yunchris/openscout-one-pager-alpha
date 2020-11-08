import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

import { OnePagerData } from "../../model/model";
import { ContentCard } from "../ContentCard";
import { DashboardProfits } from "./DashboardProfits";
import { DashboardContact } from "./DashboardContact";
import { DashboardStock } from "./DashboardStock";

type OnePagerDashboardProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerDashboard = ({
  onePagerData,
  isLoading,
}: OnePagerDashboardProps) => {
  const tabTitles = () => {
    let headers = ["Contact Info","Gross Profits","Stock Performance"];
    return headers.map((tabTitle) => (
      <Tab
        _selected={{ color: "white", bg: "blue.500" }}
        _focus={{ boxShadow: "none" }}
        key={tabTitle}
      >
        {tabTitle}
      </Tab>
    ));
  };

  return (
    <ContentCard title="Dashboard" isLoading={isLoading}>
      <Tabs variant="unstyled" align="center" isFitted>
        <TabList mb="1em">{tabTitles()}</TabList>
        <TabPanels>
          <TabPanel><DashboardContact onePagerData={onePagerData}/></TabPanel>
          <TabPanel><DashboardProfits onePagerData={onePagerData}/></TabPanel>
          <TabPanel><DashboardStock onePagerData={onePagerData}/></TabPanel>
        </TabPanels>
      </Tabs>
    </ContentCard>
  );
};
