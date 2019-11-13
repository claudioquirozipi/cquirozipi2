import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Styled-Componets
const Span2SC = styled.div`
    /* border: 1px solid red; */
    @media ${MQ.sm} {
        grid-column-start: 2 span;
    }
`;

function Span2(props: any) {
    const {children}= props;
    return(
        <Span2SC>
            {children}
        </Span2SC>
    )
}

export default Span2;