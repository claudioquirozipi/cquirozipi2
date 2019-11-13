import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

const BgHeaderSC = styled.div`
    background-image: url(${(props) => props.bgImgM });
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    @media ${MQ.sm} {
        background-image: url(${(props) => props.bgImgD });
        height: 510px;
    }
    @media ${MQ.md} {
        height: 100vh;
    }
`;



function BgHeaderML({ children, bgImgM, bgImgD}) {
    return(
        <BgHeaderSC bgImgM={bgImgM} bgImgD={bgImgD}>
            {children}
        </BgHeaderSC>
    )
}

export default BgHeaderML;