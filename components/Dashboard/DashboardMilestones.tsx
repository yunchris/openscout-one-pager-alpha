import { OnePagerData } from "../../model/model";

type OnePagerMilestonesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const DashboardMilestones = ({
  onePagerData,
  isLoading,
}: OnePagerMilestonesProps) => {

  return (
    <div>Milestones: past, present and future goals</div>
  );
};
