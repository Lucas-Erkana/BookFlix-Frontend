import { render, cleanup } from '@testing-library/react';
import Home from '../__mock__/Home';

afterEach(() => {
  cleanup();
});

describe('Home', () => {
  it('Home renders correctly', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
