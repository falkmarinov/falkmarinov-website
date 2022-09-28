import { render, screen } from '@testing-library/react';
import { Character } from './Character';

describe('<Character />', () => {
  it('should render', () => {
    render(<Character>I</Character>);
  });

  describe('prop: isHovered', () => {
    it('should be bg-gray-300', () => {
      render(<Character isHovered>I</Character>);
      const child = screen.getByText('I');
      const parent = child.parentElement as HTMLElement;
      expect(parent).toHaveClass('bg-gray-300');
      expect(parent).not.toHaveClass('bg-gray-200');
    });

    it('otherwise be bg-gray-200', () => {
      render(<Character>I</Character>);
      const child = screen.getByText('I');
      const parent = child.parentElement as HTMLElement;
      expect(parent).toHaveClass('bg-gray-200');
      expect(parent).not.toHaveClass('bg-gray-300');
    });
  });
});
