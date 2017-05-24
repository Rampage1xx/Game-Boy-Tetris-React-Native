import * as React from 'react';
import styled from 'styled-components/native';
import {DigitalPadDirection} from './DigitalPad';

const CenterBox = styled.View`
        width:100%;
        height:33%;
        background-color:green;
        align-items:center;
        flex-direction:row;
`;

const DigitalPadCircle = styled.View`
        width:33%;
        height:100%;
        border-radius:100;
        background-color:yellow;
`;

export const CenterRow = (props) => {

    return (

        <CenterBox>
            <DigitalPadDirection/>
            <DigitalPadCircle/>
            <DigitalPadDirection/>
        </ CenterBox>
    );
};
