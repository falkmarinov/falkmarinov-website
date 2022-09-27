import { render, screen } from '@testing-library/react';

import { Stack } from './Stack';

describe('<Stack />', () => {
  it('should render', () => {
    render(
      <Stack>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </Stack>
    );
  });
});
