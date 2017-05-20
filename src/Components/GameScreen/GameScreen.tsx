import * as React from 'react';
import styled from 'styled-components/native';

const GameScreenBoxStyled = styled.View`
            margin-top: 6%;
            margin-left: 5%;
            margin-right: 5%;
            background-color:#556b2f;
            width: 90%;
            height: 50%;

`;

interface IProps {
    renderGrid: any [][];
}

export const GameScreen = (props: IProps) => {
    const {renderGrid} = props;
    console.log(renderGrid);
    return (
        <GameScreenBoxStyled >
            {renderGrid}
        </GameScreenBoxStyled>
    );

};
