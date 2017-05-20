import * as React from 'react';
import styled from 'styled-components/native';
import {GameScreen} from './GameScreen/GameScreen';
import {LeftSide} from './LeftSide/LeftSide';

export const GameBoyBox = styled.View`
     margin-top: 30;
     margin-left: 30;
     background-color: grey;
     height: 450;
     margin-right: 30;
     border-bottom-right-radius: 50;
`;

interface IProps {
    grid: number [][];
}

export const GameBoy = (props: IProps) => {

    const {grid} = props;

    return (
        <GameBoyBox>
            <GameScreen renderGrid={ grid }/>
            <LeftSide />
        </GameBoyBox>

    );

};
