import * as React from 'react';
import {Text, View} from 'react-native';
import {Navbar} from './Components/navbar/Navbar';
import {GameBoy} from './Container/GameBoy/GameBoy';

export class Index extends React.Component<any, any> {

    public render() {
        return (
            <View>
                <Navbar />
                <GameBoy/>
            </View>
        );
    }
}
