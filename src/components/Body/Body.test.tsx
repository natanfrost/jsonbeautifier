import { render, screen, fireEvent,  } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import JsonFormatted from '../JsonFormatted/JsonFormatted';

import Body from './Body';

describe('<JsonRow />', () => {
    it('should render', async() => {
      render(<Body/>);    
    })

    it('should generate json object when button clicked', async () => {
        jest.useFakeTimers();
        const { rerender } = render(<Body/>);    

        const json = '{"name":"John", "age":30, "car":null}';
        let textBox = screen.getByRole('input-json');

        textBox.textContent = json;
        fireEvent.change(screen.getByRole('input-json'));


        fireEvent.click(screen.getByRole('add-new'));            
        
        
        const el = screen.getByTestId('json-formatted');
        
        
            
                
    })
})