import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Mango-Library
import ContainerHeaderML from '../layout/containerHeader';


//Styled-Components
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

const HeaderSC = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: auto;
    @media ${MQ.sm} {
        flex-direction: row;
        height: 100%;
    }
    & > div {
        /* border: 1px solid green; */
    }
`;
const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    @media ${MQ.sm} {
        width: 48%;
        text-align: left;
    }
`;
const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media ${MQ.sm} {
        width: 48%;
    }
    img {
        width: 100%;
        height: auto;
    }
`;



function Header1(props) {
    const {children, headerImg, bgImgM, bgImgD, nav} = props;
    return(
        <BgHeaderSC bgImgM={bgImgM} bgImgD={bgImgD}>
            {nav}
            <ContainerHeaderML>
                <HeaderSC>
                    <ContainerText>
                        {children}
                    </ContainerText>
                    <ContainerImg>
                        <img src={headerImg} alt="logo"/>
                    </ContainerImg>
                </HeaderSC>
            </ContainerHeaderML>
        </BgHeaderSC>
    )
}
export default Header1;