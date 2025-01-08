import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
//import ButtonComponent from "./components/ButtonComponent";
//import Login from "./components/Login";
import MovieList from "./components/MovieList";
import AnimalList from "./components/AnimalList";
import { useState } from "react";

function App() {
  
  const [greetings] = useState("Bienvenidos a mi web"); //valor x dft
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  };

  

  return (
    //lo que se muestra en HTML
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>
      <main className="mainContent">
        <h2>Hola a todos!</h2>
        <MovieList></MovieList>
        <AnimalList></AnimalList>
      </main>
    </>
  );
}

export default App;
