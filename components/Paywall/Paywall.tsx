import Cookies from 'js-cookie';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/core';

import { PaywallModal } from './PaywallModal';
import { OnePagerPublicData } from '../../model/model';

const paid = Cookies.get('paid'),
      viewed1 = Cookies.get('viewed1'),
      viewed2 = Cookies.get('viewed2');
      
// Renders links & directs dependent on pay status & One Pagers viewed
export const Paywall = ({ onePagers }) => {
  // Looks up cookies to see if paid. If paid or views not used up, allows all
  // links to OnePagers. Otherwise, selectively shows paywall or OnePager links
  if (paid || !viewed1 || !viewed2) {
    return (
      <>
        {onePagers.map((onePagerData: OnePagerPublicData) => (
          <Box key={onePagerData.companyName} marginBottom='10px'>
              <Link href='/[onePagerSlug]' as={`/${onePagerData.url}`}>
                <a onClick={setViewed}>{onePagerData.companyName}</a>
              </Link>
            <Text margin='0'>{onePagerData.briefDescription}</Text>
          </Box>
        ))}
      </>
    )
  } else return <PaywallModal onePagers={onePagers} />
  
}

const setViewed = (e) => {
  if (!viewed1) {
    Cookies.set('viewed1', e.target.innerText)
  } else if (!viewed2) {
    Cookies.set('viewed2', e.target.innerText)
  }
}