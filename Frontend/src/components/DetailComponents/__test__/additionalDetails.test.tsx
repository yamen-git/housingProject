import { render } from '@testing-library/react';
import AdditionalDetails from '../additionalDetails';

test('tests All additional details component', () => {
const { getByText } = render(<AdditionalDetails builtInYear={2010} parking="yes" view="Beautiful"/>)
  expect(getByText(/2010/i)).toBeTruthy();
  expect(getByText(/yes/i)).toBeTruthy();
  expect(getByText(/Beautiful/i)).toBeTruthy();

});