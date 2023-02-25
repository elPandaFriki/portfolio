import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Root from '.';

test('Loads and displays the web', async () => {
    render(<Root />);
});
