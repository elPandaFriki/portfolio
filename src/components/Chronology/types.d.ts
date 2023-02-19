import { ConnectedProps } from 'react-redux';

export interface OwnProps {
    //
}

export interface Props extends OwnProps, ConnectedProps<typeof connector> {
    //
}
