import { render, cleanup } from '@testing-library/react';
import Reservations from '../__mock__/Reservations';

afterEach(() => {
  cleanup();
});

describe('Reservations', () => {
  it('Reservations renders correctly', () => {
    const reservations = render(<Reservations />);
    expect(reservations).toMatchSnapshot();
  });
});
