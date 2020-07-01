import styled from 'styled-components';
import {MQ} from '../../config/media';

export const ContainerGrid = styled.div`
    display: grid; 
    grid-column-gap: 30px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    @media ${MQ.sm} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${MQ.md} {
        grid-template-columns: repeat(5, 1fr);
    }
`;
export const TechnologieContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    padding: 5px 25px;
    width: auto;
    p {
        margin: 0;
    }
    img {
        height: 25px;;
        width: auto;
        margin-right: 7px;
    }

`;