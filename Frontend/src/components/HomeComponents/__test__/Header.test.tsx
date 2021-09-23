import { render } from '@testing-library/react';
import Header from '../Header';

test('tests header component', () => {
const { getByText } = render(<Header title="Test title" subHeading= "Test Subheading" />)
  expect(getByText(/Test title/i)).toBeTruthy();
  expect(getByText(/Test Subheading/i)).toBeTruthy();

});
