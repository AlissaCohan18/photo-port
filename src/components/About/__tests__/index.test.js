import React from "react";
// The render function will "render" the component. Jest creates a simulated DOM in a Node.js
// environment to approximate the DOM (no component is actually visibly rendered). The cleanup
// function is used to remove components from the DOM to prevent memory leaking, as well as variable
// or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// call the cleanup function using the afterEach global function from Jest to ensure that after each
// test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

//describe function to declare the component we're testing
// renders About test
describe('About component renders', () => {
  // First Test
  // 1st argument: a string declares what is being tested. 2nd argument: callback function runs the test
  //Note: 'test' can also be used interchangeably with 'it' to create a tes
  it('renders', () => {
    render(<About />);
  });
  
  // Second Test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})
