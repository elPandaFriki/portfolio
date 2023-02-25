import './index.scss';
import Root from './components/Root';
import { createRoot } from 'react-dom/client';

const webContainer = document.getElementById('root');
const reactRoot = createRoot(webContainer!);
reactRoot.render(
    <Root/>
);
