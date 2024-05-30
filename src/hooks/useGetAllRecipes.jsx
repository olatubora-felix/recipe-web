import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../services/axiosApi";

export const useGetAllRecipes = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const res = await axiosInstance.get("/recipes");
      return res.data;
    },
  });
  return {
    recipes: data?.recipes,
    limit: data?.limit,
    total: data?.total,
    isLoading,
    isError,
  };
};
