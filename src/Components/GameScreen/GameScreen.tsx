import * as React from 'react';
import styled from 'styled-components/native';
import {createViewGrid} from './Cells';

const GameScreenBoxStyled = styled.View`
            margin-top: 10%;
            margin-left: 10%;
            margin-right: 10%;
            background-color:#556b2f;
            width: 80%;
            height: 50%;
     border-bottom-right-radius: 50;

`;

interface IProps {
    renderGrid: any []
}

export class GameScreen extends React.Component<IProps, any> {

    public render() {
        return (

            <GameScreenBoxStyled >
                { this.props.renderGrid }
            </GameScreenBoxStyled>
        );
    }
}
