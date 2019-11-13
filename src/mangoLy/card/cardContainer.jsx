import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Mango- Library
import ContainerML from '../layout/container';

const CardContainer = styled.div`
    /* border: 1px solid yellow; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) => `auto repeat(${props.gridColumns}, auto)`};
    grid-gap: ${props => props.gridGap};
    justify-content: center;
    align-items: center;
    /* border: 1px solid cyan; */
    @media ${MQ.sm} {
        min-height: 80vh;
        grid-template-columns: ${ (props) => `repeat(${props.gridColumns}, 1fr)` };
        grid-template-rows: auto 1fr;
    }
    h1 {
        /* border: 1px solid red; */
    }
`;
const TitleContainer = styled.div`
    grid-column: 1/-1;
    grid-row: 1/2;
    text-align: center;
`;
function CardContainerML(props) {
    const {children, bgImgM, bgImgD, title, gridColumns, gridGap} = props;
    
    
    return(
        <ContainerML bgImgM={bgImgM} bgImgD={bgImgD}>
            <CardContainer gridColumns={gridColumns} gridGap={gridGap || "0"}>
                {title ? <TitleContainer>{title}</TitleContainer>: null}
                {children}
            </CardContainer>
        </ContainerML>
    )
}
export default CardContainerML;