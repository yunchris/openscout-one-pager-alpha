import { OnePagerData } from "../../model/model";

type OnePagerProfitsProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const DashboardProfits = ({
  onePagerData,
  isLoading,
}: OnePagerProfitsProps) => {

  return (
    <div>D3 data visualization of gross profits year over year</div>
  );
};
