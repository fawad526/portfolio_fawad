import { render } from '@testing-library/react'
import Home from '@/pages/index'
import fetch from 'jest-fetch-mock';
import { SectionStateProvider } from '../context/section_state_provider';

afterEach(() => {
  fetch.resetMocks();
}),
beforeEach(async () => {
  fetch.mockResponseOnce(JSON.stringify({ url: '' }));
}),

it('renders homepage unchanged', () => {
  const { container } = render(
    <SectionStateProvider>
      <Home />
    </SectionStateProvider>
  )
  expect(container).toMatchSnapshot()
})
