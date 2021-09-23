import { render } from '@testing-library/react';
import Listing from '../Listing';

test('tests listing component', () => {
const { getByText } = render(<Listing  name = "Property 1" area = {10}  price = {12000} imageLink ="" _id = ""/>)
  expect(getByText(/Property 1/i)).toBeTruthy();
  expect(getByText(/12000/i)).toBeTruthy();
  expect(getByText(/10/i)).toBeTruthy();

});
