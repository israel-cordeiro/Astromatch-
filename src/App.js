import React,{useState} from 'react';
import TelaMatchs from './components/TelaMatchs';
import TelaInicial from './components/TelaInicial';



const App = (props) => {
  const [tela, setTela] = useState('inicial')
 

  const trocaTela = (tela) =>{
  setTela(tela)
}

   const renderizarTela = () =>{
     switch (tela) {
      case 'inicial':
         return <TelaInicial trocaTela={trocaTela}  />
      case 'matchs':
       return <TelaMatchs trocaTela={trocaTela}  />
    default:
         return null;
    }
   }

  return (
    
    <div>
      {renderizarTela()}
    </div>
  );
}

export default App;
