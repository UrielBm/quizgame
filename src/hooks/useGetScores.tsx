import { useState } from "react";
import { scores } from "../config/interfaces";
import clienteAxios from "../config/axios";

const useGetScores = () => {
  const [list, setList] = useState<scores[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const handleGetTopScores = async (category: string) => {
    try {
      setisLoading(true);
      const { data } = await clienteAxios.get(`score/${category}`);
      setList(data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { isLoading, list, handleGetTopScores };
};

export default useGetScores;
