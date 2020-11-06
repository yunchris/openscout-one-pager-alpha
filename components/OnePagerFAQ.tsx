import {
  Box,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerFAQProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerFAQ = ({
  onePagerData,
  isLoading,
}: OnePagerFAQProps) => {
  return (
    <ContentCard title='F.A.Q.' isLoading={isLoading}>
      <Accordion allowToggle my="10px">
        {onePagerData.faq.map((qa, idx) => {
          const [question, answer] = qa;
          return (
            <AccordionItem key={idx}>
              <AccordionHeader  p={4} fontSize={16}>
                <Box flex="1" textAlign="left"  pr={10}>
                  {question}
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={3}>
                {answer}
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </ContentCard>
  );
};