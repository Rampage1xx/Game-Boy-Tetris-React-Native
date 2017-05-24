import * as React from 'react';
import styled from 'styled-components/native';
import {LeftButton} from './LeftButton';
import {RightButton} from './RightButton';
// CONTAINER
const RightSideBox = styled.View`
    flex:1;
    border:1;
    border-color:black;
    flex-direction:row
    margin-right: 10;
`;

export const FillerColumns = styled.View`
    flex:1;
    height:45%;
    justify-content:center;
    align-items:center;
`;


export const BottomRightSide = (props) => {

    return (

        <RightSideBox>

            <FillerColumns/>
            <FillerColumns/>

            <LeftButton/>

            <RightButton/>

        </RightSideBox>
    );
};
