import Component from './Component';
import { connect } from 'react-redux';
import { OwnProps } from './types';

export const connector = connect(
    (state, ownProps: OwnProps) => {
        return {};
    },
    (dispatch, ownProps) => {
        return {};
    }
);

export enum Categories {
    LANGUAGES = 0,
    FRONTEND = 1,
    BACKEND = 2,
    DATABASES = 3,
    DEPLOYMENT = 4,
    COMMUNICATIONS = 5
}

export default connector(Component);
