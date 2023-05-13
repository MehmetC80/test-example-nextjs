import { render, screen } from '../../../test-utils';
import MuiMode from '../../../../../src/components/mui/MuiMode';
//import { AppProviders } from '../../../../../src/providers/AppProvider';

/**
 *  With the wrapper option you can wrapp your testing context
 *  with the AppProviders so you can test it
 * notice in Version 01 you have to wrapp in every testing class
 * the Providers you need
 */

/** 
 * 
 * // Version 01
 * 
describe('MuiMode ', () => {
  it('renders text correctly ', () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });
});

*/

/**
 *
 * In Version 02 you dont need to wrapp because of the test-utils-tsx
 */

describe('MuiMode ', () => {
  it('renders text correctly ', () => {
    // render(<MuiMode />, {
    //   wrapper: AppProviders,
    // });
    render(<MuiMode />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
