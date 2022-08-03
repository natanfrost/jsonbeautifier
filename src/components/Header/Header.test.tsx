import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('should render correctly all elements', async() => {
    render(<Header/>);    

    const logo = screen.getByAltText('JSON Beautifier');
    expect(logo).toBeInTheDocument();

    const github = screen.getByRole('github-link');
    expect(github).toHaveAttribute('href', 'https://github.com/natanfrost/')
  })
})