import { OnePagerData } from "../../model/model";

type OnePagerContactProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const DashboardContact = ({
  onePagerData,
  isLoading,
}: OnePagerContactProps) => {

  return (
    <div>Contact Info, google map, email, phone #, etc</div>
  );
};
