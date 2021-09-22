import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constants';


const ContainerList = styled.div`
  min-height: 600px;
  max-width: 400px;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: flex-start;
  border-radius: 20px;
  border: 1px solid black;
  margin-left: 350px;
  margin-top: 10px;

` 
const HeaderContainer = styled.div`
   border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;

`

const ContainerMatchs = styled.div`
    box-shadow: 1px 1px 1px 1px ;
    margin-top: 20px;
    border-radius: 20px;
  
   
   img{
       width:40px;
       height:40px;
       border-radius:100px;
       margin-top:8px;
       margin-left:10px;
   }

`

const ButtonContainer = styled.div`
    margin-top: 30px;
    margin-left: 180px;
    size: 100px;

    button{

        cursor:pointer;
        border-radius: 20px;
        background-color: lightgray;
        border: 2px solid black;
        transition-duration: 0.4s;
}

button:hover {
    background-color: #FF0000; /* red*/
    color: white;
}
       

` 

const ButtonHeader = styled.div`
    
    button{
        border-radius: 20px;
        cursor: pointer;
        transition-duration: 0.4s;
        
    }

    button:hover {
    background-color: #A9A9A9; 
    color: white;
}

` 


function TelaMatchs (props){
    const [lista, setLista] = useState([])

    const pegaLista = () =>{
        axios
        .get(`${baseURL}/matches`)
        .then((response) =>{
             console.log(response.data.matches) 
            setLista(response.data.matches)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    useEffect(() =>{
        pegaLista()
    }, [])
    

    const apagaPerfil = () =>{
        axios
        .put(`${baseURL}/clear`)
        .then((response) => { 
            pegaLista()
            alert ('Usuarios deletados com Sucesso!!')
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    return(
        <ContainerList>
            <HeaderContainer>
                <div>
                    <h1>AstroMatch</h1>
                </div>
                <ButtonHeader>
                    <button onClick={() => props.trocaTela('inicial')}>Voltar para Tela Inicial</button>
                </ButtonHeader>
            </HeaderContainer>
            {lista.map((item) => {
                return (
                    <ContainerMatchs>
                        <img  src={item.photo}  key={lista.id} />
                         {item.name}
                    </ContainerMatchs>
                )
            })}
            <ButtonContainer>
                <button onClick={apagaPerfil}>Deletar Matchs</button>
            </ButtonContainer>
        </ContainerList>

    )
}

export default TelaMatchs;