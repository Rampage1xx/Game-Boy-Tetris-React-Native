import * as React from 'react';
import styled from 'styled-components/native';
import {Rows} from './Rows';
import {CenterRow} from './Center';

const DigitalPadBox = styled.View`
        width: 70%;
        height: 30%;
        background-color:red;
        justify-content: center;
        align-items: center;
`;

export const DigitalPadDirection = styled.View`
       height:100%;

       width:33%;
       background-color:black
`;

export const DigitalPad = (props) => {

    return (

        <DigitalPadBox>
            <Rows/>
            <CenterRow />
            <Rows/>
        </ DigitalPadBox>
    );
};
