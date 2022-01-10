import { render, screen } from '@testing-library/react'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let desktopHeanding: Element
  let mobileHeanding: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )
    desktopHeanding = screen.getByTestId('desktop')
    mobileHeanding = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeanding.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeanding.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the media is passed', () => {
    expect(desktopHeanding.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })

    expect(mobileHeanding.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
