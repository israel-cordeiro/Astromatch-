import styled from 'styled-components';
import CardProfile from './CardProfile';



const ContainerCard = styled.div`
    display: flex;
    width: 600px;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid black;
    background-color: whitesmoke;
    margin-left: 350px;
    min-height: 600px;
    max-width: 400px;
    width: 100%;
    padding: 10px 20px;
    align-items: center;
    border-radius: 20px;
    border: 2px solid black;
    margin-top: 10px;

` 

const ContainerHeader = styled.div`
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
   
  
` 

const ContainerBtton = styled.div`
    margin-left: 75px;

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


function TelaInicial(props) {



    return(
            <ContainerCard>
                <ContainerHeader>
                    <div>
                        <h1>AstroMatch</h1>
                    </div>
                    <ContainerBtton>
                        <button onClick={() => props.trocaTela('matchs')}>Ir para Matchs</button>
                    </ContainerBtton>
                </ContainerHeader>
              <CardProfile />
            </ContainerCard>
          
    )
}

export default TelaInicial;