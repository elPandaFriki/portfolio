import { ConnectedProps } from 'react-redux';
import { connector, Categories } from '.';

export type OwnProps=  {
    //
}

export type Props =  OwnProps & ConnectedProps<typeof connector>;

export type Icon=  {
    radius: number;
    Icon: JSX.Element;
    name: string;
    category: Categories;
}

export type State = {
    icons: Array<Icon>;
}
