import { describe, expect, it } from 'vitest';

import { RootProvider } from '~/components/atoms/RootProvider';
import { renderTest } from '~/utils/renderTest';

describe('RootProvider', () => {
  it('children renders correctly', () => {
    const { container } = renderTest(
      <RootProvider>
        <div>I am here</div>
      </RootProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
