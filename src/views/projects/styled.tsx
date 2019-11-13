import styled from 'styled-components';
import {MQ} from '../../config/media';


export const ContainerProjects = styled.div`
    
    display: grid;
    justify-content: center;
    grid-gap: 5vw;
    grid-template-columns: repeat(1, 1fr);
    margin: 3rem 0;
    & > div {
        place-self: center;
    }
    @media ${MQ.sm} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${MQ.md} {
        
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    box-sizing: border-box;
    overflow: hidden;
`;