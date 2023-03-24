import 'jest-styled-components';

import { describe, expect, it } from 'vitest';

import { Button } from '~/components/atoms/Button';
import { renderTest } from '~/utils/renderTest';

describe('Button', () => {
  it('Primary renders correctly', () => {
    const { container } = renderTest(<Button>Hello there!</Button>);

    expect(container).toMatchSnapshot();
  });
});
