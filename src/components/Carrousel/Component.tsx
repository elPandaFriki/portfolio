import { Component } from 'react';
import { Props, State } from './types';
import styles from './styles.module.scss';

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

    interval: ReturnType<typeof setInterval> | null = null;

    componentDidMount() {
        const { interval } = this.props;
        this.generateIcon();
        if (this.interval != null) clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.generateIcon();
        }, interval || 1000);
    }

    componentWillUnmount() {
        if (this.interval != null) clearInterval(this.interval);
    }

    render() {
        const { onElementClick } = this.props;
        const { Element, name } = this.state;
        return (
            <div
                id={name}
                className={styles.root}
                onClick={() => {
                    onElementClick(name);
                }}
            >
                {Element}
            </div>
        );
    }
}
