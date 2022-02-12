import { IconType } from "react-icons/lib";
import { Example } from "../../redux/types";

export interface MapState {
  //
}

export interface OwnProps {
  //
}

export interface MapDispatch {
  //
}

export interface Props extends MapState, MapDispatch, OwnProps {
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
