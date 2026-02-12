import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import fetch from 'jest-fetch-mock';
import { SectionStateProvider } from '../context/section_state_provider';

describe('Home', () => {
  afterEach(() => {
    fetch.resetMocks();
  }),

  beforeEach(async () => {
    fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));
    render(
      <SectionStateProvider>
        <Home />
      </SectionStateProvider>
    );
  }),

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /I'm Saadat Ali Second Container/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
