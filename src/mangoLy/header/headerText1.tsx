import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

const TextContainerSC = styled.div`
    border: 1px solid blue;
    margin-top: 81px;
    @media ${MQ.sm} {
        margin-top: 0px;
    }
    h1 {
        color: white;
        font-size: 28px;
        font-weight: bold;
        margin-top: 0px;
        margin-bottom: 20px;
        line-height: 48px;
        @media ${MQ.sm} {
            font-size: 26px;
        }
        @media ${MQ.md} {
            margin-bottom: 16px;
            line-height: 70px;
            font-size: 50px;
        }
        @media ${MQ.lg} {
            font-size: 60px;
        }
    }
    p {
        color: white;
        font-size: 30px;
        line-height: 24px;
        font-weight: 400px;
        margin-top: 0;
        margin-bottom: 20px;
        display: none;
        @media ${MQ.sm} {
            display: block;
            font-size: 12px;
        }
        @media ${MQ.md} {
            margin-bottom: 32px;
            line-height: 40px;
            font-size: 22px;
        }
    }
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 80px;
        button {
            width: 48%;
        }
        @media ${MQ.sm} {
            margin-bottom: 0;
        }
    }
`;
function HeaderTextML1(props: any) {
    const {children} = props;
    return(
        <TextContainerSC>
            {children}
        </TextContainerSC>
    )
}

export default HeaderTextML1;
