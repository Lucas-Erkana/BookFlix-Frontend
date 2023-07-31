import { render, cleanup } from '@testing-library/react';
import SignIn from '../__mock__/SignIn';

afterEach(() => {
  cleanup();
});

describe('SignIn', () => {
  it('SignIn renders correctly', () => {
    const signin = render(<SignIn />);
    expect(signin).toMatchSnapshot();
  });
});
