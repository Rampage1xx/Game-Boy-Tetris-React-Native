import * as React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {DigitalPad} from '../DigitalPad/DigitalPad';

const LeftSideBox = styled.View`
    flex:1;
    width: 40%;
    height: 100%;
    border:1;
    border-color:black;
`;

export const BottomLeftSide = (props) => {

    return (
        <LeftSideBox>
            <Text> Native Boy </Text>
            <DigitalPad/>
        </ LeftSideBox>
    );
};
