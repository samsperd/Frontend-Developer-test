import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import Search from "./Search"

describe('Search Component', () => { 
    it('Should render search name when api response', async () => {
        render(
            <Router>
                <Provider store={store}>
                    <Search />
                </Provider>
          </Router>            
        );
        const item = screen.getByText("a");
        expect(item).toBeInTheDocument();
    } )
 })

 // It could not