import { Box, AspectRatioBox, Divider } from "@chakra-ui/core";

import { OnePagerData } from "../model/model";
import { ContentCard } from "./ContentCard";

type OnePagerVideoProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerVideo = ({
  onePagerData,
  isLoading,
}: OnePagerVideoProps) => {
  let id, timeStamp, embed;
  // Checks to see if there is a video link and returns null viewPort if not
  if (onePagerData.pitchVideoLink) {
    id = onePagerData.pitchVideoLink.split("?v=")[1].split("&t=");
    
    if (id.length === 1) embed = `https://youtube.com/embed/${id[0]}`;
    else {
      timeStamp = id[1].slice(0, id[1].length - 1);
      embed = `https://youtube.com/embed/${id[0]}?start=${timeStamp}`;
    }

    return (
      <Box>
        <Diveder50 />
        <ContentCard title="Pitch Video" isLoading={isLoading}>
          <AspectRatioBox maxW="100%" ratio={16/9} >
            <Box as="iframe" title="pitch" src={embed} allowFullScreen />
          </AspectRatioBox>
        </ContentCard>
      </Box>
    );
  } else return null;
};

const Diveder50 = () => <Divider width="50%" />;
