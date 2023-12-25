import './index.scss';
import Root from './components/Root';
import { createRoot } from 'react-dom/client';
import { setPrototypes } from './prototypes';

function setHotReload() {
    if (!import.meta.hot) return;
    import.meta.hot.accept(() => import.meta.hot?.invalidate());
}

function main() {
    const webContainer = document.getElementById('root');
    if (webContainer == null) return;
    setPrototypes();
    setHotReload();
    const reactRoot = createRoot(webContainer);
    reactRoot.render(<Root />);
}

main();
