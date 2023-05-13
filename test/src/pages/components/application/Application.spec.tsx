import { render, screen } from '@testing-library/react';
import { Application } from '../../../../../src/components/application/Application';

/**
 * Priority Order for Queries to find Elements
 *  in the virtuell dom
 * 1. getByRole
 * 2. getByLabelText
 * 3. getByPlaceholderText
 * 4. getByText
 * 5. getByDisplayValue
 * 6. getByAltText
 * 7. getByTitle
 * 8. getByTestId
 */

describe('Application : ', () => {
  it('renders correctly', () => {
    render(<Application />);
    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    const locationElement = screen.getByRole('combobox');
    expect(locationElement).toBeInTheDocument();

    const checkedlement = screen.getByRole('checkbox');
    expect(checkedlement).toBeInTheDocument();

    const submitElement = screen.getByRole('button');
    expect(submitElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const pageSubHeading = screen.getByRole('heading', {
      level: 2,
    });
    expect(pageSubHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    const termsElement = screen.getByLabelText('Name');
    expect(termsElement).toBeInTheDocument();

    const placeHolderElement = screen.getByPlaceholderText('Fullname');
    expect(placeHolderElement).toBeInTheDocument();

    const inputElement = screen.getByDisplayValue('Memo');
    expect(inputElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();
  });
});
