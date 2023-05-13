import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { AppProviders } from '../../src/providers/AppProvider';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
