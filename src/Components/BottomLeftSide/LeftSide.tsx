import * as React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {DigitalPad} from './DigitalPad/DigitalPad';

const LeftSideBox = styled.View`
    flex:1;
    width: 40%;
    height: 100%;
    border:1;
    border-color:black;
`;

const StartBoxStyled = styled.View`
    flex: 1;
    background-color:purple;
    flex-direction: row;
`;

const LeftSideStyled = styled.View`
    flex: 1;
    background-color: green;
`;

const RightSideStyled = styled.View`
    flex:1;
    background-color: black;
`;

export const BottomLeftSide = (props) => {

    return (
        <LeftSideBox>
            <Text> Native Boy </Text>
            <DigitalPad/>
            <StartBoxStyled>
                <LeftSideStyled/>
                <RightSideStyled/>
            </StartBoxStyled>
        </ LeftSideBox>
    );
};
