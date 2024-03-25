import { useEffect, useState } from "react";
import MexicoLuttie from "./../assets/lotties/categories/mexico.json";
import CodeLuttie from "./../assets/lotties/categories/code.json";
import AnimeLuttie from "./../assets/lotties/categories/anime.json";
import GamerLuttie from "./../assets/lotties/categories/gamer.json";
import MusicLuttie from "./../assets/lotties/categories/music.json";
import BankLuttie from "./../assets/lotties/categories/bank.json";
import GeneralLuttie from "./../assets/lotties/categories/general.json";
import { interfaceLottie, interfacePharese } from "./../config/interfaces";
const useGetPharse = (score: number = 0, category: string = "") => {
  const [phrase, setphrase] = useState("");
  const [image, setImage] = useState();
  const PhraseHiScore: interfacePharese = {
    "63bc6dd6bd70825151937290": `Eres todo un Mexicano, tu puntaje es: ${score}, corre agua de jamaica por tus venas y eres dueño del taco`,
    "63c4d91db3ab51db657dcfed": `Eres un execelente programador Fullstack, dominas todos los lenguajes e infrastructuras con el puntaje de: ${score}`,
    "63c4d914b3ab51db657dcfeb": `Se ve que que eres un gran conocedor del anime, todo un otaku en potencia, feliciades. Puntaje: ${score}`,
    "63bc7093b3ab51db657dcfe7": `Eres el maestro del overkill, un puntaje de ${score}, ningun niño rata lo obtiene.`,
    "63c4d904b3ab51db657dcfe9": `Tus gustos musicales van más alla de lo esperado con tu puntaje de ${score} tiene un gran gusto musical.`,
    "66018d3caa60cd85cc08c8ee": `Eres un maestro de las finanzas, dueño de la 'black card' con un puntaje de ${score}, tu GAT es del 0%.`,
  };
  const PhraseMiddleScore: interfacePharese = {
    "63bc6dd6bd70825151937290": `Hiciste un buen desempeño,tu puntaje es: ${score}, se ve que bailas bien el payaso de rodeo y te salen los gritos del mariachi`,
    "63c4d91db3ab51db657dcfed": `Vaya que gran habilidad programando todo un hacker de la tecnología tu puntaje es: ${score}`,
    "63c4d914b3ab51db657dcfeb": `Tú eres el más perron aquí. Felicidades por tu puntaje ${score}`,
    "63bc7093b3ab51db657dcfe7": `Se ve que no eres un fanboy de ninguna compañia y juegas de todo un poco, tu score es: ${score}`,
    "63c4d904b3ab51db657dcfe9": `con tu score de: ${score} se NOTA que escuchas una gran cantidad de estilos músicales, gran trabajo`,
    "66018d3caa60cd85cc08c8ee": `Eres una persona con sólidos conocimientos, tu puntaje crediticio es: ${score}.`,
  };
  const PhraseLowScore: interfacePharese = {
    "63bc6dd6bd70825151937290": `Te falto enjundia, tu puntaje es: ${score} mi pequeño chapultepec`,
    "63c4d91db3ab51db657dcfed": `Vas por el camino indicado te falta practicar un poco más tus conocimientos teoricos. Tú puntaje es: ${score}`,
    "63c4d914b3ab51db657dcfeb": `Aun puedes mejorar y ser un otaku de profesión que lleve con orgullo en su kokoro. Tu puntaje es: ${score}`,
    "63bc7093b3ab51db657dcfe7": `El camino del niño rata te persigue con ese puntaje ${score}, entrena y mejora.`,
    "63c4d904b3ab51db657dcfe9": `Buen intento tu puntaje es: ${score}, mejora ese oido y practica mucho.`,
    "66018d3caa60cd85cc08c8ee": `Estás en buen camino para desarrollar finanzas sanas. Buen trabajo, tu puntaje es: ${score}.`,
  };
  const generalPhrase = `Lo hiciste muy bien en esta categoría, tu puntaje es: ${score} intenta en alguna otra.`;
  const imageByCategory: interfaceLottie = {
    "63bc6dd6bd70825151937290": MexicoLuttie,
    "63c4d91db3ab51db657dcfed": CodeLuttie,
    "63c4d914b3ab51db657dcfeb": AnimeLuttie,
    "63bc7093b3ab51db657dcfe7": GamerLuttie,
    "63c4d904b3ab51db657dcfe9": MusicLuttie,
    "66018d3caa60cd85cc08c8ee": BankLuttie,
  };
  useEffect(() => {
    hanldeGetPhrase();
    handleGetImage();
  }, []);
  const hanldeGetPhrase = () => {
    if (score >= 900) {
      setphrase(
        PhraseHiScore[category as keyof interfacePharese] || generalPhrase
      );
    } else if (score <= 800 && score >= 600) {
      setphrase(
        PhraseMiddleScore[category as keyof interfacePharese] || generalPhrase
      );
    } else {
      setphrase(
        PhraseLowScore[category as keyof interfacePharese] || generalPhrase
      );
    }
  };
  const handleGetImage = () => {
    setImage(
      imageByCategory[category as keyof interfaceLottie] || GeneralLuttie
    );
  };
  return { phrase, image };
};

export default useGetPharse;
