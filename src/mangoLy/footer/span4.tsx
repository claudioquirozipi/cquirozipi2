import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Styled-Componets
const Span4SC = styled.div`
    /* border: 1px solid blue; */
    @media ${MQ.sm} {
        grid-column-start: 4 span;
    }
`;

function Span4(props: any) {
    const {children}= props;
    return(
        <Span4SC>
            {children}
        </Span4SC>
    )
}

export default Span4;