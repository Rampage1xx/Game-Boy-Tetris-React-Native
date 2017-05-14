import * as React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const NavbarContainerStyled = styled.View`
        flex-direction: row
        height: 10%
        width: 100%
        background-color: lightblue
`;

export const Navbar = (props) => {

    return (
        <NavbarContainerStyled />
    );
};

