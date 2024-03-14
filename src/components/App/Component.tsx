import { Component } from 'react';
import Presentation from '../Presentation';
import styles from './styles.module.scss';
import type { Props, State } from './types';

export default class App extends Component<Props, State> {
    state: State = {
        //
    };

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.presentation} id={'home'}>
                    <Presentation />
                </div>
                {/*
                <div className={styles.presentation} id={'languages'}></div>
                <div className={styles.presentation} id={'frontend'}></div>
                <div className={styles.presentation} id={'backend'}></div>
                <div className={styles.presentation} id={'databases'}></div>
                <div className={styles.presentation} id={'deployment'}></div>
                <div className={styles.presentation} id={'communications'}></div>
                 */}
            </div>
        );
    }
}
