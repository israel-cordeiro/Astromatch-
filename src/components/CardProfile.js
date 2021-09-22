import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../constants';
import Coracao from '../Image/heart.png'
import Excluir from '../Image/excluir.png'


const ContainerButton = styled.div`
    display:flex;
    justify-content: space-between;
    background: none;
    margin-top: 10px;
    
    button{
        cursor:pointer;
        border: none;
        background-color: whitesmoke;
    }
    
` 

const ContainerImage = styled.div`
      height: 500px;
      position: relative;
      width: 350px;
      overflow: hidden;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
` 

const BaseImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageBlur = styled(BaseImage)`
  filter: blur(10px);
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled(BaseImage)`
  object-fit: contain;
  object-position: center;
  position: relative;
  z-index: 1;
`

const TextContainer = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0px;
  width: 95%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  z-index: 2;
`

const NameAge = styled.p`
  font-weight: bold;
  font-size: 24px;
`

const Bio = styled.p`
  margin-top: 5px;
`


function CardProfile  () {
    const [pessoa,setPessoa] = useState({})

    const pegaPerfil = () =>{
        axios
        .get(`${baseURL}/person`)
        .then((response) =>{
            console.log(response.data)
            setPessoa(response.data.profile)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() =>{
        pegaPerfil()
    }, [])

    
    const escolhePessoa = (choice) =>{
        const body = {
            id:pessoa.id,
            choice:choice, 
        }

        axios
        .post(`${baseURL}/choose-person`, body)
        .then((response) =>{
            pegaPerfil()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const likePerson = () =>{
        escolhePessoa(true)
    }

    const deslikePerson = () =>{
        escolhePessoa(false)
    }


    return(
        <div>
            <ContainerImage>
                <Image  src={pessoa.photo} alt='Imagem Usuario' />
                <ImageBlur src={pessoa.photo} />
            <TextContainer>
                <NameAge> {pessoa.name}, {pessoa.age} </NameAge>
                <Bio> {pessoa.bio} </Bio>
            </TextContainer>
            </ContainerImage>
            <ContainerButton>
                <button onClick={deslikePerson}><img src ={Excluir} /></button>
                <button onClick={likePerson}><img src ={Coracao} /></button>
            </ContainerButton>
        </div>
    )
    
    
}
  export default CardProfile