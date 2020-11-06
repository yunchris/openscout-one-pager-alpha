import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

import { OnePagerData } from "../../model/model";
import { ContentCard } from "../ContentCard";
import { DashboardProfits } from "./DashboardProfits";
import { DashboardContact } from "./DashboardContact";
import { DashboardMilestones } from "./DashboardMilestones";
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
    let headers = ["Milestones","Gross Profits","Stock","Contact Info"];
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
          <TabPanel>
            <DashboardMilestones
              onePagerData={onePagerData}
              isLoading={isLoading}
            />
          </TabPanel>
          <TabPanel>
            <DashboardProfits
              onePagerData={onePagerData}
              isLoading={isLoading}
            />
          </TabPanel>
          <TabPanel>
            <DashboardStock
              onePagerData={onePagerData}
              isLoading={isLoading}
            />
          </TabPanel>
          <TabPanel>
            <DashboardContact
              onePagerData={onePagerData}
              isLoading={isLoading}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ContentCard>
  );
};
