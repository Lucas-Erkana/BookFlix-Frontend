import { render, cleanup } from '@testing-library/react';
import DeleteMovieCard from '../__mock__/DeleteMovieCard';

afterEach(() => {
  cleanup();
});

describe('DeleteMovieCard', () => {
  it('DeleteMovieCard renders correctly', () => {
    const deleteservicecard = render(<DeleteMovieCard />);
    expect(deleteservicecard).toMatchSnapshot();
  });
});
