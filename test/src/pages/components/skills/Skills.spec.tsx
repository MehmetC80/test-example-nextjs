import Skills from '../../../../../src/components/skills/Skills';
import { render, screen, logRoles } from '@testing-library/react';

describe('Skills', () => {
  const mySkills = ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'Java', 'SQL'];

  it('renders correcty', () => {
    render(<Skills skills={mySkills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('renders a list of skills', () => {
    render(<Skills skills={mySkills} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(mySkills.length);
  });

  it('renders Login button', () => {
    render(<Skills skills={mySkills} />);

    const loginButton = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginButton).toBeInTheDocument();
  });

  /**
   *  queryBy:
   *  Returns the matching node for a query, and return null if no elements match
   * Useful for asserting an element that is not present
   * thorws an error if more than one match is found
   *
   * queryAllBy:
   * Returns an arry of all matching nodes for a query, and return an empty
   * array if no elements match
   */

  it('Start learning button is not rendert', () => {
    render(<Skills skills={mySkills} />);

    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });

  /**
   *  findBy:
   * Returns a Promise which resolves when an element is found which matches the
   * given query
   * The promise is rejected if no element is found or if more than one element
   * is found  after a default timeout of 1000ms
   *
   *  findAllBy:
   *  Retuns a promise which resolves to an array of elements when any elements are
   *  found which match the given query
   * The promise is rejected if no elements are found after a default timeout of
   * 1000ms
   */
  it('Start learning Button is eventually displyed', async () => {
    const view = render(<Skills skills={mySkills} />);
    logRoles(view.container);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
