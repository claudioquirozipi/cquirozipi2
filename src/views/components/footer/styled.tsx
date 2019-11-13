import styled from 'styled-components';
import {MQ} from '../../../config/media';
export const FooterSC = styled.footer`
    padding: 5vw 0;
    background: #212529;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {color: white;}
    ul {
        padding: 0;

        @media ${MQ.sm} {
            width: 90%;
            margin-top: 40px;
            margin-bottom: 40px;
            display: flex;
            justify-content: space-around;
            text-align: center;
        }
        @media ${MQ.md} {
            width: 75%;
        }
        li {
            width: auto;
            margin: 10px 0;
            a {
                color: white;
            }
            img {
                width: 20px; 
                height: auto;
                margin-right: 10px;
            }
        }
    }
`;