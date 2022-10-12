import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store';


test('renders learn react link', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  const linkElement = screen.getByText("a");
  expect(linkElement).toBeInTheDocument();
});

// It warns that my reducer path ArtsApi is not added to the store
