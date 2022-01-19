import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Forgot your password\?/ })
    ).toBeInTheDocument()
  })

  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument()
    expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument()
  })
})
