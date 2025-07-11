import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renderiza corretamente o título principal', () => {
    render(<App />);
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
  });

  it('renderiza botão de contador e incrementa ao clicar', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });

  it('renderiza os logos do Vite e React', () => {
    render(<App />);
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
  });
});
