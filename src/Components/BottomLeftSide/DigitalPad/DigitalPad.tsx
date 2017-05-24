import * as React from 'react';
import styled from 'styled-components/native';
import {CenterRow} from './Center';
import {Rows} from './Rows';

const DigitalPadBox = styled.View`
        width: 100;
        height: 100;
        background-color:red;
        justify-content: center;
        flex-direction: column;
`;

export const DigitalPadDirection = styled.View`
       height:33;
       width:33;
       background-color:black;
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
