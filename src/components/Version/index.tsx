import packageJson from '../../../package.json';
import styles from './styles.module.scss';
import { Component } from 'react';
import { Props, State } from './types';

export default class Version extends Component<Props, State> {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.root}>
                <div className={styles.children}>{children}</div>
                <div className={styles.version}>
                    <div className={styles.message}>
                        {packageJson.version} @ {packageJson.date}
                    </div>
                </div>
            </div>
        );
    }
}
