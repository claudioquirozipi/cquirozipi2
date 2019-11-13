import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Mango-Library
import ContainerML from '../../mangoLy/layout/container';
//Interface
interface iTestimonialsML1 {
    children: any;
    img: string;
    reverse: boolean;
    bgImgM?: string;
    bgImgD?: string;
}
interface iTestimonialsSC {
    reverse: boolean;
}

//Styled-Components
const TestimonialsSC = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${MQ.sm} {
        justify-content: space-between;
        min-height: 80vh;   
        flex-direction: ${(props: iTestimonialsSC) => props.reverse ? "row-reverse": "row"};
    }
    & > div {
        width: 100%;
        /* border: 1px solid red; */
        @media ${MQ.sm} {
            width: 50%;
        }
    }
`;
const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: yellow;
    img {
        width: 100%;
        /* border: 1px solid green; */
        @media ${MQ.sm} {
            width: 60%;
        }
    }
`;
function TestimonialsML1(props: iTestimonialsML1) {
    const {children, img, bgImgM, bgImgD, reverse} = props;
    return(
        <ContainerML bgImgM={bgImgM} bgImgD={bgImgD}>
            <TestimonialsSC reverse={reverse}>
                <ContainerImg>
                    <img src={img} alt=""/>
                </ContainerImg>
                <div>
                    {children}
                </div>
            </TestimonialsSC>
        </ContainerML>
    )
}
export default TestimonialsML1;