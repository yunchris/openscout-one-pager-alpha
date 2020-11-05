import React from 'react';
import { Divider } from '@chakra-ui/core';

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

  const viewPort = () => {
    let id, timeStamp, embed;
    
    // Checks to see if there is a video link and returns null viewPort if not 
    if (onePagerData.pitchVideoLink) {
      id = onePagerData.pitchVideoLink.split('?v=')[1].split('&t=');
      // Opted to use iframe embed for speedy development & proof of concept:
      if (id.length === 1) embed = `https://youtube.com/embed/${id[0]}`;
      else {
      // Used the slice here to remove 's'. Embedded timestamp does not like the 's'
        timeStamp = id[1].slice(0, id[1].length-1)
        embed = `https://youtube.com/embed/${id[0]}?start=${timeStamp}`
      };
  
      return (
        <div>
          <Diveder50 />
          <ContentCard title='Pitch Video' isLoading={isLoading}>
            <iframe width="100%" height="350" src={embed}></iframe>
          </ContentCard>
        </div>
      )
    } else return null;
  }

  return (
    viewPort()
  );
};

const Diveder50 = () => <Divider width='50%' />;