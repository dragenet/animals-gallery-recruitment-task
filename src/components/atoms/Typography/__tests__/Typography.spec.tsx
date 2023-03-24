import { describe, expect, it } from 'vitest';

import { renderTest } from '~/utils/renderTest';

import { Body, H1, Subtitle } from '../Typography';

describe('Typography', () => {
  it('H1 renders correctly', () => {
    const { container } = renderTest(<H1>Heading 1</H1>);

    expect(container).toMatchSnapshot();
  });

  it('Subtitle renders correctly', () => {
    const { container } = renderTest(<Subtitle>Subtitle</Subtitle>);

    expect(container).toMatchSnapshot();
  });

  it('Body renders correctly', () => {
    const { container } = renderTest(<Body>Body</Body>);

    expect(container).toMatchSnapshot();
  });
});
