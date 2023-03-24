import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '~/components/atoms/Button';
import { renderTest } from '~/utils/renderTest';

describe('Button', () => {
  it('Primary renders correctly', () => {
    const { container } = renderTest(<Button>Hello there!</Button>);

    expect(container).toMatchSnapshot();
  });

  it('Secondary renders correctly', () => {
    const { container } = renderTest(<Button variant="secondary">Hello there secondary!</Button>);

    expect(container).toMatchSnapshot();
  });

  it('is clickable', async () => {
    const handleClickSpy = vi.fn();
    const { user } = renderTest(
      <Button variant="secondary" onClick={handleClickSpy}>
        Hello there secondary!
      </Button>,
    );

    await user.click(screen.getByRole('button'));

    expect(handleClickSpy).toHaveBeenCalledOnce();
  });
});
