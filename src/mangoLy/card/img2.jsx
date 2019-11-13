import React from 'react';
import styled from 'styled-components';

const ImgContainerSC = styled.div`
    width: 100%;
    height: ${props => props.height};
    display: flex;
    justify-content: ${props => props.position};
    align-items: center;
    /* border: 1px solid red; */
    img {
        width: ${props => props.diameter};
        height: ${props => props.diameter};
        border-radius: 50%;
        object-fit: cover;
    }
`;

function CardImg1({src, height, diameter, position}) {
    return(
        <ImgContainerSC height={height|| "150px"} diameter={diameter|| "75px"} position={position ||"center"}>
            <img src={src} alt=""/>
        </ImgContainerSC>
    )
}

export default CardImg1;