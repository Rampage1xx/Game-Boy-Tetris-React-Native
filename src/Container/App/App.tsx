import * as React from 'react';
import {connect} from 'react-redux';
import Styled from 'styled-components/native';
import {GameBoy} from '../../Components/GameBoy';
import {createViewGrid} from '../../Components/GameScreen/Cells';
import {Navbar} from '../../Components/navbar/Navbar';

const IndexBox = Styled.View`

`;

interface IProps {
    grid: number[][];
}
class App extends React.PureComponent<IProps, any> {

    private viewGrid: any[];

    constructor(props) {
        super(props);
        this.viewGrid = createViewGrid(props.grid);
    }

    private componentWillUpdate(nextProps, nextState) {

        this.viewGrid = createViewGrid(nextProps.grid);
    }

    public render() {

        return (
            <IndexBox>
                <Navbar />
                <GameBoy grid={ this.viewGrid }/>
            </IndexBox>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const getStoreStatus = (value: string) => (state as Map<string, any>).get(value);

    return {
        grid: getStoreStatus('GameLogicReducer').get('dataGridState')
    };
};

export const AppContainer = connect(mapStateToProps, undefined)(App);
