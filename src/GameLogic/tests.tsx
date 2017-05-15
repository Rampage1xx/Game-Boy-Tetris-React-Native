import {View} from 'react-native';
import * as React from 'react';
import {shallow} from 'enzyme';

import {createGrid} from './Grid';

describe('testing logic functions', () => {
    it('should generate a grid', () => {
        const grid = createGrid();
        const shallowGrid = shallow(<View>{ grid }</View>);
        expect(shallowGrid.children()).toHaveLength(16);
    });
});
