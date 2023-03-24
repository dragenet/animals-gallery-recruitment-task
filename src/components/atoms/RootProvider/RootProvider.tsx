import { ThemeProvider } from 'styled-components';

import { RootProviderProps } from '~/components/atoms/RootProvider/types';
import { theme } from '~/theme';

export const RootProvider = ({ children }: RootProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
