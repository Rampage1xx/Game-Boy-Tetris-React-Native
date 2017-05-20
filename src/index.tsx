import * as React from 'react';
import 'react-native';
import {Provider} from 'react-redux';
import {AppContainer} from './Container/App/App';
import {store} from './Store/Reducers';

export const Index = (props) => {

    return (
        <Provider store={ store }>
            <AppContainer/>
        </Provider>
    );
};
