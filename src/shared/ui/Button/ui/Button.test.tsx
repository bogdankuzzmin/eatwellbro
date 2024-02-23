import { render, screen } from '@testing-library/react';
import Button from 'shared/ui/Button/';

describe('Button', () => {
  test('Test button text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('Test full width mode', () => {
    render(<Button fullWidth>Full width mode</Button>);
    expect(screen.getByText('Full width mode')).toHaveClass('fullWidth');
  });
});