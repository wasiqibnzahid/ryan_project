import { useQuery } from "@tanstack/react-query";
import { featuredItemKeys } from "./keys";
import { getFeaturedItemsList } from "@/services";

export const useFeaturedItems = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: featuredItemKeys.all,
    queryFn: () => getFeaturedItemsList(),
  });
  return {
    featuredItems: data || [],
    isFetchingFeaturedItems: isLoading,
    refetchFeaturedItems: refetch,
  };
};
