import { render } from '@testing-library/react';

import { AiFillApi } from 'react-icons/ai';

import { Character } from './Character';

describe('<Character />', () => {
  describe.each([
    ['string', 'I'],
    ['number', 1],
    ['icon', <AiFillApi key='AiFillApi' />],
  ])('should render different character types', (type, value) => {
    it(`${type}`, () => {
      const { container } = render(<Character>{value}</Character>);
      expect(container).toMatchSnapshot();
    });
  });

  describe.each([
    ['should be black and white', true],
    ['should be gray and black bordered', false],
  ])('prop: isHovered', (message, value) => {
    it(`${value} => ${message}`, () => {
      const { container } = render(<Character isHovered={value}>I</Character>);
      expect(container).toMatchSnapshot();
    });
  });
});
