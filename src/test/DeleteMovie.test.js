import { render, cleanup } from '@testing-library/react';
import DeleteMovies from '../__mock__/DeleteMovies';

afterEach(() => {
  cleanup();
});

describe('DeleteMovies', () => {
  it('DeleteMovies renders correctly', () => {
    const deleteservices = render(<DeleteMovies />);
    expect(deleteservices).toMatchSnapshot();
  });
});
