import styled from 'styled-components';

import { Button } from '~/components/atoms/Button';
import { H1 } from '~/components/atoms/Typography';

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.gradients.backgroundDefault};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledH1 = styled(H1)`
  margin-bottom: 0;
`;

export const StyledButton = styled(Button)`
  margin-top: 3em;
`;
