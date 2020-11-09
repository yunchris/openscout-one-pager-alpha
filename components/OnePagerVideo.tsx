import { Divider } from "@chakra-ui/core";

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

  // Renders if there is a video link and returns null if not
  if (onePagerData.pitchVideoLink) {
    id = onePagerData.pitchVideoLink.split("?v=")[1].split("&t=");
    
    if (id.length === 1) embed = `https://youtube.com/embed/${id[0]}`;
    else {
      timeStamp = id[1].slice(0, id[1].length - 1);
      embed = `https://youtube.com/embed/${id[0]}?start=${timeStamp}`;
    }

    return (
      <>
        <Diveder50 />
        <ContentCard title="Pitch Video" isLoading={isLoading}>
          <iframe src={embed} width="100%" height="350px"/>
        </ContentCard>
      </>
    );
  } else return null;
};

const Diveder50 = () => <Divider width="50%" />;
