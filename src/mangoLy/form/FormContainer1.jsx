import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';
//Mango-Library
import Container from '../layout/container';


const ContainerFormSC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        @media ${MQ.sm} {
            width: 50%;
        }
    }
`;
function FormContainer1(props) {
    const {children, bgImgM, bgImgD, title} = props;
    return(
        <Container bgImgM={bgImgM} bgImgD={bgImgD}>
            <div>{title}</div>
            <ContainerFormSC>
                <div>
                    {children}
                </div>
            </ContainerFormSC>
        </Container>
    )
}
export default FormContainer1;