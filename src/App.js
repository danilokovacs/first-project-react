import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Paragrafo from './Components/Paragrafo';

function App() {

  const [value, setValue] = useState("");
  const [lista, setLista] = useState([]);

  return (
    <div className="App">
     <Paragrafo
     color = "blue"
     lista={lista}
     />
     <Input
     texto = "Insira um novo nome: "
     value={value}
     setValue={setValue}
     lista={lista}
     setLista={setLista}
     />
    </div>
  );
}

export default App;
