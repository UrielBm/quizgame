import { useEffect, useState } from "react";
import { category } from "../config/interfaces";
import clienteAxios from "../config/axios";

const useGetCategories = () => {
  const [list, setList] = useState<category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    handleGetAllCategories();
  }, []);
  const handleGetAllCategories = async () => {
    try {
      setIsLoading(true);
      const { data } = await clienteAxios.get("categories");
      setIsLoading(false);
      setList(data);
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  return { list, isLoading };
};

export default useGetCategories;
