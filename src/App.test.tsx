import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as users } from './store/users/users';
import  App  from './App';

describe('Test App component', () => {
  const store = configureStore({
    reducer: {
      users,
    },
  });
  
  it('render App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('View All')).toBeInTheDocument();
  });
});
