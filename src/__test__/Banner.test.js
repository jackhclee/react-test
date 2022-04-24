// __tests__/fetch.test.js
import React from 'react'
import {rest} from 'msw'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Banner from '../Banner'

test('loads and displays greeting', async () => {
  render(<Banner message="Morning" />)

  let v = screen.getByTestId("test-1")
 // console.log(v.childNodes[0]);
  fireEvent.click(screen.getByText('Login'))
  expect(v.childNodes[0].childNodes[0].textContent).toBe("Morning John!")


  //await waitFor(() => screen.getByRole('heading'))

//   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//   expect(screen.getByRole('button')).toBeDisabled()
})

