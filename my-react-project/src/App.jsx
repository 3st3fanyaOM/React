import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";
import { useState } from "react";

function App() {
  //let number = 0;
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");
  let myPlaceHolder = "Escribe aquí";

  const addOne = () => {
    //number++;
    setNumber(number + 1);
    console.log(number);
  };

  const sayHello = () => {
    alert("hola!!");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className="mainContent">
        <h1 onClick={sayHello}>Hola a todos!!!</h1>
        <h2 onClick={addOne}> Number : {number}</h2>
        <input
          placeholder={myPlaceHolder}
          onChange={handleChange}
          type="text"
          value={myValue}
        />
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  );
}

export default App;
