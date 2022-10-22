import { fireEvent, render, screen } from '@testing-library/react';

import data from '../../data/initData.json';
import { UsersWidget } from './users-widget';

describe('Test App', () => {
  test('should render user detail', () => {
    render(<UsersWidget users={data} />);
    const button = screen.getAllByTestId('viewButton')[0];
    const user = data[0];

    fireEvent.click(button);

    const username = screen.getByText(user.name);
    const position = screen.getByText(user.position);
    const phone = screen.getByText(user.phone);
    const url = screen.getByText('https://example.com');
    const email = screen.getByText(user.email);

    expect(username).toBeInTheDocument();
    expect(position).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(url).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
