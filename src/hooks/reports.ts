import { useQuery } from "@tanstack/react-query";
import { reportKeys } from "./keys";
import { getReports } from "@/services";

export const useReports = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: reportKeys.all,
    queryFn: () => getReports(),
  });
  return {
    reports: data || [],
    isFetchingReports: isLoading,
    refetchReports: refetch,
  };
};
