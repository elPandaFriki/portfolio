import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Root from '.';

describe('Accordion test', () => {
    test('should show title all the time', () => {
        render(<Root />);
        expect(screen.getByText(/David/i)).toBeDefined();
    });
});
