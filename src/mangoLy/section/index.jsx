import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Mango-Library
import ContainerML from '../../mangoLy/layout/container';

//Styled-Components
const SectionSC = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${MQ.sm} {
        justify-content: space-between;
        min-height: 80vh;   
        flex-direction: ${(props) => props.reverse ? "row-reverse": "row"};
    }
    & > div {
        width: 100%;
        /* border: 1px solid red; */
        @media ${MQ.sm} {
            width: 50%;
        }
    }
    img {
        width: 100%;
        /* border: 1px solid green; */
        @media ${MQ.sm} {
            width: 40%;
        }
    }
`;

function Section1(props) {
    const {children, img, bgImgM, bgImgD, reverse, title} = props;
    return(
        <ContainerML bgImgM={bgImgM} bgImgD={bgImgD}>
            <div>{title || null}</div>
            <SectionSC reverse={reverse}>
                <img src={img} alt=""/>
                <div>
                    {children}
                </div>
            </SectionSC>
        </ContainerML>
    )
}
export default Section1;