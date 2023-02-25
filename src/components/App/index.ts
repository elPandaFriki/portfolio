import Component from './Component';
import { connect } from 'react-redux';
import { OwnProps } from './types';

export const connector = connect(
    (store: Redux.Store, ownProps: OwnProps) => {
        return {};
    },
    (dispatch: Redux.Dispatch, ownProps: OwnProps) => {
        return {};
    }
);

export default connector(Component);
