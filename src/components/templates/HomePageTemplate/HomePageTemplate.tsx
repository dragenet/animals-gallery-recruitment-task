import { Link } from 'react-router-dom';

import { Subtitle } from '~/components/atoms/Typography';
import { paths } from '~/router';

import { BackgroundWrapper, StyledButton, StyledH1 } from './parts';

export const HomePageTemplate = () => {
  return (
    <BackgroundWrapper>
      <StyledH1 color="white">Animals Gallery</StyledH1>
      <Subtitle color="white">Your ultimate place to find awensome animals photos.</Subtitle>
      <Link to={paths.gallery}>
        <StyledButton variant="secondary">Get started</StyledButton>
      </Link>
    </BackgroundWrapper>
  );
};
