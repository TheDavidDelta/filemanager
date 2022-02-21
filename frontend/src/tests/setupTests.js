import '@testing-library/jest-dom';

import jestFetchMock from 'jest-fetch-mock';
jestFetchMock.enableMocks();

// mixing jsdom with tsx transpilation
import React from "react";
global.React = React;
