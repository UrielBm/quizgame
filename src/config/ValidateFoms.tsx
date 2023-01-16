import * as Yup from "yup";
import { interfaceCategories, valueRegisterForm } from "./interfaces";
export const CategorySchema = Yup.object().shape({
  category: Yup.string().required("Es necesario seleccionar una categoria"),
});
export const GamertagSchema = Yup.object().shape({
  gamertag: Yup.string().required("Es necesario un nombre de jugador"),
});

export const CategoryValue: interfaceCategories = { category: "" };
export const GamertagValue: valueRegisterForm = { gamertag: "" };
