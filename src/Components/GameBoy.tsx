import * as React from 'react';
import styled from 'styled-components/native';
import {BottomLeftSide} from './BottomLeftSide/LeftSide';
import {BottomRightSide} from './BottomRightSide/RightSide';
import {GameScreen} from './GameScreen/GameScreen';

export const GameBoyBox = styled.View`
     margin-top: 30;
     margin-left: 30;
     background-color: grey;
     height: 450;
     margin-right: 30;
     border-bottom-right-radius: 50;
     elevation: 20;
`;
export const BottomStyled = styled.View`
        flex-direction:row;
        height: 100%;
        width: 100%;

`

interface IProps {
    grid: number [][];
}

export const GameBoy = (props: IProps) => {

    const {grid} = props;

    return (
        <GameBoyBox>
            <GameScreen renderGrid={ grid }/>
            <BottomStyled>
            <BottomLeftSide />
            <BottomRightSide />
            </BottomStyled>
        </GameBoyBox>

    );

};
