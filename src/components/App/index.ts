import Component from './Component';
import { connect } from 'react-redux';
import { OwnProps } from './types';

export const connector = connect(
    (store: ReduxStore, ownProps: OwnProps) => {
        return {};
    },
    (dispatch: ReduxDispatch, ownProps: OwnProps) => {
        return {};
    }
);

export default connector(Component);
