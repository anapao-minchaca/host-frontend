import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [info, setInfo] = useState("");
  const getElements = async () => {
    const response = await axios.get("https://backend-b2up.onrender.com/bookdata");
    console.log(response.data);
    setInfo(JSON.stringify(response.data));
  };

  useEffect(() => {
    getElements();
  }, []);
  return <div className="App">{info ?? <>{info}</>}</div>;
}

export default App;
