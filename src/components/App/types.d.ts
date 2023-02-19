import { IconType } from 'react-icons/lib';
import { connector } from '.';

export interface OwnProps {
    //
}

export interface Props extends OwnProps, ConnectedProps<typeof connector> {
    //
}

export interface Icon {
    radius: number;
    Icon: IconType;
    name: string;
    category: string;
}

export interface State {
    //
}

export interface IconElement {
    name: string;
    Icon: IconType;
}
