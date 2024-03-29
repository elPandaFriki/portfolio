import type { IconType } from 'react-icons/lib';
import type { connector } from '.';
import type { ConnectedProps } from 'react-redux';

export type OwnProps = {
    //
}

export type Props =  OwnProps& ConnectedProps<typeof connector>;

export type Icon=  {
    radius: number;
    Icon: IconType;
    name: string;
    category: string;
}

export type State = {
    //
}

export type IconElement = {
    name: string;
    Icon: IconType;
}
