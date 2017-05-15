import 'react-native-mock/mock';
import 'react-native';
import * as React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import {createGrid} from './Grid';

describe ('testing logic functions', () => {
    it('should generate a grid', () => {
        const grid = createGrid();

    });
});
