import React from 'react';
import Head from 'next/head';
import { Box, Heading, Divider } from '@chakra-ui/core';

import { Header } from './Header';
import { getAllPublicOnePagerData } from '../data/dataService';
import { OnePagerPublicData } from '../model/model';
import { Paywall } from './Paywall/Paywall';

/** Renders the home component. */
export const Home = () => {
  const [onePagers, setOnePagers]: [OnePagerPublicData[], any] = React.useState(
    []
  );

  // React hook to load data on first render
  React.useEffect(() => {
    getAllPublicOnePagerData().then((result) => {
      setOnePagers(result);
    });
  }, []);

  return (
    <Box>
      <Head>
        <title>One Pager Alpha</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <Box d='flex' justifyContent='center'>
        <Box w='xl'>
          <Heading as='h1' size='xl'>
            One Pager Alpha: Assessment
          </Heading>

          <Heading as='h2' size='md'>
            View active OnePagers
          </Heading>

          <Divider />

          <Paywall onePagers={onePagers} />
        </Box>
      </Box>
    </Box>
  );
};