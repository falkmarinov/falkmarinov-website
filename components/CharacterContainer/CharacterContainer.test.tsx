import { render, screen } from '@testing-library/react';
import { CharacterContainer } from './CharacterContainer';

describe('<CharacterContainer />', () => {
  it('should render', () => {
    render(<CharacterContainer>I</CharacterContainer>);
  });

  describe('Default', () => {
    it('should be bg-gray-200', () => {
      render(<CharacterContainer>I</CharacterContainer>);
      expect(screen.getByText('I')).toHaveClass('bg-gray-200');
    });

    it('should be a circle', () => {
      render(<CharacterContainer>I</CharacterContainer>);
      expect(screen.getByText('I')).toHaveClass('rounded-full');
    });
  });

  describe('prop: isHovered', () => {
    it('should be bg-gray-300', () => {
      render(<CharacterContainer isHovered>I</CharacterContainer>);
      expect(screen.getByText('I')).toHaveClass('bg-gray-300');
    });
  });
});
