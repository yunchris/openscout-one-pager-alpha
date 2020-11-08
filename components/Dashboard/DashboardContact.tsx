import React from 'react';
import { OnePagerData } from "../../model/model";
import { Icon, Flex, SimpleGrid, Text, Skeleton } from '@chakra-ui/core';

type OnePagerContactProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const DashboardContact = ({
  onePagerData,
}: OnePagerContactProps) => {
  const contact = onePagerData.contact[0];
  const [buffer, setBuffer] = React.useState(null);

  // Wait for data to be loaded for dom
  React.useEffect(() => {
    dataLoaded();
  }, []);

  const dataLoaded = () => {
    setTimeout(() =>setBuffer(true), 1000);
  }

  const viewPort = () => {
    if (!buffer) return <LoadingSkeletons />
    else return (
      <>
        <SimpleGrid columns={2}  w="100%" mb="20px" mt="20px">
          <Flex align="center">
              <Icon name="email" size="24px" color="blue.500" mr="10px" ml="20px" />
              <SubHeading>Email:</SubHeading>
              <Text color="#545454" m="0">{contact.email}</Text>
          </Flex>
          <Flex align="center">
              <Icon name="phone" size="20px" color="blue.500" mr="10px" ml="20px" />
              <SubHeading>Phone:</SubHeading>
              <Text color="#545454" m="0">{contact.phoneNum}</Text>
          </Flex>
        </SimpleGrid>
        <Flex align="center" mb="20px">
          <Icon name="link" size="20px" color="blue.500" mr="10px" ml="20px"/>
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