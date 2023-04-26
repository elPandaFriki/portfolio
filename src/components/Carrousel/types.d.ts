import { ReactNode } from 'react';

export interface State {
    name: string;
    Element: ReactNode;
}

export interface Props {
    interval?: number;
    elements: Array<CarrouselElement>;
}

export interface CarrouselElement {
    name: string;
    Element: ReactNode;
}
