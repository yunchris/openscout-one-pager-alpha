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
    <div>D3 data visualization of Stock Performance</div>
  );
};
