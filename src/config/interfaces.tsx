import { Dispatch, SetStateAction } from "react";

export interface interfacePharese {
  "63bc6dd6bd70825151937290": string;
  "63c4d91db3ab51db657dcfed": string;
  "63c4d914b3ab51db657dcfeb": string;
  "63bc7093b3ab51db657dcfe7": string;
  "63c4d904b3ab51db657dcfe9": string;
}
export interface interfaceLottie {
  "63bc6dd6bd70825151937290": any;
  "63c4d91db3ab51db657dcfed": any;
  "63c4d914b3ab51db657dcfeb": any;
  "63bc7093b3ab51db657dcfe7": any;
  "63c4d904b3ab51db657dcfe9": any;
}
export interface interfaceCategories {
  category: string;
}
export interface interfaceQuestion {
  answer: string;
}
export interface ModalInterface {
  isOpen: boolean;
  text: string;
  statusCode: number | null;
}
export interface category {
  _id: string | undefined;
  name: string;
  createdAt: string;
  updateAt: string;
}
export interface scores {
  _id: string | undefined;
  category: string;
  gamertag: string;
  score: number;
  createdAt: string;
  updateAt: string;
}
export interface valueRegisterForm {
  gamertag: string;
}
export interface myModalInterface {
  text: string;
  statusCode: number | null;
}
export interface interfaceTitle {
  title: string;
}
export interface interfaceCountDown {
  countDown: number;
  DoAction: () => void;
  setCountDown: Dispatch<SetStateAction<number>>;
  resetCountDown: number;
}
export interface question {
  id: string;
  catetegory: string;
  quiz: {
    question: string;
    options: string[];
    answer: string;
  };
}
export interface myQuiz {
  status: string;
  category: string;
  quiz: Array<question>;
  question: question;
  step: number | any;
  score: number;
}
export interface myQuizState {
  status: string;
  category: string;
  quiz: Array<question>;
  question: question | null;
  step: number | any;
  score: number;
}
export interface myContext {
  state: myQuiz;
  handleGetQuizByCategory: (
    id: string,
    setStatus: Dispatch<SetStateAction<ModalInterface>>
  ) => void;
  handleAddPoints: (score: number) => void;
  handleGameOver: (score: number) => void;
  handleResetGame: () => void;
}
export interface childrenProps {
  children: JSX.Element;
}
