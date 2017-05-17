import * as React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {createGrid} from './Cells';

const GameScreenBoxStyled = styled.View`
            margin-top: 10%;
            margin-left: 10%;
            margin-right: 10%;
            background-color:#556b2f;
            width: 80%;
            height: 50%;
     border-bottom-right-radius: 50;

`;



export class GameScreen extends React.Component<any, any> {
    private grid: any[];

    constructor(props) {
        super(props);
        this.grid = createGrid();
    }

    public render() {
        return (

            <GameScreenBoxStyled >
                { this.grid }
            </GameScreenBoxStyled>
        );
    }
}
