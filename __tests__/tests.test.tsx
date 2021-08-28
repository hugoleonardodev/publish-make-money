import '@testing-library/jest-dom';
import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Tests the behavior of the application. General routines and expected values.', () => {
  it('should renders makeMoney app home (index) page renders on Jest (JSDOM) environment', async () => {
    const options = { route: '/', useDocument: true };
    const { render } = await getPage(options);
    render();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();

    const inputText = await screen.findByRole('textbox', {
      name: /buscar empresa/i,
    });
    expect(inputText).toBeInTheDocument();
    userEvent.type(inputText, 'MSFT');
    expect(inputText).toHaveValue('MSFT');
    userEvent.type(inputText, '{enter}');

    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);

    const text = await screen.findAllByText('MSFT');
    expect(text).toHaveLength(1);

    const allButtons = await screen.findAllByRole('button');
    expect(allButtons).toHaveLength(13);
    userEvent.click(allButtons[2]);
  });
});
