import { render } from '@testing-library/react';

import { FaAddressBook } from 'react-icons/fa';

import { LinkList } from './LinkList';

describe('<LinkList />', () => {
  describe('should render different amounts of items', () => {
    it('One item', () => {
      const { container } = render(
        <LinkList
          linkItems={[
            {
              icon: <FaAddressBook />,
              label: 'Example',
              url: 'https://www.example.com/',
            },
          ]}
        />
      );

      expect(container).toMatchSnapshot();
    });

    it('Two items', () => {
      const { container } = render(
        <LinkList
          linkItems={[
            {
              icon: <FaAddressBook />,
              label: 'Example 1',
              url: 'https://www.example.com/',
            },
            {
              icon: <FaAddressBook />,
              label: 'Example 2',
              url: 'https://www.example.com/',
            },
          ]}
        />
      );

      expect(container).toMatchSnapshot();
    });
  });
});
