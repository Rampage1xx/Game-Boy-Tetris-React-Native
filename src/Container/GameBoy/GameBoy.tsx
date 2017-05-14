import * as React from 'react';
import  styled from 'styled-components/native';
import {GameScreen} from '../../Components/GameScreen/GameScreen';
import {DigitalPad} from '../../Components/DigitalPad/DigitalPad';
import {Animated, View} from 'react-native';
import {LeftSide} from '../../Components/LeftSide/LeftSide';
import Text = Animated.Text;

export const GameBoyBox = styled.View`
     margin-top: 5%;
     margin-left: 10%;
     background-color: grey;
     height: 85%;
     margin-right: 10%;
`;

export class GameBoy extends React.Component<any, any> {

    public render() {

        return (
            <GameBoyBox >
                <GameScreen />
                <LeftSide />
            </GameBoyBox>

        );

    }

}
