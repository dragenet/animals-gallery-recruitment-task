import styled from 'styled-components';

import { TypographyProps } from './types';
import { typographyMixin } from './utils';

export const H1 = styled.h1<TypographyProps>`
  ${typographyMixin({ fontSize: 'large' })}
`;

export const Subtitle = styled.p<TypographyProps>`
  ${typographyMixin({ fontSize: 'small', bold: true })}
`;

export const Body = styled.p<TypographyProps>`
  ${typographyMixin()}
`;
