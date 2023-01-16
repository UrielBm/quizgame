import * as Yup from "yup";
import { interfaceCategories, valueRegisterForm } from "./interfaces";
export const CategorySchema = Yup.object().shape({
  category: Yup.string().required("Es necesario seleccionar una categoria"),
});
export const GamertagSchema = Yup.object().shape({
  gamertag: Yup.string()
    .required("Es necesario un nombre de jugador")
    .min(3, "Tu gamertag debe tener al menos 3 letras")
    .max(7, "Tu gamertag debe ser máximo de 7 letras"),
});

export const CategoryValue: interfaceCategories = { category: "" };
export const GamertagValue: valueRegisterForm = { gamertag: "" };
