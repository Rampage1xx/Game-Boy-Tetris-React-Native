import * as React from 'react';
import styled from 'styled-components/native';
import {FillerColumns} from './RightSide';

const RightButtonBoxStyled = styled.View`
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
const RightButtonStyled = styled.View`
    align-self: flex-end
    width:35;
    height:35;
    border-radius:50;
    background-color:green;
    justify-content: center;
    align-items:center;
    elevation:5;
`;

const ButtonTextStyled = styled.Text`
    font-size: 20;
`;

export const RightButton = (props) => {

    return (
        <FillerColumns>
            <RightButtonBoxStyled>

                <RightButtonStyled>
                    <ButtonTextStyled>
                        A
                    </ButtonTextStyled>
                </RightButtonStyled>

            </RightButtonBoxStyled>

            <FillerStyled/>
        </FillerColumns>
    );
};
