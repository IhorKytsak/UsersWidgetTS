import React from 'react';

import { render, screen } from '@testing-library/react';

import { UserInformation } from './user-information';

describe('Test App', () => {
  test('should render user information', () => {
    render(<UserInformation title='Title' info='some-info' type='phone' />);

    expect(screen.getByText('some-info')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
