import { useQuery } from "@tanstack/react-query";
import { reportKeys } from "./keys";
import { getDocuments } from "@/services";

export const useDocuments = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: reportKeys.all,
    queryFn: () => getDocuments(),
  });
  return {
    documents: data || [],
    isFetchingDocuments: isLoading,
    refetchDocuments: refetch,
  };
};
