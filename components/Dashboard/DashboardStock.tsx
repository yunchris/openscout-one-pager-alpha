import { OnePagerData } from "../../model/model";

type OnePagerStockProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const DashboardStock = ({
  onePagerData,
  isLoading,
}: OnePagerStockProps) => {

  return (
    <div>Data visualization of Stock Performance</div>
  );
};
