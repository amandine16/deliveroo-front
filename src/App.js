import "./App.css";
import axios from "axios";

function App() {
  const fetchData = async () => {
    try {
      // Requête axios vers le serveur
      const response = await axios.get(
        "https://deliveroo-back-react.herokuapp.com/"
      );
      console.log(response.data);
    } catch (error) {
      alert("An error");
    }
  };
  fetchData();
  return <div className="App"></div>;
}

export default App;
