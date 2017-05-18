import * as React from 'react';
import styled from 'styled-components/native';
import {GameScreen} from '../../Components/GameScreen/GameScreen';
import {LeftSide} from '../../Components/LeftSide/LeftSide';

export const GameBoyBox = styled.View`
     margin-top: 30;
     margin-left: 30;
     background-color: grey;
     height: 450;
     margin-right: 30;
     border-bottom-right-radius: 50;
`;

export class GameBoy extends React.Component<any, any> {

    public render() {

        return (
            <GameBoyBox>
                <GameScreen />
                <LeftSide />
            </GameBoyBox>

        );

    }

}
