import { render, screen } from '@testing-library/react';
import JsonRow from './JsonRow';

describe('<JsonRow />', () => {
  it('should render', async() => {
    render(<JsonRow json={'key: value'}/>);    
  })

  it('should be bold on left side', () => {
    const el = '            "category":"reference",';
    render(<JsonRow json={el}/>);    
    
    const xxx = screen.getByRole('span', {name: 'key'});

    expect(xxx).toHaveStyle({
      'font-weight': '700'
    })
  })

  it('should have left span empty when string does not have ":"', () => {
    const el = '			},';
    render(<JsonRow json={el}/>);    
    const xxx = screen.queryByRole('span', {name: 'key'});
    
    expect(xxx).toBeEmptyDOMElement();
  })

})