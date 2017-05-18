import * as React from 'react';
import Styled from 'styled-components/native';
import {Navbar} from './Components/navbar/Navbar';
import {GameBoy} from './Container/GameBoy/GameBoy';

const IndexBox = Styled.View`
    width: 100%;
    height: 100%;
`;

export class Index extends React.Component<any, any> {

    public render() {
        return (
            <IndexBox>
                <Navbar />
                <GameBoy/>
            </IndexBox>
        );
    }
}
