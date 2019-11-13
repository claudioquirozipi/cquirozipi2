import React from 'react';
import styled from 'styled-components';

const ImgContainerSC = styled.div`
    width: 100%;
    height: ${props => props.height};
    /* border: 1px solid red; */
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

function CardImg1({src, height}) {
    return(
        <ImgContainerSC height={height|| "150px"}>
            <img src={src} alt=""/>
        </ImgContainerSC>
    )
}

export default CardImg1;