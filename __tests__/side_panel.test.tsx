import SidePanel from '../components/side_panel';
import { render, screen } from '@testing-library/react';
import fetch from 'jest-fetch-mock';
import { SectionStateProvider } from '../context/section_state_provider';

describe('SidePanel', () => {
  afterEach(() => {
    fetch.resetMocks();
  }),
  beforeEach(async () => {
    fetch.mockResponseOnce(JSON.stringify({ url: '' }));
    render(
      <SectionStateProvider>
        <SidePanel baseUrl='/' />
      </SectionStateProvider>
    );
  }),

  // test h3 is in the side panel
  it('renders a h3', () => {
    const h3 = screen.getByRole('heading', { name: /Saadat Ali/i, level: 2 })
    expect(h3).toBeInTheDocument()
  })

  // test profile image is in the side panel
  it('renders a profile image', () => {
    const image = screen.getByTestId('profile_image')
    expect(image).toBeInTheDocument()
  })

  // test user profession is in side panel
  it('renders a user profession', () => {
    const profession = screen.getByTestId(/profession/i)
    expect(profession).toBeInTheDocument()
  })

  // social media icons are in the side panel
  it('renders social media icons', () => {
    const icons = screen.getAllByTestId('social-media-icon')
    expect(icons).toHaveLength(3)
  })

  // test email is in the side panel
  it('renders an email', () => {
    const email = screen.getByTestId(/email/i)
    expect(email).toBeInTheDocument()
  })

  // test phone number is in the side panel
  it('renders a phone number', () => {
    const phone = screen.getByTestId(/phone/i)
    expect(phone).toBeInTheDocument()
  })

  // test age is in the side panel
  it('renders an age', () => {
    const age = screen.getByTestId(/^age$/i)
    expect(age).toBeInTheDocument()
  })

  // test location is in the side panel
  it('renders a location', () => {
    const location = screen.getByTestId(/location/i)
    expect(location).toBeInTheDocument()
  })

  // test languages are in the side panel
  it('renders languages', () => {
    const languages = screen.getAllByTestId(/language/i)
    expect(languages).toHaveLength(2)
  })
})
