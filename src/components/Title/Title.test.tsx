import { render } from '@testing-library/react';

import { Title } from './Title';

describe('<Title />', () => {
  describe.each([['First Title'], ['Second Title']])(
    'should render different titles',
    (text) => {
      it(text, () => {
        const { container } = render(<Title>{text}</Title>);
        expect(container).toMatchSnapshot();
      });
    }
  );
});
