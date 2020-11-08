import { OnePagerData } from '../../model/model';

type OnePagerProfitsProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const DashboardProfits = ({
  onePagerData,
  isLoading,
}: OnePagerProfitsProps) => {

  return (
    <div>Data visualization of yearly profits</div>
  );
};