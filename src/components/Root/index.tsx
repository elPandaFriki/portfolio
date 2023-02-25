import { Component } from 'react';
import { StrictMode } from 'react';
import App from '../App';
import { store } from '../../redux';
import { Provider } from 'react-redux';

export default class Root extends Component<{}, {}> {
    render() {
        return <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
    }
}