import * as React from 'react';
import styled from 'styled-components/native';
import {FillerColumns} from './RightSide';

const LeftButtonStyled = styled.View`
    width: 35;
    height: 35;
    border-radius:50;
    justify-content: center;
    align-items:center;
    background-color: red;
    elevation:5;
`;
const ButtonTextStyled = styled.Text`
    font-size: 20;
`;
export const LeftButton = (props) => {

    return (

        <FillerColumns>
            <LeftButtonStyled>
                <ButtonTextStyled>
                    B
                </ButtonTextStyled>
            </LeftButtonStyled>

        </FillerColumns>
    );
};
