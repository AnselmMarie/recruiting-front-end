/* Node Module */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
/* Component Content */
import { NavContainer } from './NavContainer';

afterEach(cleanup);

describe('<NavContainer />', () => {
  test('clickable nav has an image, text and caret', () => {
    const { container } = render(<NavContainer />);
    console.log('container', container);
  });

  test('non-clickable nav has an image, text and no caret', () => {

  });

  test('nav with children are clickable w/ caret changing on click', () => {

  });

  test('nav without children are NOT clickable', () => {

  });
});
