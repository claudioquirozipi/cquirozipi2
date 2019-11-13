import * as React from 'react';


//Styled-Components
import {
    ContainerGrid,
    TechnologieContainer
} from './styled';

//Data 
import {data} from './data';


//interface
interface iData {
    title: string;
    icon: string;
}

function Technologies() {
    return(
        <div className="container mt-5 mb-5">
            <h1>Technologies</h1>

            <ContainerGrid>
                {
                    data.map((data: iData, i: number)=> {
                        return(
                            <div>
                                <TechnologieContainer key={i}>
                                    <img src={data.icon} alt={data.title}/>
                                    <p>{data.title}</p>
                                </TechnologieContainer>
                            </div>
                        )
                    })
                }
            </ContainerGrid>
        </div>
    )
}

export default Technologies;