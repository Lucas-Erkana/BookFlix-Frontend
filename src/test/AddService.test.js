import { render, cleanup } from '@testing-library/react';
import AddService from '../__mock__/AddService';

afterEach(() => {
  cleanup();
});

describe('AddService', () => {
  it('AddService renders correctly', () => {
    const addservice = render(<AddService />);
    expect(addservice).toMatchSnapshot();
  });
});
