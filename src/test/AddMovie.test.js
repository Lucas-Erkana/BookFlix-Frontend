import { render, cleanup } from '@testing-library/react';
import AddMovie from '../__mock__/AddMovie';

afterEach(() => {
  cleanup();
});

describe('AddMovie', () => {
  it('AddMovie renders correctly', () => {
    const addmovie = render(<AddMovie />);
    expect(addmovie).toMatchSnapshot();
  });
});
