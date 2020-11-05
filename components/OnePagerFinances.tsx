import React from "react";
import {
  Heading,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Progress,
} from "@chakra-ui/core";

import { OnePagerData } from "../model/model";
import { ContentCard } from "./ContentCard";

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {
  const fundsRaised = onePagerData.fundsRaisedInStage,
    fundsGoal = onePagerData.fundraisingStageGoal,
    percentComplete = Math.floor((fundsRaised / fundsGoal) * 100);

  // Format a number to include a dollar sign. This function
  // will be improved as part of task 2.

  // Initially I had used toLocaleString(), but this regex solution seems more
  // performant. Also toLocaleString was glitchy on Safari during testing. 
  // Regex code from Stack Overflow:
  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  const formatFinanceNumber = (financeNumber: number) => {
    let formatted = `${financeNumber}`.replace(/\B(?=(\d{3})+\b)/g, ",");
    return `$${formatted}`;
  };

  const progressBar = () => {
    return (
      <div>
        <Text fontSize="sm" marginTop="5px">
          Purpose: {onePagerData.fundraisingDetails}
        </Text>
        <div className="funds-progress">
          <ProgressText>
            Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
          </ProgressText>
          <ProgressText>
            {percentComplete}% of Goal:{" "}
            {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
          </ProgressText>
        </div>
        <Progress value={percentComplete} hasStripe isAnimated height="32px" />
      </div>
    );
  };

  const pieChart = () => {
    return (
      <div className="pie-chart">
        <CircularProgress value={percentComplete} size="120px" thickness={0.4}>
          <CircularProgressLabel>{percentComplete}%</CircularProgressLabel>
        </CircularProgress>
        <div className="finance-details">
          <Text fontSize="sm" marginTop="5px">
            Purpose: {onePagerData.fundraisingDetails}
          </Text>
          <SubHeading>
            Funds Raised: {formatFinanceNumber(fundsRaised)}
          </SubHeading>
          <SubHeading>
            Funding Goal: {formatFinanceNumber(fundsGoal)}
          </SubHeading>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ContentCard title="Finances" isLoading={isLoading}>
        <Heading as="h1" size="lg" marginRight="10px">
          Funding Stage: {onePagerData.fundraisingStage}
        </Heading>
        {progressBar()}
      </ContentCard>

      {/* Version 2 */}
      <ContentCard title="Finances Version 2" isLoading={isLoading}>
        <Heading as="h1" size="lg" marginRight="10px">
          Funding Stage: {onePagerData.fundraisingStage}
        </Heading>
        {pieChart()}
      </ContentCard>
    </div>
  );
};

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as="h2" size="md" marginRight="10px">
    {children}
  </Heading>
);

const ProgressText = ({ children }) => (
  <Heading as="h3" size="sm" marginRight="10px">
    {children}
  </Heading>
);
