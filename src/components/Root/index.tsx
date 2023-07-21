import { Component } from 'react';
import { StrictMode } from 'react';
import App from '../App';
import { store } from '../../redux';
import { Provider } from 'react-redux';
import Version from '../Version';
import { Props, State } from './types';

export default class Root extends Component<Props, State> {
    render() {
        return (
            <StrictMode>
                <Provider store={store}>
                    <Version>
                        <App />
                    </Version>
                </Provider>
            </StrictMode>
        );
    }
}
