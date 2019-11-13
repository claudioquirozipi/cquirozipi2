import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Mango-Library
import ContainerML from '../layout/container';
//Interface
interface iFooterML1 {
    children: any;
    bgImgM?: string;
    bgImgD?: string;
}
const FooterContainerSC = styled.div`
    min-height: 80vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5vh 20px;
    @media ${MQ.sm} {
        grid-gap: 10vh 20px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto 1fr;
    }
`;
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid yellowgreen; */
    @media ${MQ.sm} {
        grid-column: 1/6;
        grid-row: 1/2;
    }
`;
const Newslater = styled.div`
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${MQ.sm} {
        grid-column: 6/13;
        grid-row: 1/2;
    }
`;
function FooterML1(props: iFooterML1) {
    const {children, bgImgM, bgImgD} = props;
    return(
        <ContainerML bgImgM={bgImgM} bgImgD={bgImgD}>
            <FooterContainerSC>
                <Title><h2>titulo 2</h2></Title>
                <Newslater><form> <input type="text"/><input type="button" value="send"/></form></Newslater>
                {children}
            </FooterContainerSC>
        </ContainerML>
    )
}
export default FooterML1;