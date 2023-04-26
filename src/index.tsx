import './index.scss';
import Root from './components/Root';
import { createRoot } from 'react-dom/client';

if (import.meta.hot) {
    import.meta.hot.accept(() => import.meta.hot?.invalidate());
}

const webContainer = document.getElementById('root');
const reactRoot = createRoot(webContainer!);
reactRoot.render(<Root />);
