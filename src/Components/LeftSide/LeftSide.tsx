import * as React from 'react';
import styled from 'styled-components/native';
import {DigitalPad} from '../DigitalPad/DigitalPad';
import {Animated, View} from 'react-native';
import Text = Animated.Text;

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
            <Text> Native Boy </Text>
            <DigitalPad/>
        </ LeftSideBox>
    )
}
