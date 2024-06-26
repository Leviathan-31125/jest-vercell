import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Counter', () => {
  it('Counter initialize display correct', () => {
    render(<App />);
    const countValue = Number(screen.getByTestId('count').textContent);
    expect(countValue).toEqual(0);
  });

  it('Decrement display correct', () => {
    render(<App />);
    const buttonDecrement = screen.getByRole('button', { name: 'Decrement, Skuy' });
    expect(Number(screen.getByTestId('count').textContent)).toEqual(0);

    // after click decrement button
    fireEvent.click(buttonDecrement);
    expect(Number(screen.getByTestId('count').textContent)).toEqual(-1);
  });

  it('Increment display correct', () => {
    render(<App />);
    const buttonIncrement = screen.getByRole('button', { name: 'Increment, Cuy' });
    expect(Number(screen.getByTestId('count').textContent)).toEqual(0);

    // after click increment button
    fireEvent.click(buttonIncrement);
    expect(Number(screen.getByTestId('count').textContent)).toEqual(1);
  });

  it('Restart display correct', () => {
    render(<App />);

    const buttonRestart = screen.getByRole('button', { name: 'Restart' });
    const buttonIncrement = screen.getByRole('button', { name: 'Increment, Cuy' });

    // click button increment 3x
    fireEvent.click(buttonIncrement);
    fireEvent.click(buttonIncrement);
    fireEvent.click(buttonIncrement);
    expect(Number(screen.getByTestId('count').textContent)).toEqual(3);

    // after click restart button
    fireEvent.click(buttonRestart);
    expect(Number(screen.getByTestId('count').textContent)).toEqual(0);
  });
});
