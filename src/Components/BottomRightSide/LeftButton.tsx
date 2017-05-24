import * as React from 'react';
import styled from 'styled-components/native';
import {FillerColumns} from './RightSide';

const LeftButtonBoxStyled = styled.View`
    flex:1;
    width: 35;
    height: 35;
    flex-direction: row;
`;

const FillerStyled = styled.View`
    flex:1;
    width: 35;
    height: 35;
    flex-direction: row;

`;
const LeftButtonStyled = styled.View`
    width: 35;
    height: 35;
    border-radius:50;
    justify-content: center;
    align-items:center;
    background-color: red;
    elevation:5;
    align-self: flex-end

`;
const ButtonTextStyled = styled.Text`
    font-size: 20;
`;
export const LeftButton = (props) => {

    return (

        <FillerColumns>
            <LeftButtonBoxStyled>
                <LeftButtonStyled>
                    <ButtonTextStyled>
                        B
                    </ButtonTextStyled>
                </LeftButtonStyled>
            </LeftButtonBoxStyled>
            <FillerStyled/>

        </FillerColumns>
    );
};
