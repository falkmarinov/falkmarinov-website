import { render, screen } from '@testing-library/react';
import { CharacterContainer } from './CharacterContainer';

describe('<CharacterContainer />', () => {
  it('should render', () => {
    render(<CharacterContainer>I</CharacterContainer>);
  });

  describe('prop: isHovered', () => {
    it('should be bg-gray-300', () => {
      render(<CharacterContainer isHovered>I</CharacterContainer>);
      expect(screen.getByText('I')).toHaveClass('bg-gray-300');
      expect(screen.getByText('I')).not.toHaveClass('bg-gray-200');
    });

    it('otherwise be bg-gray-200', () => {
      render(<CharacterContainer>I</CharacterContainer>);
      expect(screen.getByText('I')).toHaveClass('bg-gray-200');
      expect(screen.getByText('I')).not.toHaveClass('bg-gray-300');
    });
  });
});
