import React from 'react';
import { OnePagerData } from "../../model/model";
import { Icon, Flex, SimpleGrid, Text, Skeleton } from '@chakra-ui/core';

type OnePagerContactProps = {
  onePagerData: OnePagerData;
};

export const DashboardContact = ({
  onePagerData,
}: OnePagerContactProps) => {
  const contact = onePagerData.contact[0];
  const [dataLoaded, setDataLoaded] = React.useState(false);

  // Wait for data to be loaded for dom
  React.useEffect(() => {
    setTimeout(() =>setDataLoaded(true), 1000);
  }, []);

  const viewPort = () => {
    if (!dataLoaded) return <LoadingSkeletons />
    else return (
      <>
        <Flex justify="space-between" m="20px auto">
          <Flex align="center">
              <Icon name="email" size="24px" color="blue.500" mr="10px" ml="20px" />
              <Text color="#545454" m="0">{contact.email}</Text>
          </Flex>
          <Flex align="center">
              <Icon name="phone" size="20px" color="blue.500" mr="10px" ml="20px" />
              <Text color="#545454" m="0">{contact.phoneNum}</Text>
          </Flex>
          <Flex align="center">
            <Icon name="link" size="20px" color="blue.500" mr="10px" ml="20px"/>
            <a href={contact.websiteURL} target="_blank"><SubHeading>Website</SubHeading></a>
          </Flex>
        </Flex>
        <Flex align="center" mb="20px">
          <Icon name="at-sign" size="20px" color="blue.500" mr="10px" ml="20px"/>
          <SubHeading>Address:</SubHeading>
          <Text color="#545454" m="0">{contact.address}</Text>
        </Flex>
  
        <iframe
          src={contact.embedSource}
          width="100%"
          height="450"
          style={{ border: 0 }}
          aria-hidden="false"
        ></iframe>
      </>
    )
  }
  return viewPort();
};

const SubHeading = ({ children }) => (
  <Text fontSize="18px" fontWeight="600" m="0px 10px 0px 0px" color="blue.500">
    {children}
  </Text>
);

/** Renders loading skeletons. */
const LoadingSkeletons = () => {
  return (
    <>
      <Skeleton h='15px' marginBottom='10px'></Skeleton>
      <Skeleton h='15px' marginBottom='10px'></Skeleton>
      <Skeleton h='20px'></Skeleton>{' '}
    </>
  );
};