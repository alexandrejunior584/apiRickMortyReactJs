import { Person } from "../types/Person";
import styled, { StyledComponent } from 'styled-components';

const Div = styled.div`
background: rgba(33, 33, 33, 0.59);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(33, 33, 33, 0.3);
text-align: center;
padding: 50px;
color: #fff;
`;



type Props = {
    dados: Person;
}

export const PersonItem = ({dados}: Props) =>{
    return(
        <div>
            <Div>
                <img src={dados.image} alt="" className="m-auto mb-5 rounded-xl"/>
                <h2 className="text-2xl">{dados.name}</h2>
                <p><strong>Id: </strong>{dados.id}</p>
                <p><strong>Espécie: </strong>{dados.species}</p>
            </Div>
        </div>
    )
}