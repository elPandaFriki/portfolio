import { ReactNode } from 'react';

export type State = {
    name: string;
    Element: ReactNode;
}

export type Props=  {
    interval?: number;
    elements: Array<CarrouselElement>;
}

export type CarrouselElement = {
    name: string;
    Element: ReactNode;
}
