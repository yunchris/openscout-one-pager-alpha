import React from "react";
import {
  Box,
  Heading,
  Text,
  Progress,
  Flex,
  Grid,
  CircularProgress,
  CircularProgressLabel,
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

  // Initially I used toLocaleString(), but forums indicate this regex
  // solution is more performant. Also toLocaleString was glitchy on Safari
  // during testing. Regex code from Stack Overflow:
  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  const formatFinanceNumber = (financeNumber: number) => {
    let formatted = `${financeNumber}`.replace(/\B(?=(\d{3})+\b)/g, ",");
    return `$${formatted}`;
  };

  return (
    <Box>
      <ContentCard title="Finances" isLoading={isLoading}>
        <Heading as="h1" size="lg" marginRight="10px">
          Funding Stage: {onePagerData.fundraisingStage}
        </Heading>
        <Box>
          <Text fontSize="sm" marginTop="5px">
            Purpose: {onePagerData.fundraisingDetails}
          </Text>
          <Flex justify="space-between">
            <ProgressText>
              Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
            </ProgressText>
            <ProgressText>
              {percentComplete}% of Goal:{" "}
              {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
            </ProgressText>
          </Flex>
          <Progress value={percentComplete} hasStripe isAnimated height="32px" />
        </Box>
      </ContentCard>

  {/* I created a secondary version (of funding visualization) to experiment and
  learn more about chakra, but prefer the simplicity of the first one */}
      {/* Version 2 */}
      <ContentCard title="Finances (Version 2)" isLoading={isLoading}>
        <Heading as="h1" size="lg" marginRight="10px">
          Funding Stage: {onePagerData.fundraisingStage}
        </Heading>
        <Grid templateColumns="40% 60%">
        <CircularProgress
          value={percentComplete}
          size="140px"
          thickness={0.4}
          alignSelf="center"
          justifySelf="center"
        >
          <CircularProgressLabel>{percentComplete}%</CircularProgressLabel>
        </CircularProgress>
        <Box>
          <Text fontSize="sm" marginTop="5px">
            Purpose: {onePagerData.fundraisingDetails}
          </Text>
          <SubHeading>
            Funds Raised: {formatFinanceNumber(fundsRaised)}
          </SubHeading>
          <SubHeading>
            Funding Goal: {formatFinanceNumber(fundsGoal)}
          </SubHeading>
        </Box>
      </Grid>
      </ContentCard>
    </Box>
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
