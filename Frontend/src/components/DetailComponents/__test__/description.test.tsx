import { render } from '@testing-library/react';
import Description from '../description';

test('tests description component', () => {
const { getByText } = render(<Description description="Perfect and Beautiful"/>)
  expect(getByText(/Perfect and Beautiful/i)).toBeTruthy();
});