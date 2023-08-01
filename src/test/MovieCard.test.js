import { render, cleanup } from '@testing-library/react';
import MovieCard from '../__mock__/MovieCard';

afterEach(() => {
  cleanup();
});

describe('MovieCard', () => {
  it('MovieCard renders correctly', () => {
    const moviecard = render(<MovieCard />);
    expect(moviecard).toMatchSnapshot();
  });
});
