import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../app/store';

test('renders Shopping List header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const headerElement = screen.getByRole('heading', { name: /Shopping List/i });
  expect(headerElement).toBeInTheDocument();
});
