import { render, screen } from '@testing-library/react';
import { IconContainer } from './IconContainer';

describe('<IconContainer />', () => {
  it('should render', () => {
    render(<IconContainer>I</IconContainer>);
  });

  describe('default', () => {
    it('should be bg-gray-200', () => {
      render(<IconContainer>I</IconContainer>);
      expect(screen.getByText('I')).toHaveClass('bg-gray-200');
    });

    it('should be a circle', () => {
      render(<IconContainer>I</IconContainer>);
      expect(screen.getByText('I')).toHaveClass('rounded-full');
    });
  });

  describe('prop: isHovered', () => {
    it('should be bg-gray-300', () => {
      render(<IconContainer isHovered>I</IconContainer>);
      expect(screen.getByText('I')).toHaveClass('bg-gray-300');
    });
  });
});
