import * as React from 'react';
import styled from 'styled-components/native';
import {DigitalPad} from '../DigitalPad/DigitalPad';

const LeftSideBox = styled.View`
    width: 40%;
    height: 50%;
    border:1;
    border-color:black;
    align-items:center;
`;

export const LeftSide = (props) => {

    return (

        <LeftSideBox>
            <DigitalPad/>
        </ LeftSideBox>
    )
}
