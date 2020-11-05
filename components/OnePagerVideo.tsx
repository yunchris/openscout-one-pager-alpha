import React from 'react';
// import { Heading } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerVideoProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerVideo = ({
  onePagerData,
  isLoading,
}: OnePagerVideoProps) => {

  // Opted to use iframe embed for speedy development & proof of concept:
  const id = onePagerData.pitchVideoLink.split('?v=')[1].split("&t=");
  let timeStamp, embed;
  if (id.length === 1) embed = `https://youtube.com/embed/${id[0]}`;
  else {
  // Used the slice here to remove 's'. Embedded timestamp does not like the 's'
    timeStamp = id[1].slice(0, id[1].length-1)
    embed = `https://youtube.com/embed/${id[0]}?start=${timeStamp}`
  }

  return (
    <ContentCard title='Pitch Video' isLoading={isLoading}>
      {/* <Heading as='h2' size='md' marginRight='10px'>
        <a href={onePagerData.pitchVideoLink} target='_blank'>
          Link to Pitch Video 
        </a>
      </Heading> */}
      <iframe width="100%" height="350" src={embed}></iframe>
    </ContentCard>
  );
};
