import { ConnectedProps } from 'react-redux';
import { connector, Categories } from '.';

export interface OwnProps {
    //
}

export interface Props extends OwnProps, ConnectedProps<typeof connector> {
    //
}

export interface Icon {
    radius: number;
    Icon: JSX.Element;
    name: string;
    category: Categories;
}

export interface State {
    icons: Array<Icon>;
}
