// import de useState pour changer d'état nos variables
import { useState, useEffect } from "react";
import "./App.scss";
// appel de axios pour réaliser les requêtes
import axios from "axios";
//Import des composants
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  // initialisation des states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      // Requête axios vers le serveur
      const response = await axios.get(
        "https://deliveroo-back-react.herokuapp.com/"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response)
      alert("An error");
    }
  };
  // Utilisation de useEffect pour faire la requête qu'une seule fois par chargement du composant
  useEffect(() => {
    fetchData();
  }, []);

  //Je test si tout est chargé avant d'afficher les résultats
  return isLoading ? (
    <div className="center">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <span>En attente ...</span>
    </div>
  ) : (
    <>
      <Header data={data.restaurant} />
      <Content data={data.categories} />
    </>
  );
}

export default App;
