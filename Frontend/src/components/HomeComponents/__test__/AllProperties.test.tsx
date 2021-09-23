import { render } from '@testing-library/react'
import AllProperties from '../AllProperties'

test('tests All properties component', () => {
  const { getByText } = render(<AllProperties />)
  expect(getByText(/CAN'T DECIDE ?/i)).toBeTruthy()
  expect(getByText(/Call us now!!/i)).toBeTruthy()
  expect(getByText(/Click Here/i)).toHaveAttribute('disabled')
})
