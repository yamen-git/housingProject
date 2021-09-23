import { render } from '@testing-library/react';
import DetailSideBar from '../detailSideBar';

test('tests DetailSideBar component', () => {
const { getByText } = render(<DetailSideBar area={1222} baths={5} beds={11} price={1200} propertyName = "Test Property"/>)
  expect(getByText(/Test Property/i)).toBeTruthy();
  expect(getByText(/1222/i)).toBeTruthy();
  expect(getByText(/5/i)).toBeTruthy();
  expect(getByText(/1200/i)).toBeTruthy();
  expect(getByText(/11/i)).toBeTruthy();
});