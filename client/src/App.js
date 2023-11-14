import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "../src/components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  }); //Vamos llenando el arreglo a medida que traigamos los personajes
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id)); //Se filtran los characters diferentes al del id a cerrar
  };
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const username = "gonzalohb10@hotmail.com";
  const password = "gonzalo11";
  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  // async function login(userData) {
  //   try {
  //     const { email, password } = userData;
  //     const URL = "http://localhost:3001/rickandmorty/login/";
  //     const { data } = await axios(
  //       URL + `?email=${email}&password=${password}`
  //     );
  //     const { access } = data;
  //     setAccess(data);
  //     access && navigate("/home");
  //   } catch (error) {
  //     return { error: error.message };
  //   }
  // }

  async function onSearch(id) {
    try {
      const URL = `http://localhost:3001/rickandmorty/character/` + id;
      const { data } = await axios(URL);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert("¡No hay personajes con este ID!");
    }
  }

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null} ;
      <Routes>
        <Route exact path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        ></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
