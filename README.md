# React

npm create vite@5.2.3 //instalar  
project name  
select framework  
select variant (TypeScript)  
cd projectName  
npm install  
npm run dev  
Local: http://localhost:5173  
ctrl c //desconectar  
code . --> abrir workspace en VSC  
Terminal > New Terminal > npm run dev  
Estructura  
-node modules (no tocar)  
public (archivos públicos)  
SRC (código)  
CREAR COMPONENTE  
  Dentro de SRC crear un archivo componente.tsx  
  donde incluimos la funcion y fuera:  
  export default nombreComponente;  

  En app.tsx  
  impirt nombreComponente from './Componente';  
    function App(){  
      return <Componente />;  
      }  
    export default App;  

