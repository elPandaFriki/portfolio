export interface State {
    name: string;
    Element: JSX.Element | null;
}

export interface Props {
    interval?: number;
    elements: Array<CarrouselElement>;
}

export interface CarrouselElement {
    name: string;
    Element: JSX.Element;
}
