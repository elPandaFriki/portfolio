import { Component } from 'react';
import { Props, State } from './types';

export default class Carrousel extends Component<Props, State> {
    state: State = {
        name: '',
        Element: null
    };

    elementIndex = -1;

    generateIcon = () => {
        const { elements } = this.props;
        this.elementIndex += 1;
        if (this.elementIndex > elements.length - 1) this.elementIndex = 0;
        const element = elements[this.elementIndex];
        this.setState({
            name: element.name,
            Element: element.Element
        });
    };

    interval = setInterval(() => {}, Number.MAX_SAFE_INTEGER);

    componentDidMount() {
        const { interval } = this.props;
        this.generateIcon();
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.generateIcon();
        }, interval || 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { Element, name } = this.state;
        return <div id={name}>{Element}</div>;
    }
}
