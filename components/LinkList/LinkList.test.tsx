import { render, screen, within } from '@testing-library/react';

import { FaAddressBook } from 'react-icons/fa';
import { URL } from 'url';

import { LinkList } from './LinkList';

describe('<LinkList />', () => {
  it('should render', () => {
    render(
      <LinkList
        linkItems={[
          {
            icon: <FaAddressBook />,
            label: 'Example',
            url: new URL('https://example.com/'),
          },
        ]}
      />
    );
  });
});
