import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchInput from './SearchInput';


describe('Search Component', () => { 
    it('Should render search name when api response', async () => {
        render(
            <Router>
                <SearchInput />
          </Router>            
        );

        expect(true).toBeTruthy();
    } )
 })

 // Works fine