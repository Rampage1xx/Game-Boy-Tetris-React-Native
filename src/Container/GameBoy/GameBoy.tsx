import * as React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import {GameScreen} from '../../Components/GameScreen/GameScreen';
import {LeftSide} from '../../Components/LeftSide/LeftSide';
import {createViewGrid} from '../../Components/GameScreen/Cells';

export const GameBoyBox = styled.View`
     margin-top: 30;
     margin-left: 30;
     background-color: grey;
     height: 450;
     margin-right: 30;
     border-bottom-right-radius: 50;
`;

interface IProps {
    grid: number [][];
}

export class GameBoy extends React.Component<IProps, any> {
    private grid: any [];
    constructor(props) {
        super(props)
        this.grid = createViewGrid(props.grid);
    }
    public render() {

        return (
            <GameBoyBox>
                <GameScreen renderGrid={ this.grid } />
                <LeftSide />
            </GameBoyBox>

        );

    }

}

const mapStateToProps = (state, ownProps) => {
    const getStoreStatus = (value: string) => (state as Map<string, any>).get(value);

    return {
        grid: getStoreStatus('GameLogicReducer').get('dataGridState')
    };
};

export const GameBoyContainer = connect(mapStateToProps, undefined)(GameBoy);
