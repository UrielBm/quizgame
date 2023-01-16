import { useEffect, useState } from "react";
import { category } from "../config/interfaces";
import clienteAxios from "../config/axios";

const useGetCategories = () => {
  const [list, setList] = useState<category[]>([]);
  useEffect(() => {
    handleGetAllCategories();
  }, []);
  const handleGetAllCategories = async () => {
    try {
      const { data } = await clienteAxios.get("categories");
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };
  return { list };
};

export default useGetCategories;
