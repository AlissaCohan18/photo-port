import React from 'react';
// The render function will "render" the component. Jest creates a simulated DOM in a Node.js environment
// to approximate the DOM (no component is actually visibly rendered). The cleanup function is used to 
//remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';

