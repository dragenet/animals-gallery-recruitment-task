import { render } from '@testing-library/react';

import { RootProvider } from '~/components/atoms/RootProvider';

export const renderTest = (children: JSX.Element) =>
  render(<RootProvider>{children}</RootProvider>);
