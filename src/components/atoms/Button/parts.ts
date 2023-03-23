import styled, { css } from 'styled-components';

import { color, typographyMixin } from '~/components/atoms/Typography';

import { ButtonProps } from './types';

export const ButtonBase = styled.button<ButtonProps<unknown>>`
  cursor: pointer;
  padding: 1em;
  border-radius: 0.5em;
  ${typographyMixin({ bold: true })}
`;

const primaryButtonCss = css`
  border: none;
  background-color: ${({ theme }) => theme.colors.indigo};
  ${color('white')}
`;

const secondaryButtonCss = css`
  border: 1px solid ${({ theme }) => theme.colors.indigo};
  background-color: ${({ theme }) => theme.colors.white};
  ${color('indigo')}
`;

export const ButtonPrimary = styled(ButtonBase)`
  ${primaryButtonCss}

  &:hover {
    ${secondaryButtonCss}
  }
`;

export const ButtonSecondary = styled(ButtonBase)`
  ${secondaryButtonCss}

  &:hover {
    ${primaryButtonCss}
  }
`;
