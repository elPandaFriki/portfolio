import './index.scss';
import { StrictMode } from 'react';
import App from './components/App';
import { store } from './redux';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const webContainer = document.getElementById('root');
const reactRoot = createRoot(webContainer!);
reactRoot.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
