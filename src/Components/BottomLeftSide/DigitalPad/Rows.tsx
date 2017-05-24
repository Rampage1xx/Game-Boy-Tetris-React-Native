import * as React from 'react';
import styled from 'styled-components/native';
import {DigitalPadDirection} from './DigitalPad';

const RowsBox = styled.View`
width:100%;
height:33%;
background-color:green;
align-items:center;
`;

export const Rows = (props) => {

    return (

        <RowsBox>
            <DigitalPadDirection/>
        </ RowsBox>
    );
};
