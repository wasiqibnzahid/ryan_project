import { useQuery } from "@tanstack/react-query";
import { programKeys } from "./keys";
import { getProgramList } from "@/services";

export const usePrograms = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: programKeys.all,
    queryFn: () => getProgramList(),
  });
  return {
    programs: data || [],
    isFetchingPrograms: isLoading,
    refetchPrograms: refetch,
  };
};
