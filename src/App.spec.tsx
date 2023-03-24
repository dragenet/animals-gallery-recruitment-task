import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('Test app', async () => {
  it('snapshots', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
