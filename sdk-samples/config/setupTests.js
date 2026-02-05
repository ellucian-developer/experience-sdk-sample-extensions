import React from 'react';
import '@testing-library/jest-dom';

// Import our setupExtensionContext function
import { setupExtensionContext } from '../src/utils/test-utils/testUtils';

beforeAll(() => {

    // add meta tags needed for path style sheet insertion points
    const metaMui = document.createElement('meta');
    metaMui.setAttribute('name', 'data-mui-styles');
    document.head.appendChild(metaMui);

    const metaGlobal = document.createElement('meta');
    metaGlobal.setAttribute('name', 'data-path-styles');
    document.head.appendChild(metaGlobal);

    const metaPath = document.createElement('meta');
    metaPath.setAttribute('name', 'data-path-global-styles');
    document.head.appendChild(metaPath);

});

// Run before each test
beforeEach(() => {
    setupExtensionContext();
});

global.React = React;

// polyfill window.crypto for testing nanoid
var nodeCrypto = require('crypto');

// mocks the standard browser crypto function in the global environment; this is necessary for
// running SDK unit tests, as the Path component library depends on the presence of crypto
global.crypto = {
    // eslint-disable-next-line no-sync
    getRandomValues: function(buffer) { return nodeCrypto.randomFillSync(buffer);}
};
